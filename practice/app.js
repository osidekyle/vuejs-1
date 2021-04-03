const app=Vue.createApp({
    
    data(){
        return {
            firstName:"Kyle",
            lastName:'Hawkins',
            email:"123@stuff.com",
            gender:"male"
        }
    },
    methods:{
        async getUser(){
            const res=await fetch("https://randomuser.me/api")
            const {results}=await res.json();



            this.firstName=results[0].name.first
            this.lastName=results[0].name.last
            this.email=results[0].email
            this.gender=results[0].gender
            
        }
    }
})

app.mount('#app')