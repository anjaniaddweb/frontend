const app=Vue.createApp({
    data(){
        return{
            courseGoalA: 'finish the course and learn vue',
            courseGoalB: '<h2>master vue and build amazing apps</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods:{
        outputGoal: function() {
            const randomNumber=Math.random();
            if(randomNumber<0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal');