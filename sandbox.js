const para=document.querySelectorAll('p');
para.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    else if(p.textContent.includes('success')){
        p.classList.add('success');
    }
    else{
        p.classList.add('ok');
    }
});
