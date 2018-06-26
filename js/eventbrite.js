class EventBrite {
    constructor(){
        this.auth_token = 'MLE5ZNQ3G3NU364RFSB5';
        this.orderby = 'date';
    }
    async getCategoriesAPI(){
        const response = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

     const categories = await response.json();

     return{
        categories
     }

     

    }
    async queryAPI(eventName, category) {
        const eventsResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderby}&categories=${category}&token=${this.auth_token}`);

   

        const events = await eventsResponse.json();

        return {
             events
        }
   }

}