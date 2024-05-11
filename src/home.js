import pizza from './pizza.jpg';

function generateContent(){
    const content = document.getElementById("content");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const img = document.createElement("img");
    p.textContent ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    h1.textContent= "Lorem ipsum";
    img.src = pizza;
    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(p);
    
}

export {generateContent};