
function generateAbout(){
    const from = document.getElementById("content");
    const content = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    p.textContent ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    h1.textContent= "About this page";
    content.appendChild(h1);
    content.appendChild(p);
    from.appendChild(content);
    
}

export {generateAbout};