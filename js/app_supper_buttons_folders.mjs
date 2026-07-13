import { html_button_toggle } from "./html_button_toggle.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export function app_supper_buttons_folders(
  root,
  folders_chosen,
  choices,
  on_toggle,
) {
  function lambda(choice) {
    let name = property_get(choice, "name");
    let bible_folder = property_get(choice, "bible_folder");
    let on = list_includes(folders_chosen, bible_folder);
    async function lambda2() {
      await on_toggle(bible_folder);
    }
    let button = html_button_toggle(root, name, on, lambda2);
    return button;
  }
  let buttons = list_map(choices, lambda);
  return buttons;
}
