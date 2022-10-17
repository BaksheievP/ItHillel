
class Accordion {
    static SELECTOR = {
        TITLE: '.accordion-item'
    }
    static CLASSES = {
        ACTIVE: 'active'
    }
    #el = null;

    constructor(el) {
        this.#el = el;
        this.#bindEventListeners();
    }

    #bindEventListeners() {
        this.#el = document.querySelectorAll(Accordion.SELECTOR.TITLE);
        this.#el.forEach((accordion) => {
            accordion.addEventListener('click', () => {
                accordion.classList.toggle(Accordion.CLASSES.ACTIVE);
            })
        });
    }
}

const accordeon = new Accordion(document.querySelector('container'));



