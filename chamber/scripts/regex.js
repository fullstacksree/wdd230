// Script for Validating the RegEx
let input = document.querySelector('#businessPosition');
input.oninvalid = function(event) {
    event.target.setCustomValidity('Business Position should only contain alpha characters, hyphen, space and up to 7 characters only.');
}