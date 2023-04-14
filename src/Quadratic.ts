let a = document.querySelector('#a') as HTMLInputElement
let b = document.querySelector('#b') as HTMLInputElement
let c = document.querySelector('#c') as HTMLInputElement
const output = document.querySelector('#output') as HTMLElement


const Quad = ()=>{

    const descriminant = b.valueAsNumber*b.valueAsNumber-4*a.valueAsNumber*c.valueAsNumber
    const x1 = (-b.valueAsNumber+Math.sqrt(b.valueAsNumber*b.valueAsNumber-4*a.valueAsNumber*c.valueAsNumber))/2*a.valueAsNumber
    const x2 = (-b.valueAsNumber-Math.sqrt(b.valueAsNumber*b.valueAsNumber-4*a.valueAsNumber*c.valueAsNumber))/2*a.valueAsNumber
    const root = descriminant<0 ? 'The equation has no roots':descriminant===0? `The equation has repeated roots which is ${x1.toFixed(2)} an`:`the roots are ${x1.toFixed(2)} and ${x2.toFixed(2)}`

    

if(a.value==='' || b.value===''||c.value===''){
    output.innerHTML='all fields are required'
}
else{
   console.log(root)
   output.innerHTML=root
}
   
   
}

//1,-8,15