import { repo_functions_names } from "./repo_functions_names.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_html_style_helper_try } from "./js_html_style_helper_try.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export async function html_style_helpers() {
  "Every named helper that stands for setting one style property, read out of the helpers themselves.";
  "Only the html ones. A helper named for an app sets that app's look rather than a property in general, so rewriting a bare call to it would tie shared code to one app - the same reason shared code may not import from an app. Two such functions match the shape exactly and are skipped for that reason alone: one animates a player, one spaces an answer.";
  let f_names = await repo_functions_names("love");
  let html = list_filter_starts_with(f_names, "html_");
  async function helper_of(f_name) {
    let parsed = await function_parse_declaration(f_name);
    let declaration = property_get(parsed, "declaration");
    let helper = js_html_style_helper_try(declaration);
    return helper;
  }
  let tried = await list_map_async(html, helper_of);
  let helpers = list_filter_null_not_is(tried);
  return helpers;
}
