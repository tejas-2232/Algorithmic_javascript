// My short Introduction : I am a newbie called Rishab
// The challenge:The challenge is to create a function which will reverse the string which is passed as argument to the function
// Algorithmic thinking: I will create a function which will not only takes a single argument but takes multiple arguments
                       //and split that string into an array which is then reversed and stored as another array ,
                        //then i created a main array in which i store the joined version of reversed string and then return that main array
// code implementation :

function reverser(){
    var mainArray=[];
   for(var i=0;i<arguments.length;i++){
       if(typeof arguments[i]!='string'){
           throw TypeError();
       }
       var str=arguments[i];
       var strArray=[];
       var revStrArray=[];
       for(var a=0;a<arguments[i].length;a++){
        strArray.push(arguments[i][a]);
       }
        for(var a=strArray.length-1;a>=0;a--){
        revStrArray.push(strArray[a]);
       }
       mainArray.push(revStrArray.join(""));
   }
   return mainArray;
}

// to run : reverser("name","anotherName") will return => ["eman","emaNrehtona"]
