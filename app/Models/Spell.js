export default class Spell {
    constructor(data) {
        this.name = data.name
        this.duration = data.duration
        this.range = data.range
        this.school = data.school
        this._id = data._id || ""
    }

    get Template() {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${this.school}</h6>
                <h6 class="card-subtitle mb-2 text-muted">${this.range}</h6>
                <h6 class="card-subtitle mb-2 text-muted">${this.duration}</h6>
                <button type="button" class="btn btn-primary"
                    onclick="app.spellsController.addSpellAsync()">Learn</button>
            </div>
        </div>`
    }
}