import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_subset_ordered_selected } from "./html_subset_ordered_selected.mjs";
import { html_subset_toggle } from "./html_subset_toggle.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
export function html_subset_ordered_choose(
  parent,
  options,
  chosen,
  name_property,
  key_property,
  on_change,
  choices_label,
) {
  let container = html_div(parent);
  function render() {
    html_clear(container);
    let choices_card = app_shared_container_blue(container);
    html_div_text_bold(choices_card, choices_label);
    html_subset_toggle(
      choices_card,
      options,
      chosen,
      name_property,
      key_property,
      changed,
    );
    ("the reorder card only appears once two or more are chosen; a single verse has nothing to reorder");
    let multiple = list_multiple_is(chosen);
    if (multiple) {
      let order_card = app_shared_container_blue(container);
      html_div_text_bold(order_card, "What order do you want the verses in?");
      html_subset_ordered_selected(order_card, chosen, name_property, changed);
    }
  }
  function changed() {
    on_change();
    render();
  }
  render();
  return container;
}
