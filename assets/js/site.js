
//model code
let myDataArray = ["alisa", "anna", "armor king", "asuka", "azucena", "bob", "bryan", "claudio", "clive", "devil jin", "dragunov", "eddy", "fahkumram", "feng", "heihachi", "hwoarang", "jack-8", "jin", "jun", "kazuya", "king", "kuma", "kunimitsu", "lars", "law", "lee", "leo", "leroy", "lidia", "lili", "miary zo", "nina", "panda", "paul", "raven", "reina", "shaheen", "steve", "victor", "xiaoyu", "yoshimitsu", "zafina"]
let options = ["crouch", "sidestep left", "sidewalk left", "sidestep right", "sidewalk right", "fuzzy duck", "interupt", "high crush", "low crush", "stand", "ssl fuzzy", "ssr fuzzy", "sidestepable (tbd)", "low parry"]
let punish = ["10f", "11f", "12f", "13f", "14f", "15f", "16f/launch"]
let throws = ["break: 1", "break: 2", "break: 1+2"]

//view code
function SelectView(characterCallback){
    const listSection = document.getElementById("list-s");
    listSection.innerHTML = "";

    //updates the visual list
    myDataArray.forEach((entry) => {
        const characters = document.createElement("section")
        
        const characterIMG = document.createElement("img")
        characterIMG.id = entry.replaceAll(" ", "-");
        characterIMG.className = "character-image";
        characterIMG.src = "assets/img/tekkendefenseimgs/" + entry.replaceAll(" ", "-") + ".png";
        characterIMG.addEventListener("click", () => characterCallback(characterIMG.id));

        characters.appendChild(characterIMG);
        listSection.appendChild(characters);
    });
}

function CharacterView(characterID){
    const listSection = document.getElementById("list-s");
    listSection.innerHTML = "";

    const characterTitle = document.createElement("h2");
    characterTitle.innerText = characterID + " movelist";
    listSection.appendChild(characterTitle);
}

//controller code
function CharacterController(characterID){
    CharacterView(characterID);
}

async function fetchdata(){
    try{
        const response = await fetch("assets/characters/paul.json")

        const moveData = await response.json()
        moveData.forEach((move) =>{
            const hitLevel = move[""];
            const cmdinput = move["#frames_normal"]
            const blockframes = move["__3"]

            console.log(blockframes)
            console.log(cmdinput)

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
SelectView(CharacterController)