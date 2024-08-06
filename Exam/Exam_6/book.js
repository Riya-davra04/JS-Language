class Book
{
    title;
    #author;
    #price;
    #rentalPrice;
    #copiesAvailable;
    constructor(title,author,price,rentalPrice,copiesAvailable)
    {
        this.title=title;
        this.#author=author;
        this.#price=price;
        this.#rentalPrice=rentalPrice;
        this.#copiesAvailable=copiesAvailable;
    }

    getauthor()
    {
        return this.#author;
    }

    setauthor(author)
    {
        this.#author=author;
    }

    getprice()
    {
        return this.#price;
    }

    setprice(price)
    {
        this.#price=price;
    }

    getrentalPrice()
    {
        return this.#rentalPrice;
    }

    setrentalPrice(rentalPrice)
    {
        this.#rentalPrice=rentalPrice;
    }

    getcopiesAvailable()
    {
        return this.#copiesAvailable;
    }

    setcopiesAvailable(copiesAvailable)
    {
        this.#copiesAvailable=copiesAvailable;
    }

    buyBook(copies,bookprice)
    {
        if(this.#copiesAvailable>0)
        {
            this.#copiesAvailable-=copies;
            this.#price+=bookprice;
            console.log(`${this.title} Book purchased and book price is ${this.#price}`);
        }
        else
        {
            console.log("Sorry! copies are not available");
        }
    }
    rentBook(copies,retprice)
    {
        if(this.#copiesAvailable>0)
        {
            this.#copiesAvailable-=copies;
            this.#rentalPrice+=retprice;
            console.log(`${this.title} Book rented and book rentprice is ${this.#rentalPrice}`);
            }
            else
            {
                console.log("Sorry! copies are not available");
            }
    }

    returnBook(copies)
    {
        this.#copiesAvailable+=copies;
        console.log(`${this.title} Book is return`);
    }

    checkAvailability()
    {
        console.log(`Total ${this.#copiesAvailable} Copies are available `);
    }
}

let book = new Book("The Story of My Experiments With Truth"," Mahatma Gandhi",350,100,14);
console.log(book);
console.log("Author name  : ",book.getauthor());
console.log("Price :",book.getprice());
console.log("RentalPrice : ",book.getrentalPrice());
console.log("CopiesAvailable : ",book.getcopiesAvailable());

book.buyBook(2,350);
book.checkAvailability();

book.rentBook(2,100);
book.checkAvailability();

book.returnBook(3);
book.checkAvailability();``