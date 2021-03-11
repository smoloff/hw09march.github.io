
class PhotoBook {
    constructor(number){
        this._numPages;
        number == undefined ? this._numPages = 16 : this._numPages = number;
    }
    get numPages () {
        return this._numPages;
    }
}

class BigPhotoBook {
    constructor(number) {
        this._numPages;
        number == undefined ? this._numPages = 64 : this._numPages = number;
    }
    get numPages () {
        return this._numPages;
    }
}

class PhotoBookTest {
    constructor(pageNumber) {
        
        this.photoBook;       

        if (pageNumber == undefined) {
            this.createPhotoBook();
        } else if (pageNumber >= new BigPhotoBook().numPages) {
            this.createBigPhotoBook(pageNumber);
            
        } else {
            this.createPhotoBook(pageNumber);
        }
    }

    createPhotoBook(num) {
        this.photoBook = new PhotoBook(num);
        return this.photoBook;
    }

    createBigPhotoBook(num) {
       this.photoBook = new BigPhotoBook(num);
       return this.photoBook;
    }
}
 
console.log(new PhotoBookTest(68));



