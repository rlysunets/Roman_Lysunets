const App = {
    data() {
        return {
            API_BOT_ID: "5248267262:AAGS92XigzCP4LToTDiE8rcdXUcKcFF7cSs",
            CHAT_ID: "-1001733809580",
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
            error: {
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            },
            answer: {
                success: null,
                text: ""
            }
        }
    },
    methods: {
        checkAndSend() {
            let valid = true
            if (this.name === "") {
                this.error.name = "Enter your name"
                valid = false
            }
            if (this.name.length === 1) {
                this.error.name = "Minimal name length is two chars"
                valid = false
            }
            if (this.email === "") {
                this.error.email = "Enter your email"
                valid = false
            } else {
                if (this.isValidEmail(this.email) === false) {
                    this.error.email = "Enter valid email"
                    valid = false
                }
            }
            if (this.phone === "") {
                this.error.phone = "Enter your phone number"
                valid = false
            }
            if (this.subject === "") {
                this.error.subject = "Enter subject text"
                valid = false
            }
            if (this.message === "") {
                this.error.message = "Enter message text"
                valid = false
            } 

            if (valid) {
                const message_text = "<i>Feedback data</i>" +
                    "%0a<b>Name: </b>"+this.name+
                    "%0a<b>Email: </b>"+this.email+
                    "%0a<b>Phone: </b>"+this.phone+
                    "%0a<b>Subject: </b>"+this.subject+
                    "%0a<b>Message: </b>"+this.message
            
                fetch(`https://api.telegram.org/bot${this.API_BOT_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${message_text}&parse_mode=HTML`)
                    .then(resp => {
                        // console.log(resp);
                        return resp.json()
                    })
                    .then(resp => {
                        if (resp.ok) {
                            this.answer.success = true
                            this.answer.text = "Message successfully send"
                            this.name = this.email = this.phone = this.subject = this.message = "" 
                        } else {
                            this.answer.success = false
                            // this.answer.text = "Some erroe eccures. Please try again"
                            this.answer.text = resp.description
                        }
                        setTimeout(() => {
                            this.answer.success = null
                            this.answer.text = ""
                        }, 3000)
                    })
                    .catch(() => {
                        this.answer.success = false
                        this.answer.text = "Some error eccures. Please try again later"
                    })
            }

        },
        resetError(field) {
            this.error[field] = ""
        },
        isValidEmail(email) {
            return Boolean(email.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ))
        }
    }
}

Vue.createApp(App).mount("#app")