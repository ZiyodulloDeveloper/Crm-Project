
/////    Sidebar //////

const openBtn = document.querySelector("#openSidebar")
 const closeBtn = document.querySelector("#closeSidebar")
 const sidebar = document.querySelector(".sidebar");

  openBtn.addEventListener("click",openFun);
  closeBtn.addEventListener("click",closeFun);

  function openFun(){
  sidebar.style.display = "flex"
  closeBtn.style.display = "flex"
  openBtn.style.display = "none"
  }
  function closeFun(){
    sidebar.style.display = "none";
    openBtn.style.display = "flex"
  }
  console.log(openBtn,closeBtn,sidebar)



/////   Guruhga qo'shish    /////
  const plusBtn = document.querySelector("#plusBtn");
  const select = document.querySelector(".royhatdan_otish");
  const closex = document.querySelector("#Close")
  const qoshish = document.querySelector(".plus")

  closex.addEventListener("click",xFun)
  plusBtn.addEventListener("click",plusFun)

  function plusFun(){
   select.style.display = "flex"
    qoshish.style.display = "none"
    qoshish.style.paddingLeft = "6%"
    qoshish.style.paddingTop = "8%"
   select.style.margin = "auto"
   select.style.marginTop = "8%"
  }
  function xFun(){
    select.style.display = "none"
    qoshish.style.display = "flex"
    qoshish.style.display = "flex"
  }