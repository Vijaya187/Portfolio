// tap contentens
var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    //remove class
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
     for (tabContent of tabContents) {
       tabContent.classList.remove("active-tab");
     }
     //class add
     event.currentTarget.classList.add("active-link");

     document.getElementById(tabname).classList.add("active-tab");

}

//open menu and close menu

var sideMenu = document.getElementById('sidemenu');

function openMenu(){
    sideMenu.style.right ='0';
    sideMenu.style.top ='-18px';
    sideMenu.style.transition ='0.5s';
}
function closeMenu(){
    sideMenu.style.right ='-300px';
    sideMenu.style.transition ='0.5s';
}


// 
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbytpJLZE4fFeWUL6FvSFSeQqNEaeM2lfYPLdhMt7o-j9JnRu6ZaTlsbqHUKJNEn5TM/exec";
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML ="Message sent succesfully!";
        setTimeout(function(){
          msg.innerHTML='';
        },3000)
        form.reset();
      })
      .catch(error => {
        msg.innerHTML="Error";
        setTimeout(function(){
          msg.innerHTML='';
        },3000)
        form.reset();
      })
  })


  //
  // 
  window.addEventListener('load',()=>{
    const loader =document.querySelector("#preloader");

    loader.classList.add("preloader-hidden");

    loader.addEventListener("transitionend", () =>{
      document.body.removeChild("loader")
    })
  })





// animation on scroll
// document.addEventListener("DOMContentLoaded", ()=>{
//   const divs = document.querySelectorAll('.animate');

//   const observer = new IntersectionObserver ((entries)=>{
//     entries.forEach(entry =>{
//       if(entry.isIntersecting){
//         entry.target.classList.add('in-view');
//       }
//     });
//   },{threshold: 0.1 });

//   divs.forEach(div =>{
//     observer.observe(div);
//   });
// });





