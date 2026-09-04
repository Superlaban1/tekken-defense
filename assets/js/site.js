let myDataArray = ["alisa", "anna", "armor king", "asuka", "azucena", "bob", "bryan", "claudio", "clive", "devil jin", "dragunov", "eddy", "fahkumram", "feng", "heihachi", "hwoarang", "jack-8", "jin", "jun", "kazuya", "king", "kuma", "kunimitsu", "lars", "law", "lee", "leo", "leroy", "lidia", "lili", "miary zo", "nina", "panda", "paul", "raven", "reina", "shaheen", "steve", "victor", "xiaoyu", "yoshimitsu", "zafina"]
let options = ["crouch", "sidestep left", "sidewalk left", "sidestep right", "sidewalk right", "fuzzy duck", "interupt", "high crush", "low crush", "stand", "ssl fuzzy", "ssr fuzzy", "sidestepable (tbd)", "low parry"]
let punish = ["10f", "11f", "12f", "13f", "14f", "15f", "16f/launch"]
let throws = ["break: 1", "break: 2", "break: 1+2"]

function readerDynamic(){
    const listSection = document.getElementById("list-s");
    listSection.innerHTML = "";

    //updates the visual list
    myDataArray.forEach((entry) => {
        const characters = document.createElement("section")
        
        const characterIMG = document.createElement("img")
        characterIMG.src = `assets/img/tekkendefenseimgs/${entry.replaceAll(" ", "-")}.png`;

        characters.appendChild(characterIMG);
        listSection.appendChild(characters);
    });
}

async function fetchdata(){
    try{
        const response = await fetch("assets/characters/paul.json")
        if (!response.ok) {
            throw new Error(`Could not load paul.json: ${response.status}`)
        }

        const moveData = await response.json()
        moveData.forEach((move) =>{
            const hitLevel = move[""];

            if (hitLevel === "L" || hitLevel === "h") {
                console.log(hitLevel, options[0]);
            } 
            else if (hitLevel === "L, m, h" || hitLevel === "L, m, L") {
                console.log(hitLevel, options[5]);
            }
            else {
                console.log(hitLevel)
            }
        })
    }
    catch(caught){
        console.log("dummy")
    }
    finally{
        console.log("hello :D");
    }

}
fetchdata()
readerDynamic()