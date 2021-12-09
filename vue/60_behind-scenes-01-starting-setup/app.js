const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message=this.$refs.userText.value;
      // console.log(this.$refs.userText);
    },
  },
});

app.mount('#app');

const app2=Vue.createApp({
  templates:`
  <p>{{ favouriteMeal }}</p>
  `,
  data(){
    return{
      favouriteMeal: 'Pizza'
    };
  }
});

app2.mount('#app2');

const data={
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

const handler={
  set(target, key, value){
    if(key==='message'){
      target.longMessage=value+'world!';
    }
    target.message=value;
  }
};
const proxy = new Proxy(data, handler);

proxy.message='Hello!!!';

console.log(proxy.longMessage);