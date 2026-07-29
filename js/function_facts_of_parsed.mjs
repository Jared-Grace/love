import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { fn_name_arg_get } from "./fn_name_arg_get.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { js_strings } from "./js_strings.mjs";
import { js_visit_calls_named } from "./js_visit_calls_named.mjs";
import { list_adder } from "./list_adder.mjs";
import { property_get } from "./property_get.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
export function function_facts_of_parsed(parsed) {
  arguments_assert(arguments, 1);
  ("Everything the index knows about one file, read off that file alone.");
  ("Separated from the merging half because this is the expensive part and the");
  ("only part that depends on the file's contents. Reading and parsing every");
  ("function in the repo to build the index costs seconds; asking the disk whether");
  ("each file has changed since last time costs a fraction of that. Nothing can be");
  ("kept between runs until what is derived from one file is a value that can be");
  ("written down, which is what this returns.");
  let f_path = property_get(parsed, "f_path");
  let f_name = function_path_to_name(f_path);
  let ast = property_get(parsed, "ast");
  let declaration = js_flo(ast);
  let async_is = property_get(declaration, "async");
  let identifiers = js_identifiers_names(ast);
  let strings = js_strings(ast);
  function collect(la) {
    function on_call({ args }) {
      let first = fn_name_arg_get(args, f_name);
      let value = property_get(first, "value");
      la(value);
    }
    js_visit_calls_named(ast, fn_name("fn_name"), on_call);
  }
  let identifiers_fn_names = list_adder(collect);
  let facts = {
    f_name,
    async_is,
    identifiers,
    strings,
    identifiers_fn_names,
  };
  return facts;
}
