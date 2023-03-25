// const button = document.querySelector('.seeall')
// const bloc = document.querySelector('.bloc')


// button.addEventListener('click', ()=> {
//     bloc.classListAdd()
// })





const header = document.querySelector('.header')






document.addEventListener('scroll', (e)=> {
    if(window.scrollY > header.clientHeight) {
        header.classList.add('head-color')
    } else {
        header.classList.remove('head-color')

    }
})



const btn = document.querySelector('.nav-btn')


btn.addEventListener('click', (e)=> {
    header.classList.remove('head-color')

    
})


