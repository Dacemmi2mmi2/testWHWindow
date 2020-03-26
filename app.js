// var w = window.innerWidth
// || document.documentElement.clientWidth
// || document.body.clientWidth;

// var h = window.innerHeight
// || document.documentElement.clientHeight
// || document.body.clientHeight;

// var x = document.querySelector('.demo');
// x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";

window.addEventListener('resize', () => {
    let out = document.querySelector('.demo');
    out.innerHTML = 'height ' + window.innerHeight + '<br>' + 'width' + window.innerWidth;
});