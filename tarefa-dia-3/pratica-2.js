var impares = [];
function exibeImpar(n1,n2){
   while(n1<=n2){
      if((n1%2)==1){
        impares.push(n1);
      }
      n1++    
   }
}
exibeImpar(0,16);
console.log(impares);