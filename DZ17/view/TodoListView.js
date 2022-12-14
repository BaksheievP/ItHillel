class TodoListView {
    static CLASSES = {
        TODO_ITEM_CLASS: 'todo-item',
        DONE_ITEM_CLASS: 'done',
        DELETE_BTN_CLASS: 'delete-btn',
    };
    static todoListContainerTemplate = `
        <div class="row">
            <div class="twelve columns"></div>
        </div>`;

    static todoItemTemplate = `
        <div class="u-full-width todo-item {{doneClass}}" data-todo-id="{{id}}">
            {{title}}
            <span class="delete-btn">X</span>
        </div>`;
    
    static ToDoInput = `<form class="form "id="newTodoForm">
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
</form>`;

    el = null;
    #config = null;


    static generateTodoItemHtml(todo) {
        return interpolate(TodoListView.todoItemTemplate, todo).replaceAll(
            '{{doneClass}}',
            todo.isDone ? TodoListView.CLASSES.DONE_ITEM_CLASS : ''
        );
    }

    static getTodoId(el) {
        return el.closest('.' + TodoListView.CLASSES.TODO_ITEM_CLASS).dataset
            .todoId;
    }

    constructor(config) {
        /// {onToggle: (id) => {}}
        console.log('todo list view init');
        this.#config = config;
        this.#initView();
    }

    #initView() {
        const row = htmlToElement(TodoListView.todoListContainerTemplate)
       
        row.addEventListener('click', (e) => {
            if (
                e.target.classList.contains(
                    TodoListView.CLASSES.DELETE_BTN_CLASS
                )
            ) {
                const todoId = TodoListView.getTodoId(e.target);
                this.deleteTodo(todoId);
            }
            if (
                e.target.classList.contains(
                    TodoListView.CLASSES.TODO_ITEM_CLASS
                )
            ) {
                const todoId = TodoListView.getTodoId(e.target);
                this.toggleTodo(todoId);
            }
        });

        this.el = row;
       
       
    }

    renderList(list) {
        this.el.innerHTML = list
            .map(TodoListView.generateTodoItemHtml)
            .join('');
      
    }

    toggleTodo(id) {
        this.#config.onToggle(id);
    }

    deleteTodo(id) {
        this.#config.onDelete(id);
    }
}