let myDataArray = ["alisa", "anna", "armor king", "asuka", "azucena", "bob", "bryan", "claudio", "clive", "devil jin", "dragunov", "eddy", "fahkumram", "feng", "heihachi", "hwoarang", "jack-8", "jin", "jun", "kazuya", "king", "kuma", "kunimitsu", "lars", "law", "lee", "leo", "leroy", "lidia", "lili", "miary zo", "nina", "panda", "paul", "raven", "reina", "shaheen", "steve", "victor", "xiaoyu", "yoshimitsu", "zafina"]
let options = ["crouch", "sidestep left", "sidewalk left", "sidestep right", "sidewalk right", "fuzzy duck", "interupt", "high crush", "low crush", "stand", "ssl fuzzy", "ssr fuzzy", "sidestepable (tbd)", "low parry"]
let punish = ["10f", "11f", "12f", "13f", "14f", "15f", "16f"]
let throws = ["break: 1", "break: 2", "break: 1+2"]
//delete
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

        const moveData = await response.json()
        const movesForConsole = moveData
            .filter((move) => move["#frames_normal"] !== "Command")
            .map((move) =>{
            const command = move["#frames_normal"] || move["__9"] || "Unknown move";
            const hitLevel = typeof move[""] === "string" ? move[""] : "";
            const notes = move["__6"] || "";
            const tags = move["__7"] || "";
            const defenseOptions = new Set();
            const hitLevels = hitLevel.split(",").map((level) => level.trim().toLowerCase());
            const hasHighAttack = hitLevels.includes("h") || hitLevels.includes("h!");
            const hasMidAttack = hitLevels.includes("m") || hitLevels.includes("m!");
            const hasLowAttack = hitLevels.includes("l") || hitLevels.includes("l!") || hitLevels.includes("special low");
            const hasJail = /jail/i.test(notes);
            const isHoming = /homing/i.test(`${notes} ${tags}`);

            if (hasLowAttack) {
                defenseOptions.add(options[0]);
                defenseOptions.add(options[13]);

                if (hitLevels.includes("special low")) {
                    defenseOptions.add(options[7]);
                }

                if (!isHoming) {
                    defenseOptions.add(options[3]);
                }
            }

            if (hasHighAttack) {
                defenseOptions.add(options[9]);

                if (!hasJail) {
                    defenseOptions.add(options[0]);
                }

                if (!isHoming) {
                    defenseOptions.add(options[3]);
                }
            }

            if (hasMidAttack) {
                defenseOptions.add(options[9]);

                if (!isHoming) {
                    defenseOptions.add(options[3]);
                }
            }

            if (hitLevels.join(", ") === "l, m, h" || hitLevels.join(", ") === "l, m, l") {
                defenseOptions.add(options[5]);
            }

            return {
                move: command,
                hitLevel,
                options: [...defenseOptions]
            };
        });

        console.table(movesForConsole);
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