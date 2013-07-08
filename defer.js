var menuItems = IBEAM.class("menu-item");
for (var i=0;i<menuItems.length;i++){
  IBEAM.pages[i]=menuItems[i].innerHTML.toLowerCase();
  menuItems[i].onclick=function(event){
      page = this.innerHTML.toLowerCase();
      IBEAM.ui.activate(this);
      IBEAM.helper.loadPage(page);
    }
//     JSONP callback
  IBEAM.render[IBEAM.pages[i]]=IBEAM.helper.generateRender(IBEAM.pages[i]);
}
IBEAM.helper.loadPage('home');