// -------------------------- Code By Faizal-Deku ----------------------------
function convert() {   // Convert() Function 
     const a = Number(document.getElementById("a").value) // Scored Marks Input Value Store in A
     const b = Number(document.getElementById("b").value) // Out of Marks Input Value Store in B
     
     const c = a/b*100  // Percentage Formula   
     // console.log(c)  Check Error
     const result = document.getElementById("result")  // Result Store in Result
     result.innerHTML = c.toFixed(2) +"%" // Show Result in HTML  
}

 //Formula  a = Scored Marks , b = Out of Marks c= Result 
 // c= a/b*100 / Result = Scored Marks / Out of Marks*100 
