import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { app_verses_counts_refresh } from "./app_verses_counts_refresh.mjs";
import { property_get } from "./property_get.mjs";
import { app_verses_draw_fresh } from "./app_verses_draw_fresh.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
import { list_add } from "./list_add.mjs";
export function app_verses_group_count_each(
  c,
  {
    card,
    count_updates,
    count_update_invoke,
    order,
    references_show,
    verse_count_held,
  },
) {
  "One of the buttons a person picks how many verses with, drawn, and put on the list of buttons that redress themselves whenever the chosen number changes.";
  "THE CHOSEN NUMBER IS KEPT IN A RECORD HANDED IN RATHER THAN IN A NAME HERE, because every one of these buttons has to see the same number and all of them are made before any of them is pressed.";
  "PRESSING ONE REDRESSES ALL OF THEM BEFORE ASKING FOR VERSES, so the button a person just pressed looks chosen straight away rather than after the verses arrive.";
  arguments_assert(arguments, 2);
  let component = null;
  async function on_click() {
    property_set(verse_count_held, "verse_count", c);
    app_verses_counts_refresh(count_updates, count_update_invoke);
    let count = property_get(verse_count_held, "verse_count");
    await app_verses_draw_fresh(false, order, count, references_show);
  }
  component = app_shared_button(card, c, on_click);
  function update() {
    let chosen = property_equals(verse_count_held, "verse_count", c);
    app_shared_button_toggle_style(chosen, component);
  }
  list_add(count_updates, update);
  update();
}
