import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_scroll_top_set } from "./html_scroll_top_set.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { list_get_wrap_index } from "./list_get_wrap_index.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_supper_passages_get } from "./app_supper_passages_get.mjs";
import { app_supper_passage_render } from "./app_supper_passage_render.mjs";
import { app_shared_arrows_wide } from "./app_shared_arrows_wide.mjs";
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
export async function app_supper_verses_render(root, folders) {
  let waited = await list_map_unordered_async(folders, app_supper_verses_get);
  let choices = await ebible_choices();
  function folder_name(folder) {
    let choice = list_find_property_or_null(choices, "bible_folder", folder);
    if (null_is(choice)) {
      return folder;
    }
    return property_get(choice, "name");
  }
  let names = list_map(folders, folder_name);
  let r = list_first_remaining(waited);
  let remaining = property_get(r, "remaining");
  let verses_first = property_get(r, "first");
  let passages = app_supper_passages_get(verses_first);
  let size = list_size(passages);
  let passage_area = html_div(root);
  app_supper_prayers_render(root);
  let index = list_get_wrap_index(passages, app_supper_passage_index_get());
  function show() {
    html_clear(passage_area);
    let passage = list_get(passages, index);
    let card = app_shared_container_blue(passage_area);
    app_supper_passage_render(card, passage, remaining, names);
    app_shared_arrows_wide(passage_area, go_left, go_right);
  }
  function go(new_index) {
    index = new_index;
    app_supper_passage_index_set(index);
    show();
    html_scroll_top_set(root, 0);
  }
  function go_left() {
    go(list_get_wrap_index(passages, index + size - 1));
  }
  function go_right() {
    go(list_get_wrap_index(passages, index + 1));
  }
  show();
}
