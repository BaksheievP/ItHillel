class NotesController {
    #collection = null;
    #boardView = null;
    #headerView = null;

    constructor(container) {
       
        this.#headerView = new HeaderView({
            onCreate: this.createNote,
            
        });
        const headerContainer = document.querySelector(container)
        headerContainer.append(this.#headerView.el);

        this.#boardView = new BoardView({
            onDelete: this.deleteNote,
            onUpdate: this.updateNote,
        });
        const boardContainer = document.querySelector(container)
        boardContainer.append(this.#boardView.el);

        this.#collection = new NotesCollection();
        this.#collection.fetchList().then(() => {
            this.#boardView.renderList(this.#collection.list);
        });
    }

    deleteNote = (id) => {
        this.#collection.deleteNote(id).then(() => {
            this.#boardView.renderList(this.#collection.list);
        });
    };

    updateNote = (id, changes) => {
        this.#collection.updateNote(id, changes).then(() => {
            
        });
    };

    createNote = () => {
        this.#collection.createNote().then(() => {
            this.#boardView.renderList(this.#collection.list);
        });
    };
}