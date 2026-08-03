import { nearley_grammar_text_parser } from "./nearley_grammar_text_parser.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { app_replace_rule_set_rules_get } from "./app_replace_rule_set_rules_get.mjs";
import { app_replace_rule_set_strings_simple } from "./app_replace_rule_set_strings_simple.mjs";
import { js_code_object } from "./js_code_object.mjs";
import { js_code_string } from "./js_code_string.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_code_arrow_args_body_expression } from "./js_code_arrow_args_body_expression.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_single } from "./list_single.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { log_json } from "./log_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_rule_set_verify_nearley() {
  let r2 = app_replace_rule_set_strings_simple();
  let rules = app_replace_rule_set_rules_get(r2);
  let grammarText =
    "\nbits -> bits di {% (d) => ({\n  ['left']: 'bits',\n  ['right']: d\n}) %}\n\nbits -> di {% (d) => ({\n  ['left']: 'bits',\n  ['right']: d\n}) %}\n\ndi -> \"0\" {% (d) => {\n  const val = d.flat(Infinity)[0];\n  return { ['left']: \"di\", ['right']: d };\n} %}\n\ndi -> \"1\" {% (d) => {\n  const val = d.flat(Infinity)[0];\n  return { ['left']: \"di\", ['right']: d };\n} %}\n";
  function lambda(rule) {
    let left = property_get(rule, "left");
    let only = list_single(left);
    let right = property_get(rule, "right");
    let joined = list_join_space(right);
    let identifier = "d";
    let object = {
      left: js_code_string(only),
      right: identifier,
    };
    let w = js_code_object(object);
    let w2 = js_code_wrap_parenthesis(w);
    let code = js_code_arrow_args_body_expression(identifier, w2);
    let r = text_combine_multiple([only, " -> ", joined, " {% ", code, " %}"]);
    return r;
  }
  let mapped = list_map(rules, lambda);
  list_join_newline_2(mapped);
  let parser = nearley_grammar_text_parser(grammarText);
  let input = '"_"';
  input = "001";
  parser.feed(input);
  log_json(parser.results);
}
