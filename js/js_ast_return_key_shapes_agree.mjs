import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_returns_own } from "./js_function_returns_own.mjs";
import { js_return_object_expression_try } from "./js_return_object_expression_try.mjs";
import { not } from "./not.mjs";
import { js_object_expression_key_names } from "./js_object_expression_key_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_null } from "./js_null.mjs";
import { js_property_key_value } from "./js_property_key_value.mjs";
import { js_visit_function_nodes } from "./js_visit_function_nodes.mjs";
export function js_ast_return_key_shapes_agree(ast) {
  "$plain ast";
  arguments_assert(arguments, 1);
  ("Makes every way out of every function written in this file offer the caller the same words, by naming in each record the keys its siblings carry and it does not, each holding nothing.");
  ("The mend for what the return-shape gate names, and the reason it is one command rather than a run of hand edits: which keys are missing from which record is read off the file itself, so it cannot be got wrong and cannot go stale. A record widened by hand is one more place a later path can be written from memory.");
  ("Nothing already written is touched. A key a record already names keeps whatever it holds, so a run over a file that already agrees changes nothing at all, and running it twice is the same as running it once.");
  ("WHAT IT CANNOT DECIDE IS WHETHER THE DISAGREEMENT WAS MEANT. A function answering with one word or another on purpose - a value or a refusal, and never both - would be made to answer with both words and one of them empty, which is not what its author wrote. So it is asked for one function at a time by somebody who has read it, and never of the whole repo at once.");
  ("A record handed back from two ways out is widened once, because the same record is the same record however many returns reach it.");
  function function_visit(visited) {
    let node = property_get(visited, "node");
    let returns = js_function_returns_own(node);
    let records = [];
    let objects = [];
    let wanted = [];
    for (let one of returns) {
      let object_node = js_return_object_expression_try(one, node);
      if (not(object_node)) {
        continue;
      }
      let names = js_object_expression_key_names(object_node);
      if (not(names)) {
        continue;
      }
      let seen = list_includes(objects, object_node);
      if (seen) {
        continue;
      }
      list_add(objects, object_node);
      let record = {
        object_node,
        names,
      };
      list_add(records, record);
      for (let name of names) {
        let held = list_includes(wanted, name);
        if (held) {
          continue;
        }
        list_add(wanted, name);
      }
    }
    let count = list_size(records);
    let several = greater_than(count, 1);
    if (not(several)) {
      return;
    }
    for (let record of records) {
      let object_node = property_get(record, "object_node");
      let names = property_get(record, "names");
      let properties = property_get(object_node, "properties");
      for (let name of wanted) {
        let held = list_includes(names, name);
        if (held) {
          continue;
        }
        let key = js_identifier_expression(name);
        let value = js_null();
        let property = js_property_key_value(key, value);
        list_add(properties, property);
      }
    }
  }
  js_visit_function_nodes(ast, function_visit);
}
