import { list_size } from "./list_size.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
export function bless_view_count(view) {
  "How many people the player can see - the number the prayer ladder picks a rung by,";
  "since a blessing may never cover more people than are actually in sight.";
  let list = bless_view_people(view);
  let count = list_size(list);
  return count;
}
