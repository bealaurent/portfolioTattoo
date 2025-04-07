function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link = document.getElementById("link");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link.addEventListener('click', () => {
    scrollToElement('.header');
});

link1.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link2.addEventListener('click', () => {
    scrollToElement('.column');
});
