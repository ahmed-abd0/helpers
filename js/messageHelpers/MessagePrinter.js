
//By Ahmed Abdo 😎

class MessagePrinter {

    #message = [];
    #notCleanedInsertedMessages = [];
    #notCleanedText = new Map();

    constructor(message) {

        if(!message instanceof Message) {
            throw new Error("message must be instance of Message");
        }

        this.#message = message;
    }


    static make(message) {
        return new MessagePrinter(message);
    }

    get and() {
        return new MessagePrinter(this.#message);
    }

    getElements(elements) {
        
        if(elements.constructor.name === "String") {
            return document.querySelectorAll(elements);
        }


        if(elements instanceof HTMLElement) {
            return [elements];
        }
        

        if(Array.isArray(elements) || elements instanceof  NodeList) {

            if(Array.prototype.some.call(elements, element => ! element instanceof HTMLElement)) {
                throw Error("elements must be subclass from HTMLElement");
            }
            
            return elements;
        }

        throw new Error("elements should be string or Nodelist or Array");
    }
   

 
    appendMessageTo(elements) {
      
        this.getElements(elements).forEach(element => {
            this.#notCleanedText.set(element, element.innerHTML);
            element.innerHTML += this.#message.text();
        });

        return this;
    }


    insertAfter(elements) {

        this.getElements(elements).forEach(element => {
            element.insertAdjacentElement("afterend", this.messageCloneAndAddItToNotCleaned())
        });

        return this;
    }

    insertBefore(elements) {

        this.getElements(elements).forEach(element => {
            element.insertAdjacentElement("beforebegin", this.messageCloneAndAddItToNotCleaned())
        });

        return this;
    }

    insertInto(elements) {

        this.getElements(elements).forEach(element => {
            element.insertAdjacentElement("afterbegin", this.messageCloneAndAddItToNotCleaned())
        });

        return this;
    }

    
    insertIntoAtTheEnd(elements) {

        this.getElements(elements).forEach(element => {
            element.insertAdjacentElement("beforeend", this.messageCloneAndAddItToNotCleaned())
        });

        return this;
    }

    useMessage(callable) {
        callable(this.messageCloneAndAddItToNotCleaned());
        return this;
    }
    
    for(time) {
        
        setTimeout(() => {
            
            this.#notCleanedInsertedMessages.forEach(message => message.remove());
            this.#notCleanedText.forEach((oldStat, element) => element.innerHTML = oldStat);
        }, time);
        
        return this;
    }


    messageCloneAndAddItToNotCleaned() {

        const cloned = this.#message.cloneElement();
        this.#notCleanedInsertedMessages.push(cloned);
        return cloned;
    }

}
