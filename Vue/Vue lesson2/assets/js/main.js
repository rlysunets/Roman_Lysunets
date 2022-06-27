const App = {
    data() {
        return {
            API_KEY: "e6735353",
            search: "batman",
            movieList: [],
            movieInfo: {},
            favourite: [],
            showModal: false,

        }
    },
    created() {
        const local = localStorage.getItem("user_favourites")
        this.favourite = JSON.parse(local)
    },
    methods: {
        searchMovie() {
            if (this.search !== "") {
                axios.get(`http://www.omdbapi.com/?apikey=${this.API_KEY}&s=${this.search}`)
                .then(response => {
                    this.movieList = response.data.Search
                    this.search = ""
                })
                .catch(error => this.showErr(error))
            }
        },
        showMovieInfo() {
            this.showModal = true
        },
        getMovieInfo(id) {
            axios.get(`http://www.omdbapi.com/?apikey=${this.API_KEY}&i=${id}`)
            .then(response => {
                this.movieInfo = response.data
                this.showMovieInfo()
            })
            .catch(error => this.showErr(error))
        },
        addToFavourites(id) {
            const index = this.movieList.findIndex((el) => el.imdbID === id)

            if (this.favourite.find((el) => el.imdbID === id) === undefined) {

                this.favourite.push(this.movieList[index]);

                // console.log(this.movieList[index]);
            }
            localStorage.setItem("user_favourites", JSON.stringify(this.favourite))
        },
        showErr(err) {
            let html = ""
                html += `
                    <div class="modal_overlay">
                        <div class="my_modal text-bg-secondary">
                            ${err.code}. Try again later.
                        </div>
                    </div>
                `
            document.body.insertAdjacentHTML("afterbegin", html)
            // showModal = true

            setTimeout(() => {
                let el = document.querySelector(".modal_overlay")
                el.classList.add("none")
                // showModal = false

            },3000)
        },
    }
}

Vue.createApp(App).mount("#app")