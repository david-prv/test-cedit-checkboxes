function handleMouseLeave(event) {
    let text = event.path[0].innerHTML.replace(`<input type="checkbox" id="dewey" name="drone" value="dewey">`, "");
    text = text.replace('<br>', '');
    let id = event.path[0].id;
    if(text.length < 1) {
        console.log("Element empty: ", id);
        let el = document.getElementById(id);
        el.parentNode.removeChild(el);
    }
}

function blockClick(event) {
    event.stopPropagation();
    event.preventDefault();
    console.log("AWD");
}

function toggleCEdit() {
    let el = document.getElementById('checkbox-ceditable');
    if(el.getAttribute('contenteditable') === "true") {
        el.setAttribute('contenteditable', 'false');
        document.getElementById('lbl').innerHTML = "Toggle contentEditable (OFF)";
        Array.prototype.forEach.call(document.getElementsByTagName('label'), function (item, i, arr) {
            item.removeEventListener('click', blockClick);
        });
    } else {
        el.setAttribute('contenteditable', 'true');
        document.getElementById('lbl').innerHTML = "Toggle contentEditable (ON)";
        Array.prototype.forEach.call(document.getElementsByTagName('label'), function (item, i, arr) {
            item.addEventListener('click', blockClick);
        });
    }
}

function firedup() {
    let el = document.getElementById('checkbox-ceditable');

    Array.prototype.forEach.call(document.getElementsByTagName('label'), function (item, i, arr) {
        item.addEventListener('mouseleave', handleMouseLeave);
        item.addEventListener('click', blockClick);
    });

    el.addEventListener('keydown', function(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            event.stopPropagation();
            let ev = event.target.children[0];
            let li = document.createElement('li');
            let l = document.createElement('label');
            let x = document.createElement('input');
            l.id = "new-" + Date.now();
            x.type = "checkbox";
            x.id = "dewey";
            x.name = "drone"
            x.value = "dewey";
            ev.appendChild(li);
            li.appendChild(l);
            l.appendChild(x);
            l.innerHTML += "Test";
            l.addEventListener('mouseleave', handleMouseLeave);
        }
    });
}
