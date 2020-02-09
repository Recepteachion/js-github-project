

// btnSubmit.addEventListener("click",function(){
//     fetch("https://api.github.com/search/users?q=")
// })


// document.addEventListener("DOMContentLoaded",function(){


    let searchInput = document.querySelector("input#search");
    let btnSubmit = document.querySelector(`input[type="submit"]`);
    

    btnSubmit.addEventListener("click",function(e){
        e.preventDefault();
        fetch("https://api.github.com/search/users?q="+`${searchInput.value}`,{
            method:"GET",
            "Content-Type":"application/json",
            Accept:"application/vnd.github.v3+json"
            // body:JSON.stringify({
            //     "login":"",
            //     "avatar_url":"",
            //     "url":""
            // })

            }).then(function(response){
                return response.json();
            }).then(function(json){
                kson=json;
                console.log(json[0]);

                // let userList = document.getElementById("user-list");
                // let newLi = document.createElement("li");
                // let newHeader = document.createElement("h3");
                // let newImg = document.createElement("img");
                // let newLink = document.createElement("a");

                // userList.appendChild(newLi);
                // newLi.appendChild(newHeader);
                // newLi.appendChild(newImg);
                // newLi.appendChild(newLink);


                for (let i=0;i<kson.items.length;i++){
                    let userList = document.getElementById("user-list");
                    let newLi = document.createElement("li");
                    let newHeader = document.createElement("h3");
                    let newImg = document.createElement("img");
                    let newLink = document.createElement("a");

                    userList.appendChild(newLi);
                    newLi.appendChild(newHeader);
                    newLi.appendChild(newImg);
                    newLi.appendChild(newLink);

                    newHeader.innerHTML = `${kson.items[i].login}`   
                    newImg.src = `${kson.items[i].avatar_url}`
                    newLink.innerHTML = `${kson.items[i].html_url}`
                    newLink.href = `${kson.items[i].html_url}`

                }



            

                    
            
        

    })
})

// })