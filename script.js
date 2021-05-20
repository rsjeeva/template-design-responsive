
var count=1;

var count1=0;
var nav = document.getElementById('nav');

var div = document.createElement('div');

var link1 = document.createElement('a');
var link2 = document.createElement('a');
var link3 = document.createElement('a');

function display(){

    if(count%2!==0)
    {
    link1.innerHTML='About';
    link1.href='#About';
    link1.setAttribute('class','hove');
    link1.setAttribute('id','clic1');
    link1.style.color='#9A9DA0';
    link1.style.textDecoration='none';
    link1.style.fontSize='1rem';
    link1.style.marginLeft="2rem";
    link1.style.paddingBottom='0.5rem';
    div.append(link1);

    link2.innerHTML='Services';
    link2.href='#Services';
    link2.setAttribute('class','hove');
    link2.setAttribute('id','clic2');
    link2.style.color='#9A9DA0';
    link2.style.textDecoration='none';
    link2.style.fontSize='1rem';
    link2.style.marginLeft="2rem";
    link2.style.paddingBottom='0.5rem';
    div.append(link2);

    link3.innerHTML='Contacts';
    link3.setAttribute('class','hove');
    link3.setAttribute('id','clic3');
    link3.href='#Contact';
    link3.style.color='#9A9DA0';
    link3.style.textDecoration='none';
    link3.style.fontSize='1rem';
    link3.style.marginLeft="2rem";
    link3.style.paddingBottom='0.5rem';
    div.append(link3);

    div.style.display="block";

    // nav.append(div);

    div.style.position="fixed";
    // div.style.zIndex='10';
    div.style.display='flex';
    div.style.flexDirection='column';
    div.style.width='100%';
    div.style.height='15vh';
    div.style.top='5.5rem';
    div.style.justifyContent='space-between';
    div.style.backgroundColor='#343A40';


    document.body.append(div);  
    count++;
    }

    else{
        console.log(count);
        count++;

        div.style.display='none';
        
        // link1.innerHTML='';
        // link2.innerHTML='';
        // link3.innerHTML='';
        // div.append(link1,link2,link3);
        // nav.append(div);
        
    }

    var clik1 = document.getElementById('clic1');
    var clik2 = document.getElementById('clic2');
    var clik3 = document.getElementById('clic3');   

    clik1.addEventListener('click',function(){
        div.style.display='none';
        count1++;
    });
    clik2.addEventListener('click',function(){
        div.style.display='none';
        count1++;
    });
    clik3.addEventListener('click',function(){
        div.style.display='none';
        count1++;    
    });
}



