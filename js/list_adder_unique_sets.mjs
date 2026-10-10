import { equal } from "./equal.mjs";
export function list_adder_unique_sets() {
  "An adder that puts an item into a list only when the list does not hold it yet, answering the same as scanning the list would but remembering what each list holds, so a list asked about again costs nothing to look through.";
  "What a list holds is read off it the first time this adder meets it, and kept up to date only through this adder - so it is right only while nothing else changes the list. Make one for a single run of work that does not let go between adds, and drop it after.";
  let members = new WeakMap();
  function adder(list, item) {
    let held = members.get(list);
    if (equal(held, undefined)) {
      held = new Set(list);
      members.set(list, held);
    }
    if (held.has(item)) {
      return;
    }
    held.adder(item);
    list.push(item);
  }
  return adder;
}
