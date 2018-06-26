const eventBrite = new EventBrite();
const ui = new UI();


// listener 

document.getElementById('submitBtn').addEventListener('click', function(e){
    e.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    if(eventName !== ''){
       eventBrite.queryAPI(eventName, category)
       .then( data => {
           const eventsList = data.events.events;
            if(eventsList.length > 0){
                ui.displayEvents(eventsList);
            }else{
                ui.printMessage('No results found', 'text-center alert alert-danger mt-4');
            }
       })
    }else{
        ui.printMessage('That was an error', 'text-center alert alert-danger mt-4');
    }


})