var iconExpanded = "assets/icon/arrow-expanded.png";
var iconCollapsed = "assets/icon/arrow-collapsed.png";


function expandToggle(id){
  this.id = id;
  var panel = document.getElementById(id +"panel");
  var icon = document.getElementById(id+"Icon");
  var header = document.getElementById(id+"Header");

  //if max height exists (isnt null), then collapse the section.
  //otherwise, set it to the scroll height of the panel.
  if (panel.style.maxHeight){
    icon.src = iconCollapsed;
    header.innerHTML = "COLLAPSED";
    panel.style.maxHeight = null;
  } else {
    icon.src = iconExpanded;
    header.innerHTML = "EXPANDED";
    panel.style.maxHeight = panel.scrollHeight + "px";
  }

}
