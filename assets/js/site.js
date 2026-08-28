let myDataArray = ["alisa", "anna", "armor king", "asuka", "azucena", "bob", "bryan", "claudio", "clive", "devil jin", "dragunov", "eddy", "fahkumram", "feng", "heihachi", "hwoarang", "jack-8", "jin", "jun", "kazuya", "king", "kuma", "kunimitsu", "lars", "law", "lee", "leo", "leroy", "lidia", "lili", "miary zo", "nina", "panda", "paul", "raven", "reina", "shaheen", "steve", "victor", "xiaoyu", "yoshimitsu", "zafina"]

function readerDynamic(){
    const listSection = document.getElementById("list-s");
    listSection.innerHTML = "";

    //updates the visual list
    myDataArray.forEach((entry) => {
        const characters = document.createElement("section")
        
        const characterIMG = document.createElement("img")
        characterIMG.id = entry.replaceAll(" ", "-");
        characterIMG.className = "character-image";
        characterIMG.src = "assets/img/tekkendefenseimgs/" + entry.replaceAll(" ", "-") + ".png";

        characters.appendChild(characterIMG);
        listSection.appendChild(characters);
    });
}
readerDynamic()