import { list_first_try } from "./list_first_try.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null_equal } from "./property_get_or_null_equal.mjs";
import { each } from "./each.mjs";
import { property_set } from "./property_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
export function app_g_arcs_person_choose(
  people_chooser,
  people,
  chosen,
  status_working,
  render,
) {
  "The row of person presses for one chapter, and the one person the sheet is to show. It answers with nothing where the chapter holds nobody.";
  "A NAME THAT NAMES NOBODY FALLS BACK TO THE FIRST PERSON rather than emptying the sheet, which is what makes the chapter presses safe to press in any order. Nothing on the page can put a stale name there; the store being rewritten underneath a page left open all night can.";
  "THE PRESS CARRIES THE NOTE COUNT. Reviewing a chapter takes more than one sitting, so where the reviewer stopped is worth reading off the page - and with one person on the sheet at a time, this row is the only place the other people are named at all.";
  let person = list_first_try(people);
  let nobody = null_is(person);
  if (nobody) {
    return null;
  }
  let nickname = property_get(chosen, "nickname");
  function person_named(one) {
    let named = property_get_or_null_equal(one, "nickname", nickname);
    if (named) {
      person = one;
    }
  }
  each(people, person_named);
  let chosen_nickname = property_get(person, "nickname");
  property_set(chosen, "nickname", chosen_nickname);
  function person_button(one) {
    let one_nickname = property_get(one, "nickname");
    let value = property_get(one, "notes_count");
    let counted = String(value);
    let label = text_combine_multiple([one_nickname, "  ·  ", counted]);
    async function on_person() {
      property_set(chosen, "nickname", one_nickname);
      status_working(one_nickname);
      await render();
    }
    let component = app_shared_button(people_chooser, label, on_person);
    let here = equal(one_nickname, chosen_nickname);
    app_shared_button_toggle_style(here, component);
  }
  each(people, person_button);
  return person;
}
