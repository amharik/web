var menuItems = IBEAM.class("menu-item");
for (var i=0;i<menuItems.length;i++){
  IBEAM.pages[i]=menuItems[i].innerHTML.replace(" ", "_").toLowerCase();
  menuItems[i].onclick=function(event){
      page = this.innerHTML.replace(" ", "_").toLowerCase();
      DEBUG.print("defining page "+page);
      IBEAM.ui.activate(this);
      IBEAM.helper.loadPage(page);
    }
//     JSONP callback
  IBEAM.render[IBEAM.pages[i]]=IBEAM.helper.generateRender(IBEAM.pages[i]);
}
IBEAM.helper.loadPage('home');