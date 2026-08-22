import { property_in_list_not } from "./property_in_list_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
export function bible_event_kinds_unchosen(ranked, chosen_names) {
  "$plain ranked";
  "$plain chosen_names";
  "The ranked kinds that were never chosen as mechanics, each with how many readings carry it.";
  arguments_assert(arguments, 2);
  ("★ THIS LIST IS A FINDING AND NEVER A VERDICT. A kind lands here because everything carrying it was already reached through some other kind - so it is a thing happening INSIDE a mechanic rather than a mechanic. That is a fact about the books READ SO FAR: a kind unchosen at two books became a mechanic at three. Read it as NOT YET, never as NEVER.");
  ("The tallied word is called value and comes back out called kind, because a tally is general and does not know what it counted. Renaming it here is the one place that knows.");
  function unchosen_is(row) {
    let chosen_not = property_in_list_not(row, "value", chosen_names);
    return chosen_not;
  }
  function row_named(row) {
    let kind = property_get(row, "value");
    let count = property_get(row, "count");
    let named = {
      kind,
      count,
    };
    return named;
  }
  let rows = list_filter(ranked, unchosen_is);
  let unchosen = list_map(rows, row_named);
  return unchosen;
}
