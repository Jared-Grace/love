import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { app_shared_page_dev_build_is } from "./app_shared_page_dev_build_is.mjs";
import { app_index_stage_card_generic } from "./app_index_stage_card_generic.mjs";
export function app_index_built_card(root) {
  "The card that goes back from the dev build to the built pages everybody else opens, from which every app card then opens its own built page.";
  "The way in already existed and the way out did not, so a phone that tapped into the dev builds to check one screen had to peck the address of the ordinary site out by hand to get back to it - the same typing the card into here was written to save, charged on the way home instead.";
  "Shown only while the page being read is a dev build, which is the only place the offer means anything.";
  arguments_assert(arguments, 1);
  ("the address is built from this app's own name, so it follows a rename instead of having to be noticed and typed again");
  let name2 = fn_name("app_index");
  let name = app_shared_name_prefix_without(name2);
  let path = file_name_html(name);
  let shown = app_shared_page_dev_build_is();
  let label = "Built pages";
  let text =
    "The same index, opening every app's built page instead of the dev build";
  app_index_stage_card_generic(root, shown, path, label, text);
}
