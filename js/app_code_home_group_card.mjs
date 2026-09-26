import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { app_shared_container_blue_collapsible } from "./app_shared_container_blue_collapsible.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_home_group_card(cards, parent, title) {
  arguments_assert(arguments, 3);
  ("one folding group of lessons on the home list, added to the cards already drawn; opening it shuts every other one, so only one group is ever open at a time - asked for by the human");
  ("It hands back the entry it added, which carries the card, the place to draw the lessons into, the way to fold it, and whether every lesson in it is finished so far - the caller clears that last one as it meets an unfinished lesson.");
  let entry = {
    card: null,
    body: null,
    collapsed_set: null,
    caret_mark: null,
    title_mark: null,
    title,
    complete: true,
  };
  function others_shut(other) {
    let same = equal(other, entry);
    if (same) {
      return;
    }
    other.collapsed_set(true);
  }
  function changed(collapsed) {
    if (collapsed) {
      return;
    }
    each(cards, others_shut);
  }
  let folded = app_shared_container_blue_collapsible(parent, title, changed);
  entry.card = property_get(folded, "card");
  entry.body = property_get(folded, "body");
  entry.collapsed_set = property_get(folded, "collapsed_set");
  entry.caret_mark = property_get(folded, "caret_mark");
  entry.title_mark = property_get(folded, "title_mark");
  list_add(cards, entry);
  return entry;
}
