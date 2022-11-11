class FormView{
    #config = null; 

    static template = `<div class="row">
    <form id="newTodoForm">
        <div class="ten columns">
            <input
                type="text"
                class="u-full-width"
                name="title"
                id="newTodoTitle"
            />
        </div>
        <div class="two columns">
            <button id="saveTodoBtn">Save</button>
        </div>
    </form>
</div> `
    constructor(config){
        this.#config = config

        this.#initView();
    }

    #initView(){
        this.el = htmlToElement(FormView.template);

    this.el.addEventListener('submit', (e) =>{
        e.preventDefault();
        const obj = {
            title: e.target.elements.title.value
        }
        this.#config.onSave(obj)
        e.target.reset();
    })

    }
}