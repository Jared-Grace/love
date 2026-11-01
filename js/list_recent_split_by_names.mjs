import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
export function list_recent_split_by_names(items, names, recent) {
  "Items split in two by the name each carries: those whose name is in the recent names, the one named first there first, and the rest in their own order.";
  "$plain items";
  "$plain names";
  "$plain recent";
  "the items are any list; the names are one name per item, at the same place; the recent names are names, the one chosen last first. All are data and none runs.";
  "Items sharing one name keep their own order, because the sort is by the name alone and a stable sort keeps the rest.";
  let chosen = [];
  let others = [];
  for (let i = 0; less_than(i, items.length); i++) {
    let place = recent.indexOf(names[i]);
    if (equal(place, -1)) {
      others.push(items[i]);
    } else {
      chosen.push({
        place,
        item: items[i],
      });
    }
  }
  function lambda(a, b) {
    let difference = subtract(a.place, b.place);
    return difference;
  }
  chosen.sort(lambda);
  function lambda2(c) {
    let r2 = c.item;
    return r2;
  }
  let r = {
    recent: chosen.map(lambda2),
    others,
  };
  return r;
}
