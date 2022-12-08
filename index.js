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
            title.innerHTML = `Title: ${movie.title}`
            runtime.innerHTML = `Runtime: ${movie.runtime} `
            capacity.innerHTML = `Capacity: ${movie.capacity}`
            showtime.innerHTML = `Showtime: ${movie.showtime}`
            ticket.innerHTML = `Tickets Available: ${movie.tickets_available}`
            description.innerHTML = `Movie's Description: ${movie.description}`
    
        }

    const btn = document.querySelector("#buy-ticket")

    btn.addEventListener("click", ticketButton)

    function ticketButton(e){
            e.preventDefault()


    let ticket = document.querySelector("#tickets")
    ticket.innerHTML -= movie.tickets_available.id
   
}
    })
})

