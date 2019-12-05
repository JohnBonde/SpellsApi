export default class Spell {
    constructor(data) {
        this.name = data.name
        this.duration = data.duration
        this.range = data.range
        this._id = data._id || ""
        this.description = data.desc || data.description
        this.level = data.level
        this.user = data.user || ""
    }

    get Template() {
        let template = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Level: ${this.level}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Range: ${this.range}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Duration: ${this.duration}</h6>`
        if (this.user) {
            template += `<button type="button" class="btn btn-danger"
                    onclick="app.spellsController.castSpellAsync()">Cast</button>`
        } else
            template += `<button type="button" class="btn btn-primary"
                    onclick="app.spellsController.addSpellAsync()">Learn</button>`
        template += `</div>
        </div>`
        return template
    }
}