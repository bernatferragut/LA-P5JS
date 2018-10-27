// JS
/**
* Just a lazy way to convert all inputs into knobs.
* Normally you would write `new Knob(document.getElementById('someIdHere'), new Ui.P1());` to create a knob.
*/

// for (var i = 1; i < 16; i++) {
//     Array.prototype.slice.call(document.getElementsByClassName('preset' + i)).forEach(function(el) {
//         new Knob(el, new Ui['P' + i]());
//         el.addEventListener('change', function  () {
//             console.log(el.value)
//         })
//     })
// }


// Array.prototype.slice.call(document.getElementsByClassName('preset4')).forEach(function(el) {
//     new Knob(el, new Ui.P4());
//     el.addEventListener('change', function  () {
//         console.log(el.value)
//     })
// })


// Good programming
let k1 = document.getElementById('k1');
let knob = new Knob(k1, new Ui.P4());
k1.addEventListener('change', function(){
    console.log(k1.value);
});


