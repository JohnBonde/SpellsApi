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
  if (spell._id) {
    document.getElementById('card').innerHTML = spell.Template
    return
  }
  document.getElementById('card').innerHTML = ""
}
function _drawOwnedSpells() {
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
    store.subscribe("ownedSpells", _drawOwnedSpells)
    SpellsService.getNewSpellsAsync()
    this.getMySpellAsync()
  }
  async selectSpellsAsync(id) {
    try {
      await SpellsService.selectSpellsAsync(id);
    } catch (error) {
      console.error(error);

    }
  }
  async addSpellAsync() {
    try {
      await SpellsService.addSpellAsync()
    } catch (error) {
      console.error(error);
    }
  }
  async getMySpellAsync() {
    try {
      await SpellsService.getMySpellAsync()
    } catch (error) {
      console.error(error);
    }
  }
  async selectOwnedSpellsAsync(id) {
    try {
      await SpellsService.selectOwnedSpellsAsync(id)
    } catch (error) {
      console.error(error);
    }
  }
  async castSpellAsync() {
    try {
      await SpellsService.castSpellAsync()
    } catch (error) {
      console.error(error);
    }
  }
}
