
const form = document.querySelector("#form ")
const ticket = document.querySelector("#tickets")
const input = document.createElement("input")
input.type = "hidden"
input.id = "id"
form.appendChild(input)


fetch(" http://localhost:3000/movies")
 .then(res => res.json())
 .then(function(movies){
    console.log(movies)
    movies.map(function(movie){
        let list = document.querySelector("#list")
        let movieList = document.createElement("li")
        movieList.className =("movie-list")
        list.appendChild(movieList)

        movieList.textContent = movie.title

        movieList.addEventListener("click", clickName)

        function clickName() {
        
            const image = document.querySelector("#images")
            const title = document.querySelector("#title")
            const runtime = document.querySelector("#runtime")
            const capacity = document.querySelector("#capacity")
            const showtime = document.querySelector("#showtime")
            const ticket = document.querySelector("#tickets")
            const description = document.querySelector("#description")
            let soldTicket = document.querySelector("#sold")
            let input = document.querySelector("#id")

            image.src = movie.poster
            title.innerHTML = `${movie.title}`
            runtime.innerHTML = `${movie.runtime} `
            capacity.innerHTML = `${movie.capacity}`
            showtime.innerHTML = `${movie.showtime}`
            ticket.innerHTML = `${movie.tickets_available}`
            description.innerHTML = `${movie.description}`
            soldTicket.innerHTML = movie.tickets_sold
            input.value = movie.id
            
    
        }


    })
})

const button = document.getElementById("button")

button.addEventListener("click", ticketButton)

function ticketButton(e){
   e.preventDefault()

   let availableTicket = document.querySelector("#tickets").textContent;
   let buyTicket = document.querySelector("#entry").value;
   let id = document.querySelector("#id").value;
   let ticketSold = document.querySelector("#sold").textContent;
   let capacity = document.querySelector("#capacity").textContent;
   let newTicket = parseInt(ticketSold) + parseInt(buyTicket);
   

   availableTicket = parseInt(availableTicket)
   ticketSold = parseInt(ticketSold)
   capacity = parseInt(capacity)
   newTicket = parseInt(newTicket)
   buyTicket = parseInt(buyTicket)

   if ((ticketSold > capacity)&&(availableTicket == 0)) {
    ticketSold = capacity
    tickets_available = 0
   }
   else if ((buyTicket > availableTicket) && (availableTicket >= 0)){
    alert("Buy the shown number of tickets")
   }
   else {
    availableTicket = availableTicket - buyTicket
    ticketSold = capacity - availableTicket
    ticketSold.textContent = newTicket
    availableTicket.textContent = parseInt(capacity) - parseInt(ticketSold)

   }

    // let newTicket = parseInt(ticketSold) + parseInt(buyTicket);





   fetch(`http://localhost:3000/movies/${id}`,{
       method: "PATCH",
       headers: {
           'Content-Type': 'application/json'
           
         },
         body: JSON.stringify({tickets_available:availableTicket, tickets_sold:ticketSold})
   }).then(res => res.json()).then(movie => tickets_available.textContent = movie.tickets_available)
  
   e.reset() 

   



}


