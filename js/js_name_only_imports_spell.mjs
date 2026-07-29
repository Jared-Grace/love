import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_name_only_imports } from "./js_name_only_imports.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { object_replace } from "./object_replace.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_pad_space_quote_double } from "./text_pad_space_quote_double.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_name_only_imports_spell(ast) {
  arguments_assert(arguments, 1);
  ("Turns every import this file keeps only to read the word it is called into the");
  ("word itself.");
  ("An import is a road, so a name reached for only to be spelled hands this file");
  ("everything that name can reach. Nothing here calls any of it, and the bundler");
  ("drops it, but every question asked of the code statically believes the road -");
  ("which is how one line of prose put a download chain inside a game screen's");
  ("reach and turned a gate red for everybody.");
  ("Spelling the word loses nothing, because a rename follows the spelled form just");
  ("as it follows the imported one. What it drops is the road.");
  ("Only names whose every mention is the reading of their own word are touched, so");
  ("this cannot take away an import something still calls. The now-unread import is");
  ("left standing here and swept up by the pass that removes imports nothing reads,");
  ("which is the one place that job belongs.");
  let only = js_name_only_imports(ast);
  function each_item(v) {
    let node = property_get(v, "node");
    let object = property_get_or_null(node, "object");
    let looked_up = property_get_or_null(node, "property");
    if (not(object)) {
      return;
    }
    let object_type = js_node_type(object);
    let named_is = equal(object_type, "Identifier");
    if (not(named_is)) {
      return;
    }
    let mentioned = property_get_or_null(object, "name");
    let ours = list_includes(only, mentioned);
    if (not(ours)) {
      return;
    }
    let word = property_get_or_null(looked_up, "name");
    let spelling_is = equal(word, "name");
    if (not(spelling_is)) {
      return;
    }
    let quoted = text_pad_space_quote_double(mentioned);
    let spelled_f_name = fn_name("fn_name");
    let call_code = js_code_call_args(spelled_f_name, [quoted]);
    let call = js_parse_expression(call_code);
    object_replace(node, call);
  }
  js_visit_types(ast, ["MemberExpression"], each_item);
}
