import { list_add_multiple } from "./list_add_multiple.mjs";
import { g_arc_style } from "./g_arc_style.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { each } from "./each.mjs";
export function g_arc_style_lines() {
  "The style rules written out the way the arc prompt says them - each rule on its own line, with the reason for it under it, indented by two.";
  "THE REASON IS SENT ALONG WITH THE RULE rather than kept back for whoever maintains the list. A rule given bare is obeyed on the cases it names and nowhere else, because there is nothing to reason from when a case turns up that it did not name - and every one of these came from a reader finding a case nobody had named yet. The reason is what carries it to the next one.";
  "WHERE EACH RULE CAME FROM STAYS BEHIND, and it is the only field that does. Provenance settles whether a rule may be added or dropped, which is a question for the person holding the list and not for the call that writes an arc - and a note saying six readers found this on a chapter is weight in a conversation and noise in a prompt.";
  "The two-space indent is the prompt's own convention for a listed thing and is checked by its style gate, which is why it is spelled here rather than left to whoever writes the rules.";
  let rules = g_arc_style();
  let lines = [];
  function rule_add(entry) {
    let rule = property_get(entry, "rule");
    let why = property_get(entry, "why");
    let indented = list_join_empty(["  ", why]);
    list_add_multiple(lines, [rule, indented]);
  }
  each(rules, rule_add);
  return lines;
}
