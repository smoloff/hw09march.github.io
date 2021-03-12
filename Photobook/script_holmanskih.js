class PhotoBook {
    constructor(number=16){
        this._numPages = number;
    }

    get numPages () {
        return this._numPages;
    }
}

class BigPhotoBook extends PhotoBook {
    constructor(number=64) {
        super(number);
    }
}

class PhotoBookTest {
    constructor() {
        // Create a default photo book and show the number of pages.
        let defPB = new PhotoBook();
        console.log(defPB.numPages);

        // Create a photo book with 24 pages and show the number of pages.
        let biggerPB = new PhotoBook(24);
        console.log(biggerPB.numPages);

        // Create a large photo book and show the number of pages
        let largePB = new BigPhotoBook();
        console.log(largePB.numPages);
    }
}

new PhotoBookTest();