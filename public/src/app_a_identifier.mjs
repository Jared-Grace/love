import { ternary } from "../../../love/public/src/ternary.mjs";
import { js_visit_match_first } from "../../../love/public/src/js_visit_match_first.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_identifier_defineds_includes } from "../../../love/public/src/js_identifier_defineds_includes.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { js_identifier_rename_imports_fix } from "../../../love/public/src/js_identifier_rename_imports_fix.mjs";
import { app_a_identifier_generic } from "../../../love/public/src/app_a_identifier_generic.mjs";
import { app_a_keyword_blue } from "../../../love/public/src/app_a_keyword_blue.mjs";
import { js_special_arguments } from "../../../love/public/src/js_special_arguments.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_a_identifier(a) {
  let node = property_get(a, "node");
  let parent = property_get(a, "parent");
  let name = property_get(node, "name");
  let a2 = js_special_arguments();
  let span = null;
  if (equal(name, a2)) {
    span = app_a_keyword_blue(parent, name);
  } else {
    let f_names = property_get(a, "f_names");
    let includes = list_includes(f_names, name);
    span = html_span_text(parent, name);
    let color = null;
    if (includes) {
      color = "#007f00ff";
    } else {
      let ast = property_get(a, "ast");
      let v_match = js_visit_match_first(ast, node);
      let includes3 = js_identifier_defineds_includes(v_match, name);
      if (includes3) {
        let f_names_local = property_get(a, "f_names_local");
        let includes2 = list_includes(f_names_local, name);
        color = ternary(includes2, "#00c800ff", "#4a4affff");
      } else {
        color = "red";
      }
    }
    html_font_color_set(span, color);
  }
  function replace(value_new) {
    property_set(node, "name", value_new);
  }
  app_a_identifier_generic(
    a,
    span,
    name,
    {
      shortcut: "r",
      text: "Rename",
      on_change,
    },
    false,
    replace,
  );
  async function on_change(name_new) {
    let ast = property_get(a, "ast");
    await js_identifier_rename_imports_fix(ast, name, name_new);
  }
}
