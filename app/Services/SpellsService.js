import store from "../store.js";
import Spell from "../Models/Spell.js";

// @ts-ignore
let _spellsApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/spells"
})
// @ts-ignore
let _sandBox = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/JohnBonde/spells"
})
class SpellsService {
  async addSpellAsync() {
    let activeSpell = store.State.activeSpell
    console.log(store.State.activeSpell);
    let res = await _sandBox.post("", activeSpell)
    console.log("from add spell", res);

    this.getMySpellAsync()

  }
  async getMySpellAsync() {
    let res = await _sandBox.get('');
    store.commit("ownedSpells", res.data.data.map(spellData => new Spell(spellData)))
    console.log("owned spells", store.State.ownedSpells);

  }
  async selectSpellsAsync(id) {
    let res = await _spellsApi.get(id)
    console.log("from spells selector", res);
    let theActiveSpell = new Spell(res.data)
    store.commit("activeSpell", theActiveSpell)
  }
  async getNewSpellsAsync() {
    let res = await _spellsApi.get('')
    console.log("from new spells", res);
    store.commit("spells", res.data)
  }
  constructor() {

  }
}

const service = new SpellsService();
export default service;
