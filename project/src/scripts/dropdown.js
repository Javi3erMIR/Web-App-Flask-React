var instances = null;
var label1 = document.getElementById('dropLabel');
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    instances = M.Dropdown.init(elems,{
        coverTrigger: false,
    });
});

item1.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    label1.textContent = e.target.textContent;
});

item2.addEventListener('click', (e) => {
    console.log(e.target.textContent);
    label1.textContent = e.target.textContent;
});