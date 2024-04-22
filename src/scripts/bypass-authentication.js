let annoucementDiv = document.querySelector(".hidden.w-fit > p");
annoucementDiv.innerHTML = `<p class="text-center font-semibold">Only 195 people and <strong>Pecunia</strong> have access to this list</p>`;

Object.entries(p.OT).forEach(e => {
    e[1].minAccessLevel = 1
});


//Could hook into useContext and check for the object of user and trigger this code. 
//But unfortunatly due to hydration and server matching with client code it refresh whole webpack modules. 
//Once I find out what triggers the refresh I can hack into this and make it even better.