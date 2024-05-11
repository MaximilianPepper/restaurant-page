function generateInfo(){
    const from = document.getElementById("content");
    const content = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    p.textContent ="phone number: +39 333 3333432";
    h1.textContent= "Lorem ipsum";
    content.appendChild(h1);
    content.appendChild(p);
    from.appendChild(content);
    
}

export {generateInfo};