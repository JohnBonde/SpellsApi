export default class Spell {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}