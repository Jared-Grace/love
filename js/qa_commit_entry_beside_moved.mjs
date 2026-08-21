import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
export function qa_commit_entry_beside_moved(remembered, heads) {
  "$plain remembered";
  "$plain heads";
  arguments_assert(arguments, 2);
  ("Which neighbouring repos are standing somewhere other than where they stood when an answer already written down was worked out - which is the whole of why that answer cannot be handed back.");
  ("Told only that the answer was unusable, a caller spends a quarter of an hour judging with no reason given, and the reason is a fact somebody can act on. Measured the day this was written: of the three neighbours, one had moved eight times in a day and the other two had not moved in a week, so a verdict about THIS repo is thrown away by one neighbour that no gate of the app being shipped could reach.");
  ("Naming what is different rather than answering whether anything is: whether to hand the answer back is asked next door and is deliberately all-or-nothing, and this must not become a second, quieter answer to that question.");
  ("An entry carrying no word about its neighbours names nobody, because there is nothing recorded for a neighbour to have moved away from. Inventing a name here would read as a neighbour having moved when the truth is that nobody wrote down where it stood.");
  let written = property_get_or_null(remembered, "beside");
  let unwritten = null_is(written);
  if (unwritten) {
    let r = [];
    return r;
  }
  ("Both sides are walked, not just the recorded one, so a neighbour that has appeared since - or one that could not say where it stands this time - is named rather than passed over as agreeing.");
  let names = properties_get(written);
  let standing = properties_get(heads);
  list_add_multiple(names, standing);
  let each = list_unique(names);
  let moved = [];
  for (let name of each) {
    let was = property_get_or_null(written, name);
    let now = property_get_or_null(heads, name);
    let same = equal(was, now);
    if (same) {
      continue;
    }
    list_add(moved, {
      name,
      was,
      now,
    });
  }
  return moved;
}
