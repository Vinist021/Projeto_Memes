
$.getJSON("https://api.imgflip.com/get_memes", (response) => 
    {
        for(var m of response.data.memes) {
            document.getElementById("memes").innerHTML += 

            `
            <div class="card mx-auto mt-4 p-3 pt-1" style="width: 18rem;">             
                <div class="card-body">
                  <h5 class="card-title">${m.name} Bling</h5>
                </div>
                <img src="${m.url}" class="card-img-top shadow rounded" alt="${m.name}">
            </div>
            
            `
        }

        
    }

);