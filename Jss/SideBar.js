 //selectors
 const SideBarElement = document.querySelector('.SideBar');
 const MenuButtonElement = document.querySelector('.MenuButton');
 const CloseSideBarButtonElement = document.querySelector('.CloseMenuIcon');
 // Listener
 MenuButtonElement.addEventListener('click', ShowSideBar);
 CloseSideBarButtonElement.addEventListener('click', HideSideBar );
 // function
 function ShowSideBar()
 {
     SideBarElement.style.display = "flex";
 }
 function HideSideBar ()
 {
     SideBarElement.style.display = "none";
 }