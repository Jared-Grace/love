import { list_concat_property } from "./list_concat_property.mjs";
import { property_exists } from "./property_exists.mjs";
import { app_replace_rules_symbols } from "./app_replace_rules_symbols.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_element } from "./html_element.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { html_cycle_bold } from "./html_cycle_bold.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export function app_replace_rule_set_abbreviations(rs, rules_used, parent) {
  let exists = property_exists(rs, "abbreviations");
  if (exists) {
    ("only what this goal's rules actually spell is explained, and the same reading of what those rules spell is what the gate measures the explanations against - written twice, one of them could quietly start showing what the other had stopped checking");
    let unique = app_replace_rules_symbols(rules_used);
    app_shared_text_body(parent, "Abbreviations");
    let component = html_element(parent, "ul");
    let abbreviations = property_get(rs, "abbreviations");
    let list = object_to_list(abbreviations);
    list_sort_text_property(list, "key");
    function lambda6(kv) {
      let key = property_get(kv, "key");
      let includes = list_includes(unique, key);
      if (includes) {
        let concated = list_concat_property(["", key, ": ", ""], kv, "value");
        let component2 = html_element(component, "li");
        html_cycle_bold(component2, concated);
      }
    }
    each(list, lambda6);
  }
}
