// var currentValue = 0;
function handleClick(myRadio) {
    // alert(document.registration.conference.elements[1].name);
    // alert(document.registration.conference.elements["Доклад"]);


    var radios = document.getElementsByName('has-presentationS');

    for (var i = 0, length = radios.length; i < length; i++) {
        if (!radios[i].checked) {
            continue
        }
        var showPresentationTitle = document.getElementById('show-presentation-title');
        var presentationTitle = document.getElementById('presentation-title');
        if(radios[i].id == 'presentation-yes') {
            showPresentationTitle.style.display = 'block'
            presentationTitle.setAttribute('required', 'required');
        } else {
            showPresentationTitle.style.display = 'none'
            presentationTitle.removeAttribute('required');
        }
    }
    
}

function clearForm() {
    document.getElementById('myForm').reset();
}
