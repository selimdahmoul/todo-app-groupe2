console.log("To-Do App initialisée.");
function ajouterTache(){
    const input = document.getElementById("tasKInput");
    const texte =input.value.trim();
    
    if (texte !=="") {
        const li =document.createElement("li");
        li.textContent = texte;
        document.getElementById("tasKList").appendChild(li);
        input.value = "";
    }

    function activerSuppressionTache(){
        const liste = document.getElementById("tasKList");
        liste.addEventListener ("click",function(event) {
            const elementClique =event.target;
            if (elementClique.tagName==="LI"){
                elementClique.remove();
            }
        });
    }


    const boutonAjout = document.getElementById("addTasKBtn");
    boutonAjout.addEventListener("click",ajouterTache);

}