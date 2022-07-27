//storage封装
class Storage {
    constructor(type) {
        if (type === 'local') {
            this.store = window.localStorage
        } else if (type === 'session') {
            this.store = window.sessionStorage
        }
    }

    set(key, value) {
        this.store.setItem(encodeURIComponent(JSON.stringify(key)), encodeURIComponent(JSON.stringify(value)))
    }

    get(key) {
        let value = this.store.getItem(encodeURIComponent(JSON.stringify(key)));
        return JSON.parse(decodeURIComponent(value));
    }

    remove(key) {
        this.store.removeItem(encodeURIComponent(JSON.stringify(key)))
    }
}

export const localStorage = new Storage('local')
export const sessionStorage = new Storage('session')

