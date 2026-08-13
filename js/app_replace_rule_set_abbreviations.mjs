import { property_in_list } from "./property_in_list.mjs";
import { list_concat_property } from "./list_concat_property.mjs";
import { app_replace_abbreviations } from "./app_replace_abbreviations.mjs";
import { app_replace_rules_symbols } from "./app_replace_rules_symbols.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_element } from "./html_element.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_cycle_bold } from "./html_cycle_bold.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_replace_rule_set_abbreviations(rules_used, parent) {
  "What the short words in front of the player stand for, drawn under a heading of their own.";
  "The words come from the one place the whole app keeps them rather than from anything this exercise carries, so a short word met again in a later exercise arrives saying what it said before - and no exercise can be the one that disagrees.";
  "only what this goal's rules actually spell is explained, and the same reading of what those rules spell is what the gate measures the explanations against - written twice, one of them could quietly start showing what the other had stopped checking";
  let unique = app_replace_rules_symbols(rules_used);
  let abbreviations = app_replace_abbreviations();
  let list = object_to_list(abbreviations);
  function lambda(kv) {
    let includes = property_in_list(kv, "key", unique);
    return includes;
  }
  let shown = list_filter(list, lambda);
  ("the earliest exercises are played with single letters that stand for nothing, so there is nothing to explain and no heading either - which is read off what came out rather than off a flag, since an empty list under a heading is the same emptiness said twice");
  let empty = list_empty_is(shown);
  if (not(empty)) {
    list_sort_text_property(shown, "key");
    app_shared_text_body(parent, "Abbreviations");
    let component = html_element(parent, "ul");
    function lambda6(kv) {
      let key = property_get(kv, "key");
      let concated = list_concat_property(["", key, ": ", ""], kv, "value");
      let component2 = html_element(component, "li");
      html_cycle_bold(component2, concated);
    }
    each(shown, lambda6);
  }
}
