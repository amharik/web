// debug helper
var DEBUG = DEBUG||{
  __DEBUG__:true, 
  debug_count:0,
  print:function(msg, pre, post){
    pre=pre||function(args){} ;
    post=post||function(args){}
    if(this.__DEBUG__){
      pre();
      if(console.log)
      {
      console.log("[DEBUG "+this.debug_count+"]\t"+msg);
      }
      else
      {
	alert("[DEBUG "+this.debug_count+"]\t"+msg);
      }
      post();
      this.debug_count+=1;
    }
  }
}
// Application Object
var IBEAM=IBEAM||{}
IBEAM.namespace= function (namespace_str){
  var modules = namespace_str.split('.'), parent=IBEAM, i;
  if(modules[0] == 'IBEAM'){
    modules = modules.slice[1];
  }
  for(i=0;i<modules.length;i+=1){
    if(typeof parent[modules[i]] === 'undefined'){
      parent[modules[i]]={};
    }
    parent = parent[modules[i]];
  }
  return parent;
}
IBEAM.namespace('ui');
IBEAM.namespace('datastore');
IBEAM.namespace('render');
IBEAM.namespace('util')

// utils
IBEAM.id= function(nodeId){
  return document.getElementById(nodeId);
}
IBEAM.class = function (nodeClass){
  return document.getElementsByClassName(nodeClass);
}
IBEAM.ui.activate=function(menu)
{     var menuItemList = IBEAM.class('active');
      for (var i=0;i<menuItemList.length;i++)
      {
      menuItemList[i].classList.remove('active');
      }
      menu.classList.add('active');
}
IBEAM.ui.switch=true;
IBEAM.pages=[];

IBEAM.ui.progress=0;
IBEAM.ui.WIDTH=1024;
IBEAM.ui.GET_PARTITION=function(){return (IBEAM.ui.WIDTH/IBEAM.pages.length)};
IBEAM.ui.progress=0;
IBEAM.ui.counter=0;
IBEAM.ui.incrementProgress=function()
{
   var progress=IBEAM.id('progress');
   IBEAM.ui.progress+=IBEAM.ui.GET_PARTITION();
   if(IBEAM.ui.progress <IBEAM.ui.WIDTH)
   {
     progress.style.width=IBEAM.ui.progress;
   }
   else
   {
     progress.style.width=IBEAM.ui.WIDTH;
   }
}
IBEAM.ui.resetProgress=function()
{
   progress.style.width=0;
}
// request
IBEAM.namespace('helper').loadPage=function(page){
   
//   IBEAM.ui.resetProgress();
   
      if(IBEAM.datastore[page]){
	IBEAM.render[page]();
	DEBUG.print('loadPage: PAGE LOADED FROM DATASTORE');
      }
      else{
	var script = document.createElement("script");
	script.src = page+".json";
	document.body.appendChild(script);
	DEBUG.print('loadPage: PAGE LOADED FROM NET');
	IBEAM.ui.incrementProgress();
      }
}
// callback
IBEAM.namespace('helper').generateRender=function(page){
  return(
    function(jsonp_data){
      if(jsonp_data){
	DEBUG.print(jsonp_data[page]);
	IBEAM.datastore[page]=jsonp_data[page];
      }
      IBEAM.id('el_diablo').innerHTML=IBEAM.datastore[page];
    });
}
// test
IBEAM.namespace('test.hello').sayHello=function(){
  alert('Test Succeded'); 
}
DEBUG.print('IBEAM.test.hello.sayHello()');
IBEAM.namespace('test').module= (function(){ var x="Awesomeness";return{getX:function(){return x;}}}());
DEBUG.print('IBEAM.test.module.getX()');