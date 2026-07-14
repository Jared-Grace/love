import { property_exists } from "./property_exists.mjs";
import { list_map_property_multiple } from "./list_map_property_multiple.mjs";
import { list_squash } from "./list_squash.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_element } from "./html_element.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_concat } from "./list_concat.mjs";
import { html_cycle_bold } from "./html_cycle_bold.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
export function app_replace_rule_set_abbreviations(rs, rules_used, parent) {
  let exists2 = property_exists(rs, "abbreviations");
  if (exists2) {
    let properties = ["left", "right"];
    let mapped = list_map_property_multiple(rules_used, properties);
    let squashed = list_squash(mapped);
    let unique = list_unique(squashed);
    app_shared_text_body(parent, "Abbreviations");
    let component = html_element(parent, "ul");
    let abbreviations = property_get(rs, "abbreviations");
    let list = object_to_list(abbreviations);
    list_sort_text_property(list, "key");
    function lambda6(kv) {
      let key = property_get(kv, "key");
      let includes2 = list_includes(unique, key);
      if (includes2) {
        let value2 = property_get(kv, "value");
        let concated = list_concat(["", key, ": ", ""], value2);
        let component2 = html_element(component, "li");
        html_cycle_bold(component2, concated);
      }
    }
    each(list, lambda6);
  }
}
