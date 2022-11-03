window.onload = function(){
    const container = document.getElementById('container');
    const boxCounts = (container.offsetWidth /100) * (container.offsetHeight /100);
    const wrapper = document.getElementById('wrapper');

    function randomColors(){
        return (`#${Math.floor(Math.random()*16777215).toString(16)}`)
    }
    //add.box divs dynamically to the DOM
    for(let i = 0; i < boxCounts; i++){
        let box = document.createElement('div');
        box.className = 'box';
        wrapper.appendChild(box)
    }
    
    //add EventListener to the added divs
    const boxs = document.querySelectorAll('.box');
    boxs.forEach((el) => {
        el.addEventListener('mouseover', () => { 

            // addstars;
            el.style.backgroundColor = randomColors();
            })
        });
    }

