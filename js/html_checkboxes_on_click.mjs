import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
import { html_checked_set } from "./html_checked_set.mjs";
import { each } from "./each.mjs";
import { app_shared_choice_card_chosen_color } from "./app_shared_choice_card_chosen_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { sleep_0 } from "./sleep_0.mjs";
import { html_checkboxes_validate } from "./html_checkboxes_validate.mjs";
import { app_shared_choice_card_ring } from "./app_shared_choice_card_ring.mjs";
export async function html_checkboxes_on_click(
  checkboxes,
  checkbox,
  container,
  valid_get,
  bn,
) {
  arguments_assert(arguments, 5);
  function lambda2(r) {
    let container2 = property_get(r, "container");
    html_box_shadow_set(container2, "none");
    html_checked_set(r, false);
  }
  each(checkboxes, lambda2);
  html_checked_set(checkbox, true);
  let selected = app_shared_choice_card_chosen_color();
  html_style_background_color_set(container, selected);
  await sleep_0();
  let valid = valid_get(checkboxes);
  html_checkboxes_validate(valid, checkboxes, bn);
  app_shared_choice_card_ring(container, valid);
}
