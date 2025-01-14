 //selectors
 const sidebarElement = document.querySelector('.sidebar');
 const menuButtonElement = document.querySelector('.menu-button');
 const closeSidebarButtonElement = document.querySelector('.closemenubar');
 // Listener
 menuButtonElement.addEventListener('click', showsidebar);
 closeSidebarButtonElement.addEventListener('click', hidesidebar );
 // function
 function showsidebar()
 {
     sidebarElement.style.display = "flex";
 }
 function hidesidebar ()
 {
     sidebarElement.style.display = "none";
 }