class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    })
    this.length = this.items.length
  }

  get(pos) {
    if(this.length >= 0 && this.length > pos) {
      return this.items[pos]
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if(this.length > 0) {
      return this.items[this.length - 1]
    } else {
      throw new Error("EmptySortedList");
    }
  }
  
  min() {
    if(this.length > 0) {
      return this.items[0]
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if(this.length > 0) {
      return this.items.reduce((accumulator, currentValue) => accumulator + currentValue)
    } else {
      return 0
    }
  }

  avg() {
    if(this.length > 0) {
      return this.sum() / this.length
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
