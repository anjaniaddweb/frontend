const app=Vue.createApp({
    data(){
        return{
            friends:[
                {
                    id:'anjani',
                    name:'anjani patel',
                    phone:'9999999999', 
                    email: 'anjani@gmail.com'
                },
                {
                    id:'rakhi',
                    name:'rakhi panchal',
                    phone:'9090909090', 
                    email: 'rakhi@gmail.com'
                },
            ],
        };
    },
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
        <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data(){
        return { 
            detailsAreVisible: false,
            friend: {
                id:'anjani',
                name:'anjani patel',
                phone:'9999999999', 
                email: 'anjani@gmail.com'
            },
        };
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible= !this.detailsAreVisible;
        }
    }
});

app.mount('#app');