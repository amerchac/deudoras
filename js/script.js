var menu_side = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

btn_open.addEventListener("click", open_close_menu);

function open_close_menu() {
  body.classList.toggle("body_move");
  menu_side.classList.toggle("menu__side_move");
}

if (window.innerWidth < 760) {
  body.classList.add("body_move");
  menu_side.classList.add("menu__side_move");
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    body.classList.remove("body_move");
    menu_side.classList.remove("menu__side_move");
  }

  if (window.innerWidth < 760) {
    body.classList.add("body_move");
    menu_side.classList.add("menu__side_move");
  }
});
