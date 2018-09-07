export default class ReadJsonService {
    static readJsonToMap() {
        let map = new Map
        let json = require('../data/data.json')
        json.forEach(element => {
            map.set(element[0], element[1])
        })
        return map;
    }

    static readJsonGetKeys(){
        let keys = new Array()
        let json = require('../data/data.json')
        json.forEach(element => {
            keys.push(element[0])
        })
        return keys;
    }
}