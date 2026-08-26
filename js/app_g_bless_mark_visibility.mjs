import { arguments_assert } from "./arguments_assert.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { each } from "./each.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
export function app_g_bless_mark_visibility(mark_get, everyone, remaining) {
  arguments_assert(arguments, 3);
  ("Takes one kind of mark off EVERYBODY on the street and then puts it back on the few it is true of, given the way to find that kind of mark on a person.");
  ("Every mark that can go OUT again is shown this way round, and none of them writes only what changed. A light says a person has been prayed for and never goes out, so it can simply be switched on and left. A ring and an arrow both say this person is one of the ones left to pray for, which stops being true the moment they are prayed for - and writing only the difference would need a memory of what was showing last time, which is the thing that drifts away from the record. Cleared and redrawn from the record, there is nothing to drift.");
  ("Hidden by being INVISIBLE and not by being undisplayed. Something undisplayed has no box on the page, so it does not slide along with a step - it would appear at the far end of one instead, which is the very fault the marks are made early to avoid. Invisible, a mark keeps its box and crosses the squares along with its person, with nobody watching.");
  ("The way to FIND the mark is handed in rather than chosen here, and that is the whole of the difference between one kind of mark and another as far as this is concerned. Written once per kind, the two copies were free to drift into showing and hiding in a different order, which on a person who is in both lists is the difference between a mark that flickers and one that does not.");
  let people_all = bless_view_people(everyone);
  function person_hide(person) {
    let mark = mark_get(person);
    html_visibility_hidden(mark);
  }
  each(people_all, person_hide);
  let people_remaining = bless_view_people(remaining);
  function person_show(person) {
    let mark = mark_get(person);
    html_visibility_visible(mark);
  }
  each(people_remaining, person_show);
}
