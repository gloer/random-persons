const sectionPersoner = document.querySelector("#sectionPersoner");

function showUsers(json) {

    console.log(json);
    const personer = json.results;
    for(const person of personer) {
        sectionPersoner.innerHTML += `
            <article>
                <img src="${person.picture.large}" >
                <h2>${person.name.title} ${person.name.first} ${person.name.last}</h2>            
            </article>
        `;
    }

}

async function getUsers() {    
    const response = await fetch("https://randomuser.me/api/?results=20");
    const myJson = await response.json();
    showUsers(myJson); 
}

getUsers();