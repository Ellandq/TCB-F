
function swap(arr) {
    const [first, second] = arr;
    return [second, first];
}
  
const rectangle = {
    width: 5,
    height: 10,
    get area() {
        return this.width * this.height;
    },
    set dimensions(dimensions) {
        this.width = dimensions.width;
        this.height = dimensions.height;
    }
};
  
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};
  
class DateUtils {
    static isLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return true;
        return false;
    }
}
  
function createUser({ name, age = 18 }) {
    return { name, age };
}
  
function extend(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};
  
  