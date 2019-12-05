import SpellsService from "../Services/SpellsService.js";
import store from "../store.js";

//Private
function _drawNewSpells() {
  let template = ''
  let spells = store.State.spells;
  spells.forEach(cur => template += `<li onclick="app.spellsController.selectSpellsAsync('${cur.id}')">${cur.name}</li>`)
  document.getElementById('list').innerHTML = template
}
function _drawActiveSpell() {
  let spell = store.State.activeSpell;
  document.getElementById('card').innerHTML = spell.Template
}
function _drawOwnedSpell() {
  let template = ''
  let ownedSpells = store.State.ownedSpells
  ownedSpells.forEach(cur => template += `<li onclick="app.spellsController.selectOwnedSpellsAsync('${cur._id}')">${cur.name}</li>`)
  document.getElementById('owned').innerHTML = template
}

//Public
export default class SpellsController {
  constructor() {
    store.subscribe("spells", _drawNewSpells)
    store.subscribe("activeSpell", _drawActiveSpell)
    store.subscribe("ownedSpells", _drawOwnedSpell)
    SpellsService.getNewSpellsAsync()
    this.getMySpellAsync()
  }
  async selectSpellsAsync(id) {
    try {
      await SpellsService.selectSpellsAsync(id);
    } catch (error) {
      debugger;
      console.error(error);

    }
  }
  async addSpellAsync() {
    try {
      await SpellsService.addSpellAsync()
    } catch (error) {
      debugger;
      console.error(error);
    }
  }
  async getMySpellAsync() {
    try {
      await SpellsService.getMySpellAsync()
    } catch (error) {
      debugger;
      console.error(error);
    }
  }
}
