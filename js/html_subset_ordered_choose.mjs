import { list_single_property } from "./list_single_property.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_subset_choices_max_height } from "./html_subset_choices_max_height.mjs";
import { html_style_max_height_scroll } from "./html_style_max_height_scroll.mjs";
import { html_subset_toggle } from "./html_subset_toggle.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { app_shared_verses_order_prompt_text } from "./app_shared_verses_order_prompt_text.mjs";
import { html_subset_ordered_selected } from "./html_subset_ordered_selected.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { app_shared_languages_selected_text } from "./app_shared_languages_selected_text.mjs";
import { html_div_text } from "./html_div_text.mjs";
export function html_subset_ordered_choose({
  parent,
  options,
  chosen,
  name_property,
  key_property,
  on_change,
  choices_label,
  card,
}) {
  "card draws the two cards, so a caller whose list already sits inside a card can hand over the next shade deeper, the way nested search results step through the blues";
  let container = html_div(parent);
  function render() {
    html_clear(container);
    let choices_card = card(container);
    html_div_text_bold(choices_card, choices_label);
    let choices_box = html_div(choices_card);
    let value = html_subset_choices_max_height();
    html_style_max_height_scroll(choices_box, value);
    html_subset_toggle(
      choices_box,
      options,
      chosen,
      name_property,
      key_property,
      changed,
    );
    ("the reorder card only appears once two or more are chosen; a single verse has nothing to reorder");
    let multiple = list_multiple_is(chosen);
    if (multiple) {
      let order_card = card(container);
      let order_label = app_shared_verses_order_prompt_text();
      html_div_text_bold(order_card, order_label);
      html_subset_ordered_selected(order_card, chosen, name_property, changed);
    } else if (list_size_1(chosen)) {
      ("a single one chosen is still named in the card below, so the reader sees what they have, but with no arrows and no cross: there is nothing to order, and the last one is never taken away from here");
      let selected_card = card(container);
      let selected_label = app_shared_languages_selected_text();
      html_div_text_bold(selected_card, selected_label);
      let name = list_single_property(chosen, name_property);
      html_div_text(selected_card, name);
    }
  }
  function changed() {
    on_change();
    render();
  }
  render();
  return container;
}
