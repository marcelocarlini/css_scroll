const ultimaSecao = document.querySelector('.ultima-secao')

const myObserver = new IntersectionObserver((entries) => {
    console.log(entries)

})

myObserver.observe(ultimaSecao)