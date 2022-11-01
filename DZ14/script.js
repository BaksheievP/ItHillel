
class Accordion {
    static SELECTOR = {
        TITLE: '.accordion-item',
        CONTAINER: '.container'
    }
    static CLASSES = {
        ACTIVE: 'active'
    }
    #el = null;
    #titlesEl = null

    constructor(el) {
        this.#el = el;
        this.#buildLayout();
        this.#bindEventListeners();
    }

    #buildLayout(){
        this.#el = document.querySelector(Accordion.SELECTOR.CONTAINER)
       
    }

    #bindEventListeners() {
        this.#titlesEl = document.querySelectorAll(Accordion.SELECTOR.TITLE);
       
        this.#titlesEl.forEach((accordion) => {
             accordion.addEventListener('click', () => {
               accordion.classList.toggle(Accordion.CLASSES.ACTIVE);
            })
        });
    }
}

const accordeon = new Accordion(document.querySelector('container'));



