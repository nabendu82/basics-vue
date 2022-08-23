Vue.createApp({
    data() {
        return {
            todos: [],
            entered: ''
        };
    },
    methods: {
        addTodo() {
            this.todos.push(this.entered);
            this.entered = '';
        }
    }
}).mount('#container');