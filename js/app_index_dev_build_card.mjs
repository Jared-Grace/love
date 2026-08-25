import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { app_shared_page_dev_build_is } from "./app_shared_page_dev_build_is.mjs";
import { app_index_stage_card_generic } from "./app_index_stage_card_generic.mjs";
import { not } from "./not.mjs";
export function app_index_dev_build_card(root) {
  "The card at the very top of the index page that goes to the same page's dev build, from which every app card then opens its own dev build.";
  "Not shown once the page IS the dev build, because a card that leads to the page it is standing on says nothing and still costs a tap to find out. The card back the other way is the one shown there instead.";
  arguments_assert(arguments, 1);
  ("the address is built from the dev folder's own word and this app's own name, so it follows a rename of either instead of having to be noticed and typed again");
  let folder = app_shared_name_dev_text();
  let name2 = fn_name("app_index");
  let name = app_shared_name_prefix_without(name2);
  let file = file_name_html(name);
  let path = list_join_slash_forward([folder, file]);
  let already = app_shared_page_dev_build_is();
  let shown = not(already);
  let label = "dev index";
  let text =
    "The same index, opening every app's dev build instead of the built one";
  app_index_stage_card_generic(root, shown, path, label, text);
}
