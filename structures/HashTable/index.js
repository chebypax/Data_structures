class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    const foundItem = this.keyMap[index].find((item) => item[0] === key);
    if (!foundItem) {
      this.keyMap[index].push([key, value]);
    } else {
      foundItem[1] = value;
    }
  }

  get(key) {
    const index = this._hash(key);
    const storedValue = this.keyMap[index];
    if (!storedValue) {
      return undefined;
    }
    const foundItem = storedValue.find((item) => item[0] === key);

    return foundItem ? foundItem[1] : undefined;
  }

  keys() {
    const result = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) {
        continue;
      }
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (!this.keyMap[i][j]) {
          continue;
        }
        result.push(this.keyMap[i][j][0]);
      }
    }

    return result;
  }

  values() {
    const result = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) {
        continue;
      }
      for (let j = 0; j < this.keyMap[i].length; j++) {
        if (!this.keyMap[i][j]) {
          continue;
        }
        result.push(this.keyMap[i][j][1]);
      }
    }

    return result;
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
// charCodeAt returns code from UNICODE, 97 is the code first letter 'a'
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }
}

export default HashTable;
