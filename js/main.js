function firedup() {
    let el = document.getElementById('checkbox-ceditable');
    console.log(el);
    el.addEventListener('keydown', function(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            let ev = event.target.children[0];
            let li = document.createElement('li');
            let l = document.createElement('label');
            let x = document.createElement('input');
            li.id = "new-" + Date.now();
            x.type = "checkbox";
            x.id = "dewey-" + Date.now();
            x.name = "drone"
            x.value = "dewey";
            ev.appendChild(li);
            li.appendChild(l);
            l.appendChild(x);
            l.innerHTML += " Test";
            document.getElementById(li.id).focus();
        }
    });
}