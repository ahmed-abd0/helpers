

class MessagePrinter {

    #message;
    #notCleanedInsertedMessages = [];

    constructor(message) {
        this.#message = message;
    }


    static make(message) {
        return new MessagePrinter(message);
    }


    get and() {
        return new MessagePrinter(this.#message);
    }

    getElement(element) {
       
        if (element instanceof HTMLElement) {
            return element;
        }

        if(elements.constructor.name === "String") {
            return document.querySelector(elements);
        }

        throw new Error("element should be string or HTMLElement");
       
    }

    
    getElements(elements) {
        
        if(elements.constructor.name === "String") {
            return document.querySelectorAll(elements);
        }

        if(Array.isArray(elements) || elements instanceof  NodeList) {
            return elements;
        }

        throw new Error("elements should be string or Nodelist or Array");
    }

    appendMessageTo(element) {

        this.getElement(element).appendChild(this.message.textNode());
    }

    insertAfter(element) {

        this.getElement(element).insertAdjacentElement("afterend", this.messageCloneAndAddItToNotCleaned());
        return this;
    }

    insertBefore(element) {

        this.getElement(element).insertAdjacentElement("beforebegin", this.messageCloneAndAddItToNotCleaned())
        return this;
    }

    insertInto(element) {

        this.getElement(element).insertAdjacentElement("afterbegin", this.messageCloneAndAddItToNotCleaned());
        return this;
    }

    insertIntoAtTheEnd(element) {

        this.getElement(element).insertAdjacentElement("beforeend", this.messageCloneAndAddItToNotCleaned());
        return this;
    }


    insertAfterAll(elements) {

        this.getElements(elements).forEach(element => {
            element.insertAdjacentElement("afterend", this.messageCloneAndAddItToNotCleaned())
        });

        return this;
    }

    insertBeforeAll(elements) {

        this.getElements(elements).forEach(element => {
            element.insertAdjacentElement("beforebegin", this.messageCloneAndAddItToNotCleaned())
        });

        return this;
    }

    insertIntoAll(elements) {

        this.getElements(elements).forEach(element => {
            element.insertAdjacentElement("afterbegin", this.messageCloneAndAddItToNotCleaned())
        });

        return this;
    }

    
    insertIntoAllAtTheEnd(elements) {

        this.getElements(elements).forEach(element => {
            element.insertAdjacentElement("beforeend", this.messageCloneAndAddItToNotCleaned())
        });
        return this;
    }


    for(time) {
        
        setTimeout(() => {
            this.#notCleanedInsertedMessages.forEach(message => {
                message.remove();
            });
        }, time);
        
        return this;
    }


    messageCloneAndAddItToNotCleaned() {

        const cloned = this.#message.cloneElement();
        this.#notCleanedInsertedMessages.push(cloned);

        return cloned;
    }

}