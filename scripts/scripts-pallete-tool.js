const textsPallete = document.querySelectorAll("[text-pallete]");

function changePTFunc() {
    textsPallete[0].value = "Mudar Cores";
};

function changeENFunc() {
    textsPallete[0].value = "Change Colors";
};

function detectIdiom() {
    if (localStorage.idiom == "br") {
        changePTFunc();
    } else if (localStorage.idiom == "en") {
        changeENFunc();
    };
} detectIdiom();

//

function generateColors() {
    const chars = '0123456789ABCDEF'
    let color = '#'

    for ( let i = 0; i < 6; i++) {
            color += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return color;
}

document.getElementById('btn-action').addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
        let color = generateColors()
        let div_color = document.getElementById(`color-${i+1}`)
        div_color.style.backgroundColor = color;
        let txt_color = document.getElementById(`txt-color-${i+1}`)
        txt_color.textContent = `${color}`;
    }
})