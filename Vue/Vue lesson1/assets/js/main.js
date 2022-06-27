// ! component

const TodoItem = {
    name: "TodoItem", //не обовязкове поле
    props: ["item", "index"],
    methods: {
        markDone(index) {
            this.$parent.markDone(index)
        }
    },
    // template: "#todo_item"
    template: `
        <li class="d-flex align-items-center justify-content-between mb-3">
          {{ item.text }}
          <span class="badge bg-success" v-if="item.isDone">Done</span>
          <span class="badge bg-danger" v-else>Not done</span>
          <button type="button" class="btn btn-success btn-sm" :disabled="item.isDone" 
            @click="markDone(index)">Done</button>
      </li>
    `
}



const App = {
    data() {
        return {
            todoList: [
                {
                    text: "Milk",
                    isDone: true
                },
                {
                    text: "potato",
                    isDone: false
                }
            ],
            taskText: "",
        }
    },
    // для того шоб привязати компонент до основного аплікейшину потрібно components і 
    // вказати назву компонента
    components: {
        TodoItem
    },
    methods: {
        addTodo() {
            if (this.taskText !== "") {
                this.todoList.push({
                    text: this.taskText,
                    isDone: false
                })
                this.taskText = ""
            }
        },
        markDone(index) {
            this.todoList[index].isDone = true
        }
    }
}

Vue.createApp(App).mount("#app");