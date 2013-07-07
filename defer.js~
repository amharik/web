var menuItems = IBEAM.class("menu-item");
for (var i=0;i<menuItems.length;i++)
{
  menuItems[i].onclick=function(event){
      /*var menuItemList= menuItems;
      for (var i=0;i<menuItemList.length;i++)
      {
      menuItemList[i].classList.remove('active');
      }*/
      var menuItemList = IBEAM.class('active');
      for (var i=0;i<menuItemList.length;i++)
      {
      menuItemList[i].classList.remove('active');
      }
      this.classList.add('active');
      if(IBEAM.datastore[this.innerText.toLowerCase()])
      {
	IBEAM.render[this.innerText.toLowerCase()]();
      }
      else
      {
	var script = document.createElement("script");
	script.src = this.innerText.toLowerCase()+".json";
	document.body.appendChild(script);
      }
    }
}