function play(){
 var name1=document.getElementById("name1").value;
  var name2=document.getElementById("name2").value;
 if(name1.length<=2){
   alert("Please enter at least 3 character");
 }
 if(name2.length<=2){
   alert("Please enter at least 3 character");
 }
 else{
    var random=Math.floor(Math.random()*100);
    document.getElementById("print").innerHTML= name1 +" and " +name2+" your reletaionship level is " +random +" %";
 }

}
