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

    buyBook(copies)
    {
        if(this.#copiesAvailable>0)
        {
            this.#copiesAvailable--;
            console.log(`${this.title} Book purchased`);
        }
        else
        {
            console.log("Sorry! copies are not available");
        }
    }
    rentBook()
    {
        if(this.#copiesAvailable>0)
            {
                this.#copiesAvailable--;
                console.log(`${this.title} Book rented `);
            }
            else
            {
                console.log("Sorry! copies are not available");
            }
    }

    returnBook()
    {
        this.#copiesAvailable++;
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

book.buyBook();
book.checkAvailability();

book.rentBook();
book.checkAvailability();

book.returnBook();
book.checkAvailability();