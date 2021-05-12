import ejemplo from "./example.js";
import registro1 from "./generate.js";
import registro2 from "./generate2.js";
import registro3 from "./generate3.js";
import registro4 from "./generate4.js";

let token = 1;
let done = true;

while (done) {
    let count = 0;

    switch (token) {
        case 1:
                // console.log("1");
                
                registro1.forEach(()=>{
                    
                    enviar(registro1[count])
                    count++;
                })
                
                token = 2;
            break;
    
        case 2:
                // console.log("2");
                registro2.forEach(()=>{
                    
                    registro2[count].factura = registro2[count].factura + 100

                    enviar(registro2[count])
                    count++;
                })
                token=3;
            break;

        case 3:
                // console.log("3");
                registro3.forEach(()=>{
                    
                    registro3[count].factura = registro3[count].factura + 200

                    enviar(registro3[count])
                    count++;
                })
                
                token=4;
            break;
        
        case 4:
                // console.log("4");
                registro4.forEach(()=>{
                    
                    registro4[count].factura = registro4[count].factura + 300

                    enviar(registro4[count])
                    count++;
                })
                done=false;
            break;

        default:
            break;
    }

    
}

console.log("completado con exito")

function enviar(objeto) {
//   console.log(JSON.stringify(objeto.factura));
  const direccion = 'http://localhost:4000/guardar'
  fetch(direccion,{
          method:'POST',
          body: JSON.stringify(objeto),
          headers:{"Content-type": "application/json"}
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
}
