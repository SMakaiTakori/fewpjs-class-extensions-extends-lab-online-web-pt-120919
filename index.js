// Your code here
class Polygon {

    constructor(array){
        this.array = array;
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce(
            (memo, index) => memo + index
        );
    }
}

class Triangle extends Polygon {

    get isValid() {
        let a = this.array[0]
        let b = this.array[1]
        let c = this.array[2]

        if ( (a + b > c) && (b +c > a) && (a + c > b) ) {
            return true
        }else {
            return false
        }
    }
}

class Square extends Polygon {

    get isValid() {
        let a = this.array[0]
        let b = this.array[1]
        let c = this.array[2]
        let d = this.array[3]

       if ( (a === b) && (b === c) ) {
           return true
       }else {
           return false
       }
    }

    get area(){
        return this.array[0]**2
    }


}