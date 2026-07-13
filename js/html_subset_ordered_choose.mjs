import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_subset_ordered_selected } from "./html_subset_ordered_selected.mjs";
import { html_subset_toggle } from "./html_subset_toggle.mjs";
export function html_subset_ordered_choose(
  parent,
  options,
  chosen,
  name_property,
  key_property,
  on_change,
) {
  let container = html_div(parent);
  function render() {
    html_clear(container);
    html_subset_ordered_selected(container, chosen, name_property, changed);
    html_subset_toggle(
      container,
      options,
      chosen,
      name_property,
      key_property,
      changed,
    );
  }
  function changed() {
    on_change();
    render();
  }
  render();
  return container;
}
