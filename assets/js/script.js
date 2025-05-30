let barBtn = document.querySelector('.bar');
let crossBtn = document.querySelector('.cross');
let box = document.querySelector('.box');
let mbox = document.querySelector('.menu-box');
let logoBox = document.querySelector('.box-img img'); 

crossBtn.addEventListener('click', function()
{
    box.classList.add('hide');
    box.classList.remove('active');
});
barBtn.addEventListener('click', function()
{
     box.classList.remove('hide');
    box.classList.add('active');
});

window.addEventListener('click', function(e){
    // console.log(e.target.classList.contains('menu-list'));
    // console.log(barBtn.contains(e.target)); //works
    // console.log(box.contains(e.target)); //works
    

    if(!barBtn.contains(e.target) && !box.contains(e.target))
    {
        box.classList.remove('active');
    }


});

let test = document.querySelectorAll('.menu-box a');

test.forEach((items)=>{

    items.addEventListener('click', function()
{
    box.classList.remove('active');
});


});

logoBox.addEventListener('click', function()
{
    box.classList.remove('active');
});