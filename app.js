const tabMenu = () => {
    const equipImg = document.querySelectorAll('.equip-list li')
    const equipDescription = document.querySelectorAll('.equip-description section')
    equipDescription[0].classList.add('ativo')

    function showSection(index) {
        equipDescription.forEach((item) => {
            item.classList.remove('ativo')
        })
        equipDescription[index].classList.add('ativo')
    }

    equipImg.forEach((item, index) => {
        item.addEventListener('click', () => {
            showSection(index)
        })
    })
}


const navBar = () => {
    const nav = document.querySelector('.menu')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            nav.classList.add('navFixed')
        } else {
            nav.classList.remove('navFixed')
        }
    })
}

const burgerMenu = () => {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu-list')
    const menuLinks = document.querySelectorAll('.menu-list li')

    burger.addEventListener('click', () => {
        menu.classList.toggle('ativo')

        menuLinks.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = ''
            } else {
                item.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .3}s`
            }
        })

        burger.classList.toggle('animation')
    })
}

const allFunction = () => {
    tabMenu()
    navBar()
    burgerMenu()
}


allFunction()
