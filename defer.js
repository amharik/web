var menuItems = document.getElementsByClassName("menu-item");
for (var i=0;i<menuItems.length;i++)
{
  menuItems[i].onclick=function(event){
      /*var menuItemList= menuItems;
      for (var i=0;i<menuItemList.length;i++)
      {
      menuItemList[i].classList.remove('active');
      }*/
      var menuItemList = document.getElementsByClassName('active');
      for (var i=0;i<menuItemList.length;i++)
      {
      menuItemList[i].classList.remove('active');
      }
      this.classList.add('active');
    }
}