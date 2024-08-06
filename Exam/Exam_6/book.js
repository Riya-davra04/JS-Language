class Book {
    title;
    #author;
    #price;
    #rentalPrice;
    #copiesAvailable;

    constructor(title, author, price, rentalPrice, copiesAvailable) {
        this.title = title;
        this.#author = author;
        this.#price = price;
        this.#rentalPrice = rentalPrice;
        this.#copiesAvailable = copiesAvailable;
    }

    getauthor() {
        return this.#author;
    }

    setauthor(author) {
        this.#author = author;
    }

    getprice() {
        return this.#price;
    }

    setprice(price) {
        this.#price = price;
    }

    getrentalPrice() {
        return this.#rentalPrice;
    }

    setrentalPrice(rentalPrice) {
        this.#rentalPrice = rentalPrice;
    }

    getcopiesAvailable() {
        return this.#copiesAvailable;
    }

    setcopiesAvailable(copiesAvailable) {
        this.#copiesAvailable = copiesAvailable;
    }

    buyBook(copies) {
        if (copies > 0 && this.#copiesAvailable >= copies) {
            this.#copiesAvailable -= copies;
            let totalPrice = copies * this.#price;
            console.log(`${this.title} Book purchased. Total price is ${totalPrice}`);
        } else {
            console.log("Sorry! Not enough copies are available");
        }
    }

    rentBook(copies) {
        if (copies > 0 && this.#copiesAvailable >= copies) {
            this.#copiesAvailable -= copies;
            let totalRentalPrice = copies * this.#rentalPrice;
            console.log(`${this.title} Book rented. Total rental price is ${totalRentalPrice}`);
        } else {
            console.log("Sorry! Not enough copies are available");
        }
    }

    returnBook(copies) {
        if (copies > 0) {
            this.#copiesAvailable += copies;
            console.log(`${this.title} Book is returned`);
        } else {
            console.log("Invalid number of copies to return");
        }
    }

    checkAvailability() {
        console.log(`Total ${this.#copiesAvailable} copies are available`);
    }
}

let book = new Book("The Story of My Experiments With Truth", "Mahatma Gandhi", 350, 100, 14);
console.log(book);
console.log("Author name  : ", book.getauthor());
console.log("Price :", book.getprice());
console.log("RentalPrice : ", book.getrentalPrice());
console.log("CopiesAvailable : ", book.getcopiesAvailable());

book.buyBook(4);
book.checkAvailability();

book.rentBook(3);
book.checkAvailability();

book.returnBook(1);
book.checkAvailability();
