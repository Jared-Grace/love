import { gloss_chapters_punctuation_entries_repair } from "./gloss_chapters_punctuation_entries_repair.mjs";
import { gloss_stores } from "./gloss_stores.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_stores_punctuation_entries_repair() {
  "Drop every explanation in every gloss store that explains a mark rather than a word, and answer with what each store had.";
  "The stores are asked for by the roster, so this is the one thing to run whichever store the light went red over, and a store added to the roster is repaired by the same command from the moment it joins.";
  "A store that is already clean is passed over by the sweep inside it rather than skipped here, so running this when only one store is at fault costs a read of the others and changes nothing in them.";
  "This repairs what is held here. Putting the repaired chapters where readers get them is a separate step, on purpose: it changes what somebody already reading a chapter sees next time they open it.";
  let stores = gloss_stores();
  async function store_repair(fn) {
    let store = property_get(fn, "name");
    let repaired = await gloss_chapters_punctuation_entries_repair(fn);
    let done = {
      store,
      repaired,
    };
    return done;
  }
  let r = await list_map_async(stores, store_repair);
  return r;
}
