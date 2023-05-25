

class Message {

    #message;
    #elementType;
    #elementNode;
    #color;

    constructor(message, color = '#ec2d38', elementType = 'p') {

        if (
            message.constructor.name !== "String" ||
            color.constructor.name !== "String" ||
            elementType.constructor.name !== "String"
        ) {
            throw new Error("message and color and elementType must be type of String");
        }

        this.#message = message;
        this.#color = color;
        this.#elementType = elementType;
    }

    static make(message, color, elementType = 'p') {
        return new Message(message, color, elementType);
    }

    static makeError(message, elementType = 'p') {
        return new Message(message, "#ec2d38", elementType);
    }

    static makeSuccess(message, elementType = 'p') {
        return new Message(message, "#15c763", elementType);
    }

    element() {
        if (!this.#elementNode) {
            this.#elementNode = document.createElement(this.#elementType);
            this.#elementNode.innerHTML = this.#message;
            this.#elementNode.style.color = this.#color;
        }

        return this.#elementNode;
    }

    textNode() {
        return document.createTextNode(this.#message);
    }

    cloneElement() {
        return this.element().cloneNode(true)
    }

}