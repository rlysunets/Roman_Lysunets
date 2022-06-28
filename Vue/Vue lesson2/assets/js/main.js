const movieItem = {
    props: ["movie"],
    methods: {
        getMovieInfo(id) {
            this.$emit("getMovie", id)
        },
        addToFavourites(id) {
            this.$emit("addToFavourites", id)
        }
    },
    template: "#movieItem"
}

const App = {
    data() {
        return {
            API_KEY: "e6735353",
            search: "",
            selected: ["Movie", "Series"],
            select: "Movie",
            movieList: [],
            movieInfo: {},
            favourite: [],
            showModal: false,
            storage: {}
        }
    },
    components: {
        movieItem
    },
    created() {
        // при завантаженні додатку берем дані з localStorage і записуєм у змінну storage
        const local = localStorage.getItem("user_favourites")
        this.storage = JSON.parse(local)

        // перебираєм storage і записуем у favourite, щоб відобразити при завантаженні App
        for (key in this.storage) {
            this.favourite.push(this.storage[key])
        }
    },
    methods: {
        searchMovie() {
            if (this.search !== "") {
                axios
                .get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.select}`)
                    .then(response => {
                    //  якщо статус 200, але фільму немає у списку пошуку
                    if (response.data.Response === "False") {
                        this.showInfo("Movie not found!")
                    } else {
                        this.movieList = response.data.Search              
                    }
                    this.search = "" 
                })
                //  не вдалося зєднатия з сервером. Н-д не вірний ключ   
                .catch(error => {
                    this.showInfo(`${error.code}. Try again later.`)
                })
            //  ПУстий рядок в запиті
            } else {
                this.showInfo("Enter movie title.")
            }
        },
        // запит на один, конкретний фільм. Спрацьоовує при натисканні по кнопці Detail.
        // Шукаєм інформацію про цей фільм передаючи id, тобто imdbID
        getMovieInfo(id) {
            axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${id}`)
            .then(response => {
                // Результат записуєм у movieInfo
                this.movieInfo = response.data
                this.showMovieInfo()
            })
            .catch(error => {
                this.showInfo(error.code)
            })
        },
        // змінюєм showModal на true
        showMovieInfo() {
            // showModal - це змінна-флаг. Може бути або true або false. Показувати .modal_overlay чи ні
            this.showModal = true
        },
        //  спрацьовує по кліку на кнопку "like"
        addToFavourites(id) {
            // індекс фільму по якому клікнули у movieList
            const index = this.movieList.findIndex((el) => el.imdbID === id)
            // теж саме для favourite, перевіряєм чи є такий фільм у списку
            const index2 = this.favourite.findIndex((el) => el.imdbID === id)
            
            // якщо фільму немає у favourite, тобто якщо функція повернула -1, пушим його у favourite
            // При цьому додаємо фільму у movieList новий ключ inFav зізначенням true
            if (index2 === -1) {
                let item = this.movieList[index]
                item.inFav = true
                this.favourite.push(item);
                this.showInfo("Added to favourite films.")
            } else {
                // якщо фільм є у favourite, вирізаєм його із масиву
                this.favourite.splice(index2, 1)
                this.showInfo("Removed from favourite films.")
            }
            // незалежно чи ми додаєм фільм чи видаляєм, localStorage перезаписується
            localStorage.setItem("user_favourites", JSON.stringify(this.favourite))
        },
        // створюєм новий масив arr => перебираєм movieList => всім елементам додаєм inFav і взалежності від того чи елемент є
        // у favourite чи немає встановлюєм inFav true або false => повертаємо arr
        // Тобто тепер метод movieListWithFavourite - це movieList з доданим inFav у кожен елемент
        movieListWithFavourite() {
            let arr = []

            this.movieList.forEach(el => {
                let findFav = this.favourite.find(item => {
                    return el.imdbID === item.imdbID
                })
                el.inFav = findFav !== undefined ? true : false
                arr.push(el)
            })
            return arr
        },
        // метод для виведення модального вікна з повідомленнями
        showInfo(text) {
            let html = ""
                html += `
                    <div class="modal_overlay">
                        <div class="my_modal text-bg-warning text-center fs-2">
                            ${text}
                        </div>
                    </div>
                `
            document.body.insertAdjacentHTML("afterbegin", html)

            setTimeout(() => {
                let el = document.querySelector(".modal_overlay")
                el.classList.add("none")

            },2000)
        }
    }
}

Vue.createApp(App).mount("#app")