import './styles.css';
import { generateContent  } from "./home";
import { generateAbout } from './about';
import { generateInfo } from './contact';
function cleanPage(){
    const div = document.getElementById("content");
    div.innerHTML="";
}
// render home first
generateContent();

// buttons logic
const homebtn = document.getElementById("home");
const aboutbtn = document.getElementById("about");
const infobtn = document.getElementById("info");

homebtn.addEventListener("click", ()=>{
    cleanPage();
    generateContent();
} )

aboutbtn.addEventListener("click", ()=>{
    cleanPage();
    generateAbout();
} )

infobtn.addEventListener("click", ()=>{
    cleanPage();
    generateInfo();
} )
