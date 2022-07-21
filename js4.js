//Exercice API : Poissons


var loadFishs = function(event) {
    fetch("https://www.fishwatch.gov/api/species/red-snapper")
       .then(function (response) {
           return response.json();

       })

       .then(function (jsonResponse) {
           fishsUL = document.querySelector("#fishs");
           jsonResponse.fishs.forEach(function(fish) {
               fishLI = document.createElement("li");
               fishLI.innerHTML = fish;
               fishsUL.appendChild(fishLI);
            
           });

       })
}

document.addEventListener("readystatechange", loadFishs);

