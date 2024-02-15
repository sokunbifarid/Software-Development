const button = document.querySelector("button");

function clicked()
{
    var blueBackground = document.getElementById("onClickBackground");
    var closeEnvelope = document.getElementById("close-envelop-id");
    var openEnvelope = document.getElementById("open-envelop-id");
    var floatingHearts = document.getElementById("floatingHearts-id");
    var notes = document.getElementById("note-id");
    blueBackground.style.scale = "5";
    closeEnvelope.style.display = "none"; 
    openEnvelope.style.display = "block";
    floatingHearts.style.display = "none";
    notes.style.display = "flex";
    notes.style.top = "0";//"50%";
}