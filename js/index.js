document.querySelectorAll('.inner .fade-in').forEach((element, index) => {
    setTimeout(() => {
        element.style.opacity = 1
    }, 1000 * index)
});

document.querySelector('.toggle-promotion').addEventListener('click', (ev) => {
    if ('hide' in document.querySelector('.promotion').classList) document.querySelector('.promotion').classList.remove('hide')
    else document.querySelector('.promotion').classList.add('hide')
})

document.querySelectorAll('.swiper-prev').forEach(
    (element, index) => {
        element.addEventListener('click', (ev) => {
            element.parentElement.querySelector('.swiper-wrapper').style.transform = 'translateX(-50%)'
        })
    })

document.querySelectorAll('.search').forEach((element) => {
    const input = element.querySelector("input");
    element.addEventListener('click', (ev) => {
        input.focus()
        element.classList.add("focused")
        input.placeholder = "통합 검색"
    })

    input.addEventListener('blur', () => {
        element.classList.remove("focused")
        input.placeholder = ""
    });
})

document.querySelectorAll('.swiper-wrapper').forEach((element) => {
    let slideLength = element.querySelectorAll('swiper-slide').length
})

document.querySelector('.this-year').textContent = new Date().getFullYear()

const spyEl = document.querySelectorAll('section.scroll-spy')
spyEl.forEach((element) => {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller())
});

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})
new Swiper('.promotion .swiper-container', {
    autoplay: {
        delay: 5000
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
})
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
})


const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        promotionEl.classList.add('hide')
    } else {
        promotionEl.classList.remove('hide')
    }
})

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
    gsap.to(
        selector,
        random(1.5, 2.5),
        {
            delay: random(0, delay),
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut
        }
    )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)
