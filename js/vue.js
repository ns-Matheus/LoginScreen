var app = new Vue({
    el: '#app',
    data: {
        name: '',
        password: '',
        message: false,
        counter: 0
    },
    mounted() {
        if (localStorage.name) {
            this.name = localStorage.name;
        }
        if (localStorage.password) {
            this.password = localStorage.password;
        }
    },
    methods: {
        persist() {
            localStorage.name = this.name;
            localStorage.password = this.password;
        },
        greet: function (event) {
            alert('Login Realizado com sucesso ' + this.name + '!')
            if (event) {
                alert(event.tagName.target)
            }
        }
    }
})
app.greet()
