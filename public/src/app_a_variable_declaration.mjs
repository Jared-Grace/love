import { app_a_statement_choices_add } from "../../../love/public/src/app_a_statement_choices_add.mjs";
import { app_a_node_index } from "../../../love/public/src/app_a_node_index.mjs";
import { app_a_paste } from "../../../love/public/src/app_a_paste.mjs";
import { app_a_functionize_choices_add } from "../../../love/public/src/app_a_functionize_choices_add.mjs";
import { app_a_semicolon } from "../../../love/public/src/app_a_semicolon.mjs";
import { app_a_nodes_list } from "../../../love/public/src/app_a_nodes_list.mjs";
import { app_a_overlay_choices } from "../../../love/public/src/app_a_overlay_choices.mjs";
import { app_a_keyword_blue_space } from "../../../love/public/src/app_a_keyword_blue_space.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_a_variable_declaration(a) {
  let node = property_get(a, "node");
  let parent = property_get(a, "parent");
  let kind = property_get(node, "kind");
  let k = app_a_keyword_blue_space(parent, kind);
  let keyword = property_get(k, "keyword");
  function lambda19(o, choices) {
    app_a_statement_choices_add(choices, a, o);
    app_a_functionize_choices_add(choices, a, o);
    let v = app_a_node_index(a);
    let index = property_get(v, "index");
    let list = property_get(v, "list");
    app_a_paste(choices, a, o, list, index, "above");
  }
  app_a_overlay_choices(a, keyword, lambda19);
  let declarations = property_get(node, "declarations");
  app_a_nodes_list(a, declarations, parent);
  app_a_semicolon(parent);
}
