(function(){
   require.config({});

   var elemA = document.getElementById('a');
   var elemB = document.getElementById('b');

   elemA.addEventListener('click', (function(e){
     require(['a'], function(moduleName){
       console.log(moduleName, 'loaded!');
     });
   }));

   elemB.addEventListener('click', (function(e){
     require(['b'], function(moduleName){
       console.log(moduleName, 'loaded!');
     });
   }));

}).call(this);
