// CHANGE THEME
function change() {
    if (document.querySelector('input.checkbox').checked) {
        document.body.setAttribute('data-theme', 't-dark')
    } else {
        document.body.setAttribute('data-theme', 't-light')
    }
}
// FIM CHANGE THEME
