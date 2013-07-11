// OPTIMIZED CODE IN 2 LINES
// $() USED 3 TIMES 
// SIBLINGS() USED 2 TIMES
 
$(".menu-item").click(function(event){
  $("#"+( ( $this=$(this) ).addClass('active').siblings().toggleClass('active',false) ,$this ).html().toLowerCase() ).show().siblings().hide();
});


// * READABLE CODE IN 3 LINES
// * $() USED 4 TIMES
// * SIBLINGS() USED 2 TIMES
// 
// $(".menu-item").click(function(event){
//   
//   $(this).addClass('active').siblings().toggleClass('active',false);
//   $("#"+$(this).html().toLowerCase()).show().siblings().hide();
// 
// });

// 
// 

// * OPTIMIZED CODE IN 2 LINES
// * $() USED 5 TIMES
// * SIBLINGS USED 1 TIME
// 
// $(".menu-item").click(function(event){
//   $("#"+((_this=$(this)).addClass('active').siblings().toggleClass('active',false).each(function(index,element){$("#"+$(element).html().toLowerCase()).hide()}) ,_this).html().toLowerCase() ).show();
// });


// 
// AT THE BEGINING.
// $() USED 8 TIMES
// 
// $(".menu-item").click(function(event){
//   $('.menu-item.active').toggleClass('active',false);
//   $(this).addClass('active').siblings().toggleClass('active',false);
//   $("#"+$(this).html().toLowerCase()).show().siblings().hide();
//   $("#"+$(this).text().toLowerCase()).hide();
//   ($(this).parent().parent())
// });
// 
// 
// LEARNING.
// $(".menu-item").each(
//   function(index, element)
//   {
//     $(element).click(function(event)
//     {
//       $(this).addClass('active');
//       alert("#"+$(this).text());
//       $("#"+$(this).text().toLowerCase()).hide();
//       
//     });
//   });
// 
// PREVIOUS SCRIPT
// var menuItems = IBEAM.class("menu-item");
// 
// for (var i=0;i<menuItems.length;i++){
//   IBEAM.pages[i]=IBEAM.helper.spaceEater(menuItems[i].innerHTML.toLowerCase(), "_");
//   menuItems[i].onclick=function(event){
//     page = IBEAM.helper.spaceEater(this.innerHTML.toLowerCase(), "_");
//     DEBUG.print("defining page "+page);
//     IBEAM.ui.activate(this,'active');
//     IBEAM.helper.loadPage(page);
//   }
//   //     JSONP callback
//   IBEAM.render[IBEAM.pages[i]]=IBEAM.helper.generateRender(IBEAM.pages[i]);
// }
// IBEAM.helper.loadPage('home');
// 
// 
// var footerMenuItems = IBEAM.query('#container #footer #bottomline a');
// for (var i=0;i<footerMenuItems.length;i++){
//   
//   DEBUG.print(IBEAM.helper.spaceEater(footerMenuItems[i].innerHTML.toLowerCase(), "_"));
//   
//   
//   footerMenuItems[i].onclick = function(event)
//   {
//     item = IBEAM.helper.spaceEater(this.innerHTML.toLowerCase(), "_");
//     DEBUG.print("Clicked "+item);
//     description = IBEAM.id(item);
//     DEBUG.print("ACCESSING "+description);
//     IBEAM.ui.activate(description,'show');
//   }
// }