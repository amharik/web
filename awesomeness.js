
var DEBUG = DEBUG||{
  __DEBUG__:true,
  
  debug_count:0,
  
  print:function(msg, pre, post)
  {
    pre=pre||function(args){args=args||"";console.log(args)} ;
    post=post||function(args){args=args||"";console.log(args)}
    
    if(this.__DEBUG__)
    {
      pre();
      if(console.log)
      {
      console.log("[DEBUG "+this.debug_count+"]\t"+msg)
      }
      else
      {
	alert("[DEBUG "+this.debug_count+"]\t"+msg)
      }
      post();
      this.debug_count+=1;
    }
  }
}
var IBEAM=IBEAM||{}
IBEAM.namespace= function (namespace_str){
  var modules = namespace_str.split('.'), parent=IBEAM, i;
  if(modules[0] == 'IBEAM')
  {
    modules = modules.slice[1];
  }
  for(i=0;i<modules.length;i+=1)
  {
    if(typeof parent[modules[i]] === 'undefined')
    {
      parent[modules[i]]={};
    }
    parent = parent[modules[i]]
  }
  return parent;
}
IBEAM.id= function(nodeId)
{
  return document.getElementById(nodeId);
}
IBEAM.class = function (nodeClass)
{
  return document.getElementsByClassName(nodeClass);
}

IBEAM.namespace('test.hello').sayHello=function(){
  /*
  var helloNode = document.getElementById("hello");
  helloNode.onClick = function SayHello(){};
  */
  alert('Test Succeded'); 
}
DEBUG.print('IBEAM.test.hello.sayHello()');
IBEAM.namespace('test').module= (function(){ var x="Awesomeness";return{getX:function(){return x;}}}());
DEBUG.print('IBEAM.test.module.getX()');

// // declare Datastore
IBEAM.namespace('datastore');
IBEAM.namespace('render');

// // // function callback
IBEAM.render['home']=function(jsonp_data)
{
  if(jsonp_data)
  {
  DEBUG.print(jsonp_data.home);
  IBEAM.datastore['home']=jsonp_data.home
  }
  IBEAM.id('el_diablo').innerHTML=IBEAM.datastore['home'];
}

IBEAM.render['contact']=function(jsonp_data)
{
  
  if(jsonp_data)
  {
    DEBUG.print(jsonp_data.contact);
    IBEAM.datastore['contact']=jsonp_data.contact;
  }
  IBEAM.id('el_diablo').innerHTML=IBEAM.datastore['contact'];
}

IBEAM.render['projects']=function(jsonp_data)
{
  
  if(jsonp_data)
  {
    DEBUG.print(jsonp_data.projects);
    IBEAM.datastore['projects']=jsonp_data.projects
  }
  IBEAM.id('el_diablo').innerHTML=IBEAM.datastore['projects'];
}

IBEAM.render['help']=function(jsonp_data)
{
  
  if(jsonp_data)
  {
    DEBUG.print(jsonp_data.help);
    IBEAM.datastore['help']=jsonp_data.help
  }
  IBEAM.id('el_diablo').innerHTML=IBEAM.datastore['help'];
}