fetch("http://localhost:3000/Projects",)
    .then(res => res.json())
    .then(data => {
        const  character = document.querySelector(".jstyles")
        for(let i = 0; i < data.length; i++) {
            console.log(data[i]);
            let pic = data[i].image;
            let ref = data[i].name;
            let more = data[i].description;
            let price = data[i].budget;
            let area = data[i].location;
                    
            console.log(data[i]);
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML +=`
            <img src="${pic}"style="width:300px; height:250px;" />
            <h5>Name: ${ref}</h5>
            <h5>Description: ${more}</h5>
            <h5>Budget: ${price}</h5>
            <h5>Location: ${area}</h5>
            `
            character.appendChild(card)
            }
    })


 