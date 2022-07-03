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
            search: "titanic",
            selected: ["Movie", "Series", "Episode"],
            select: "Movie",
            year: "",
            movieList: [],
            movieInfo: {},
            favourite: [],
            showModal: false,
            // rating
            rating: "",
            // theme
            theme: "dark",
            // pagination
            totalPages: 0,
            page: 1, 
            activeItem: 0,
        }
    },
    components: {
        movieItem
    },
    created() {
        // при завантаженні додатку берем дані з localStorage і записуєм у змінну favourite
        this.favourite = JSON.parse(localStorage.getItem("user_favourites"))
        // theme cookie
        this.theme = document.cookie
    },
    methods: {
        searchMovie() {
            if (this.search !== "") {
                axios
                .get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}&type=${this.select}&page=${this.page}&y=${this.year}`)
                    .then(response => {
                    // перевырка року
                    if (this.year.length !== 0 && this.year.length !== 4 ) {
                        this.showInfo("Year must contain four digits.")
                        // this.year = ""
                    } else if (this.year.length === 4 && this.year < 1900 || this.year > new Date().getFullYear()) {
                        this.showInfo(`Enter year from 1900 to ${new Date().getFullYear()}.`)
                    }
                    //  якщо статус 200, але фільму немає у списку пошуку
                    else if (response.data.Response === "False") {
                        this.showInfo("Movie not found!")
                    } else {
                        this.movieList = response.data.Search
                        // рахуємо кількість сторінок з фільмами
                        this.totalPages = Math.ceil(response.data.totalResults / 10)
                    }
                    // this.search = "" 
                })
                //  не вдалося зєднатия з сервером. Н-д не вірний ключ   
                .catch(error => {
                    this.showInfo(`${error.code}. Try again later.`)
                })
            //  ПУстий рядок в запиті
            } else  {
                this.showInfo("Enter movie title.")
            } 
        },
        goToPage(pageNum, i) {
            this.page = pageNum
            this.activeItem = i;
            this.searchMovie()
        },
        // запит на один, конкретний фільм. Спрацьоовує при натисканні по кнопці Detail.
        // Шукаєм інформацію про цей фільм передаючи id, тобто imdbID
        getMovieInfo(id) {
            axios.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${id}`)
            .then(response => {
                // Результат записуєм у movieInfo
                this.movieInfo = response.data

                this.rating = (this.movieInfo.imdbRating * 10) + "%"
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
                if (this.favourite.length > 1) {
                    this.favourite.splice(index2, 1)
                    this.showInfo("Removed from favourite films.")
                } else {
                    this.favourite.splice(index2, 1)
                    this.showInfo("Removed from favourite films. List with favourite films is empty.")
                } 
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
        // метод для зміни теми
        changeTheme() {
            if(this.theme === "dark") {
                this.theme = "light"
                document.cookie = "light"
            } else {
                this.theme = "dark"
                document.cookie = "dark"
            }
            // без кукі
            // this.theme = this.theme === "dark" ? "light" : "dark"
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
        },
    }
}

Vue.createApp(App).mount("#app")