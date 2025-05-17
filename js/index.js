
document.addEventListener('DOMContentLoaded', async (ev)=>{
    document.querySelectorAll('.inner .fade-in').forEach((element,index) => {
        setTimeout(()=>{
            element.style.opacity = 1
        }, 1000*index)
    });

    document.querySelector('.toggle-promotion').addEventListener('click', (ev)=>{
        if('hide' in document.querySelector('.promotion').classList) document.querySelector('.promotion').classList.remove('hide')
        else document.querySelector('.promotion').classList.add('hide')
    })

    document.querySelectorAll('.swiper-prev').forEach(
        (element, index) =>{
        element.addEventListener('click',(ev) =>{
            element.parentElement.querySelector('.swiper-wrapper').style.transform = 'translateX(-50%)'
        })
    })

    document.querySelectorAll('.search').forEach((element) => {
        const input = element.querySelector("input");
        element.addEventListener('click',(ev) =>{
            input.focus()
            element.classList.add("focused")
            input.placeholder = "통합 검색"
        })

        input.addEventListener('blur', ()=>{
            element.classList.remove("focused")
            input.placeholder = ""
        });
    })

    document.querySelectorAll('.swiper-wrapper').forEach((element) => {
        let slideLength =  element.querySelectorAll('swiper-slide').length
    })
})

