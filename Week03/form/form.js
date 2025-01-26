document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/form');
        xhr.send(formData);
    }); 
});

function handleForm(ev) {
    ev.preventDefault();
    let form = ev.target;
    let formData = new FormData(form);
}

for (let key of formData.keys()) {
    console.log(key, formData.get(key));
}

