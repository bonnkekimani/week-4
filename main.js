//Goodbye Message
function changeText(id) {
    id.innerHTML = "Thank you for chosing Us!";
}
//pop up
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
//form alert
function alertFunction(){
    alert("The form was submitted")
}



//DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){

    
//Form submit & display
let form = document.getElementById("regForm1")
form.addEventListener('submit',function(event){
     event.preventDefault()// prevents the form from auto submitting.
    let title = document.getElementById("name").value
    console.log(title);
    let po = document.getElementById("box").value
    console.log(po);
    let yahoo = document.getElementById("gmail").value
    console.log(yahoo);
    let auth = document.getElementById("pass").value
    console.log(auth);
    let tel = document.getElementById("phone").value
    console.log(tel);
    let town = document.getElementById("city").value
    console.log(town);
})




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
            let sub = data[i].likes
                    
            console.log(data[i]);
            // const likeButton =document.createElement("button");//add
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML +=`
            <img src="${pic}"style="width:300px; height:250px;" />
            <h5>Name: ${ref}</h5>
            <h5>Description: ${more}</h5>
            <h5>Budget: ${price}</h5>
            <h5>Location: ${area}</h5>
            <button id="likeCount">Likes: ${sub}</button>

            `
            character.appendChild(card)
            // likes.onclick=function(){
            //     subs+=1;
            // }
            // let likeCount = document.getElementById("likeCount");
            // sub.onclick=function(){ //Implementing Functionality
            //     votes+=1
            //     sub.textContent = `${votes}`
          
            //   }


            }
    })


})





 