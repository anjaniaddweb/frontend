const app=Vue.createApp({
    data(){
        return { userInput: '' };
    },
    methods:{
        showAlert(){
            alert('This works!');
        },
        saveInput(event){
            this.userInput=event.target.value;
        },
        confirmInput(){
            this.confirmedInput=this.userInput;
        }
    }
});

app.mount('#assignment');
