// JavaScript source code
var btnopen = document.querySelector('.btn-open')
var model = document.querySelector('.model')
var btnclose = document.querySelector('.model-footer button')


function toggleModel(e) {
    console.log(e.target);
    model.classList.toggle('hide')
}

btnopen.addEventListener('click', toggleModel)
btnclose.addEventListener('click', toggleModel)
model.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        toggleModel()
    }
})


var btnopen2 = document.querySelector('.btn-open2')
var model2 = document.querySelector('.model2')
var btnclose2 = document.querySelector('.model-footer2 button')
function cuacoha(e) {
    console.log(e.target);
    model2.classList.toggle('hide2')
}
btnopen2.addEventListener('click', cuacoha)
btnclose2.addEventListener('click', cuacoha)
model2.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        cuacoha()
    }
})

var btnopen3 = document.querySelector('.btn-open3')
var model3 = document.querySelector('.model3')
var btnclose3 = document.querySelector('.model-footer3 button')
function cuacothoa(e) {
    console.log(e.target);
    model3.classList.toggle('hide3')
}
btnopen3.addEventListener('click', cuacothoa)
btnclose3.addEventListener('click', cuacothoa)
model3.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        cuacothoa()
    }
})

var btnopen4 = document.querySelector('.btn-open4')
var model4 = document.querySelector('.model4')
var btnclose4 = document.querySelector('.model-footer4 button')
function chucmungsinhnhat(e) {
    console.log(e.target);
    model4.classList.toggle('hide4')
}
btnopen4.addEventListener('click', chucmungsinhnhat)
btnclose4.addEventListener('click', chucmungsinhnhat)
model4.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        chucmungsinhnhat()
    }
})
var btnopen5 = document.querySelector('.btn-open5')
var model5 = document.querySelector('.model5')
var btnclose5 = document.querySelector('.model-footer5 button')
function chucmung(e) {
    console.log(e.target);
    model5.classList.toggle('hide5')
}
btnopen5.addEventListener('click', chucmung)
btnclose5.addEventListener('click', chucmung)
model5.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        chucmung()
    }
})






