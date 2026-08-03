import { app_shared_button_arrow_left } from "./app_shared_button_arrow_left.mjs";
import { app_shared_button_arrow_right } from "./app_shared_button_arrow_right.mjs";
import { subtract } from "./subtract.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_scroll_top_set } from "./html_scroll_top_set.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_get_wrap_index } from "./list_get_wrap_index.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_supper_passages_get } from "./app_supper_passages_get.mjs";
import { app_supper_passage_render } from "./app_supper_passage_render.mjs";
import { app_supper_prayers_render } from "./app_supper_prayers_render.mjs";
import { app_supper_passage_index_get } from "./app_supper_passage_index_get.mjs";
import { app_supper_passage_index_set } from "./app_supper_passage_index_set.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { app_supper_verses_get } from "./app_supper_verses_get.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { ebible_choices } from "./ebible_choices.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_map } from "./list_map.mjs";
export async function app_supper_verses_render(root, folders, previous, next) {
  let waited = await list_map_unordered_async(folders, app_supper_verses_get);
  let choices = await ebible_choices();
  function folder_name(folder) {
    let property_name = bible_folder_key();
    let choice = list_find_property_or_null(choices, property_name, folder);
    if (null_is(choice)) {
      return folder;
    }
    let value = property_get(choice, "name");
    return value;
  }
  let names = list_map(folders, folder_name);
  let r = list_first_remaining(waited);
  let remaining = property_get(r, "remaining");
  let verses_first = property_get(r, "first");
  let passages = app_supper_passages_get(verses_first);
  let size = list_size(passages);
  let passage_area = html_div(root);
  app_supper_prayers_render(root);
  let index2 = app_supper_passage_index_get();
  let index = list_get_wrap_index(passages, index2);
  function show() {
    html_clear(passage_area);
    let passage = list_get(passages, index);
    let card = app_shared_container_blue(passage_area);
    app_supper_passage_render(card, passage, remaining, names);
  }
  function go(new_index) {
    index = new_index;
    app_supper_passage_index_set(index);
    show();
    html_scroll_top_set(root, 0);
  }
  function go_left() {
    let index3 = subtract(index + size, 1);
    let r2 = list_get_wrap_index(passages, index3);
    go(r2);
  }
  function go_right() {
    let r3 = list_get_wrap_index(passages, index + 1);
    go(r3);
  }
  app_shared_button_arrow_left(previous, go_left);
  app_shared_button_arrow_right(next, go_right);
  show();
}
