import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function list_group_by_property(list, property_name) {
  "Gathers the items that agree on one field, one gathering for each value the field takes, in the order those values were first met.";
  "Handed back as a list of gatherings rather than as an object keyed by the value, because a value may be anything a field holds and only some things can be a key on an object - and because the order of a list is a thing said out loud, where the order of an object's keys is a thing depended on quietly.";
  "First met rather than sorted, because sorting is a separate wish and whoever wants it can say so afterwards. Undoing an order nobody asked for is not possible; adding one is.";
  let gatherings = new Map();
  for (let item of list) {
    let key = property_get(item, property_name);
    let known = gatherings.has(key);
    if (not(known)) {
      let started = [];
      gatherings.set(key, started);
    }
    let items = gatherings.get(key);
    list_add(items, item);
  }
  let grouped = [];
  for (let key of gatherings.keys()) {
    let items = gatherings.get(key);
    let group = {
      key,
      items,
    };
    list_add(grouped, group);
  }
  return grouped;
}
