import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_params_get } from "./js_function_declaration_params_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_property_key_name_try } from "./js_property_key_name_try.mjs";
import { list_add } from "./list_add.mjs";
import { list_first_try } from "./list_first_try.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_record_parameter_names(declaration) {
  arguments_assert(arguments, 1);
  ("The names a function unpacks out of the one record it is handed, and nothing at all when it does not take a record that way.");
  ("These are the names it is filed under and not the names it binds them to. The two are the same word wherever the shorthand is used, which is everywhere here, but only the filed name is what the caller has to have written down - and a reading that answered the bound name would be answering about the inside of the function rather than about what passes between the two.");
  ("An entry with no fixed name is passed over rather than refusing the whole reading, because the question this answers is what the function is known to ask for. A name worked out while the program runs is not known, and leaving it out understates rather than misstates.");
  let params = js_function_declaration_params_get(declaration);
  let first = list_first_try(params);
  let record_is = js_node_type_is(first, "ObjectPattern");
  if (not(record_is)) {
    return null;
  }
  let properties = property_get(first, "properties");
  let names = [];
  for (let property of properties) {
    let name = js_property_key_name_try(property);
    if (null_is(name)) {
      continue;
    }
    list_add(names, name);
  }
  return names;
}
