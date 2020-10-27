const LimitedArray = require('./helpers/limitedArray');
const hashFunction = require('./helpers/hashFunction');
const { times, isUndefined } = require('underscore');
// 위 문법은 helpers 폴더에 있는 limitedArray와 hashFunction을 불러오는 문법입니다.
// 위와 같이 require를 사용해서 다른 파일로부터 함수 등을 불러오는 작업은 이후에 따로 설명합니다.

class HashTable {
  constructor() {
    this._size = 0;
    this._limit = 8;
    this._storage = LimitedArray(this._limit);
  }

  insert(key, value) {
    const index = hashFunction(key, this._limit);
    let buket = this._storage.get(index) 
    if(buket === undefined){
      buket = {}
    }
    buket[key]=value
    this._storage.set(index, buket)
    this._size++

    if(this._size > this._limit*0.75){
      this._resize(this._limit*2)
    }
  }

  retrieve(key) {
    const index = hashFunction(key, this._limit);
    let buket = this._storage.get(index)
    if(buket===undefined){
      return undefined
    }
    return buket[key]
  }

  remove(key) {
    const index = hashFunction(key, this._limit);
    let buket = this._storage.get(index)
    let result = buket[key]
    delete buket[key]
    this._size--

    if(this._size < this._limit*0.25){
      this._resize(this._limit/2)
    }
    return result;


  }

  _resize(newLimit) {
    let old = this._storage
    this._size = 0
    this._limit = newLimit
    this._storage = LimitedArray(newLimit)
    
    old.each((buket)=>{
      for(let key in buket){
        this.insert(key , buket[key])
      }
    })
    return this._storage
  }
}

module.exports = HashTable;
