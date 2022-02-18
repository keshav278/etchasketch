const canvas = document.querySelector('#canvas');
let newSize = document.querySelector('input[type="range"]');
let colorValue=document.querySelector('input[type="color"]');

newSize.addEventListener('input',function(){
     document.querySelector('#showsize').textContent=`${this.value}x${this.value}`;
});


createCanvas(16);
const setsize = document.getElementById('setsize');
setsize.addEventListener('click',function(){
    deleteCanvas();
    createCanvas(Number(newSize.value));
    console.log(newSize.value);
});
let side = Number(size.value);




function createCanvas(side){
    
    canvas.style.display='grid';
    const clr = document.querySelector('#clear');
    const rainbow=document.querySelector('#rainbow');
    const defalt=document.querySelector('#default');
    const custom=document.querySelector('#custom');
    canvas.style.gridTemplateColumns=`repeat(${side},1fr)`;
    canvas.style.gridTemplateRows=`repeat(${side},1fr)`;
    for(let i = 0;i<side*side;i++){
        const cell = document.createElement('div');
        cell.style.width=`auto`;
        cell.style.height=`auto`;
        cell.style.border='1px solid black';
        
        cell.addEventListener('mouseover',function(e){
           if(e.buttons==1){
               cell.style.backgroundColor='black';
           }
           else if(e.buttons==2){
               cell.style.backgroundColor='white';
           }
        });
        clr.addEventListener('click',()=>{
            cell.style.backgroundColor='white';
            
        });
        
        rainbow.addEventListener('click',()=> {
             cell.addEventListener('mouseover',function(e){
                if(e.buttons==1){
                    let x=Math.floor(Math.random()*256);
                    let y=Math.floor(Math.random()*256);
                    let z=Math.floor(Math.random()*256);
                    cell.style.backgroundColor=`rgb(${x},${y},${z})`;
                }
                else if(e.buttons==2){
                    cell.style.backgroundColor='white';
                }
             });
        });
        defalt.addEventListener('click',()=>{
            cell.addEventListener('mouseover',function(e){
                if(e.buttons==1){
                    cell.style.backgroundColor='black';
                }
                else if(e.buttons==2){
                    cell.style.backgroundColor='white';
                }
             });
        });
        custom.addEventListener('click',()=>{
            cell.addEventListener('mouseover',function(e){
                if(e.buttons==1){
                    cell.style.backgroundColor=colorValue.value;
                }
            });
            
        });
        canvas.appendChild(cell);
    }
}
function deleteCanvas(){
    let child = canvas.lastElementChild;
    while(child){
        canvas.removeChild(child);
        child=canvas.lastElementChild;
    }

}

/**/