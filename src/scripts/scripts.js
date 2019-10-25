console.log("CONNECTED!!!!!")

const jsonDiv = document.querySelector("#national-parks")

 fetch("http://localhost:8088/parks")
    .then(parks => parks.json())
    .then(parsedParks => {
        
        console.table(parsedParks)
    })