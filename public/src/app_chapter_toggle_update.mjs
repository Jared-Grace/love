import { html_display_none_or_block } from "../../../love/public/src/html_display_none_or_block.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
import { html_style_background_color_set_or_remove_list } from "../../../love/public/src/html_style_background_color_set_or_remove_list.mjs";
import { list_replace_all } from "../../../love/public/src/list_replace_all.mjs";
import { list_size_max_skip } from "../../../love/public/src/list_size_max_skip.mjs";
import { app_chapter_chosen_max } from "../../../love/public/src/app_chapter_chosen_max.mjs";
import { list_toggle } from "../../../love/public/src/list_toggle.mjs";
import { html_on_click } from "../../../love/public/src/html_on_click.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
export function app_chapter_toggle_update(
  updates,
  component_clicked,
  verse_numbers_chosen,
  verse_number,
  cb,
) {
  function choose() {
    toggle();
    invoke_multiple(updates);
  }
  html_on_click(component_clicked, choose);
  let toggle = function lambda5() {
    list_toggle(verse_numbers_chosen, verse_number);
    let max = app_chapter_chosen_max();
    let copy = list_size_max_skip(verse_numbers_chosen, max);
    list_replace_all(verse_numbers_chosen, copy);
  };
  let update = function lambda4() {
    html_style_background_color_set_or_remove_list(
      component_clicked,
      verse_numbers_chosen,
      verse_number,
    );
    let m = list_multiple_is(verse_numbers_chosen);
    let hidden = not(m);
    html_display_none_or_block(hidden, cb);
  };
  let v3 = {
    toggle,
    update,
  };
  return v3;
}
