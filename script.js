var cn = document.getElementById('content');
var count=1;

var next = document.getElementById('next');
var prev = document.getElementById('prev');
var c1 = document.getElementById('content1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');
next.addEventListener('click', function()
{
    
    if(count>=1 && count<8)
    {
    count++;
    display(count);
    // count++;
    }
    console.log(count);
});

prev.addEventListener('click',function(){
    if(count>1 && count<=8)
    {
    count--;
    display(count);
    }
    console.log('prev: ',count);
});

function display(x){
    if(count===1)
    {
        cn.innerHTML='';
        cn.append(c1);
    }

    else if(count===2)
    {
        c2.setAttribute('id', 'content2');
        cn.innerHTML='';
        cn.append(c2);
    }
    else if(count===3)
    {
        c3.setAttribute('id','content3');
        cn.innerHTML='';
        cn.append(c3);
    }
    else if(count===4)
    {
        c4.setAttribute('id','content4');
        cn.innerHTML='';
        cn.append(c4);
    }
    else if(count===5)
    {
        c5.setAttribute('id','content5');
        cn.innerHTML='';
        cn.append(c5);
    }
    else if(count===6)
    {
        c6.setAttribute('id','content6');
        cn.innerHTML='';
        cn.append(c6);
    }
    else if(count===7)
    {
        c7.setAttribute('id','content7');
        cn.innerHTML='';
        cn.append(c7);
    }
    else
    {
        c8.setAttribute('id','content8');
        cn.innerHTML='';
        cn.append(c8);
    }
}


// var a1 = document.getElementById('A');
// var a2 = document.getElementById('S');
// var a3 = document.getElementById('E');