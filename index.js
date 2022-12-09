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

            image.src = movie.poster
            title.innerHTML = `${movie.title}`
            runtime.innerHTML = `${movie.runtime} `
            capacity.innerHTML = `${movie.capacity}`
            showtime.innerHTML = `${movie.showtime}`
            ticket.innerHTML = `${movie.tickets_available}`
            description.innerHTML = `${movie.description}`
    
        }

    const btn = document.querySelector("#btn")

    btn.addEventListener("click", ticketButton)

    function ticketButton(e){
        e.preventDefault()
        let ticketBar = document.querySelector("#tickets").textContent;
        let ticketEntry = document.querySelector("#ticket-entry").value;
        
        ticketBar = parseInt(ticketBar,10)
        ticketEntry = parseInt(ticketEntry,10)||0

        ticketEntry = ticketEntry - ticketBar


        fetch(`http://localhost:3000/movies/${id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
                
              },
              body: JSON.stringify({tickets_available:ticketEntry})
        }).then(res => res.json()).then(movie => tickets_available.textContent = movie.tickets_available )
        e.reset()
    


}
    })
})

