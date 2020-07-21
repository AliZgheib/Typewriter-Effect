document.addEventListener('DOMContentLoaded',()=>{

const data=document.querySelector('.data');

const names=['Developer','Designer','Creator'];
let position=0;
main(names,position);


function main(names,position){

   
        
          addchar(names,position).then(()=>{
              delchar(names,position).then(()=>{

                if(position<names.length-1){
                    position++;
                    console.log(name[position]+"position: "+position);
                    main(names,position);
                }
                else{
                   main(names,0);
                }
              });
          });
   
}

//500 350

function addchar(names,position){
    
return new Promise((resolve,reject)=>{
 x=names[position];
    Array.from(x).forEach((character,index2)=>{

        setTimeout(() => {
         data.innerHTML+=character;
         

         if(500*index2==500*(x.length-1)){
             setTimeout(()=>{
                resolve();
             },2000)
         }
         
        }, 300*index2);
      
   
     });
})

}


function delchar(names,position){

return new Promise((resolve,reject)=>{

    x=names[position];
    Array.from(x).forEach((character,index2)=>{

        setTimeout(() => {      

var str= x;
var newStr = str.substring(0, str.length - (index2+1));
         data.innerHTML=newStr;

         if(350*index2==350*(x.length-1)){
            setTimeout(()=>{
               resolve();
            },1000)
        }

        }, 200*index2);
      
   
     });

});

}

});