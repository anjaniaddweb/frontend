const app=Vue.createApp({
    data(){
        return {
            name: 'Anjani',
            age: 22,
            imageurl: 'https://images.unsplash.com/photo-1615591144999-0b56442e2116?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
        };
    },
    methods:{
        addAge(){
            return this.age+5;
        },
        ranNum(){
            return Math.random();
        }
    }
});

app.mount('#assignment');