import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_function_declaration_args } from "./js_code_function_declaration_args.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_map } from "./property_list_map.mjs";
import { property_set } from "./property_set.mjs";
export function js_function_lift_stub_swap(
  ast,
  declaration,
  name_old,
  inside,
  moved,
) {
  "$plain name_old";
  "$plain inside";
  "Finish a lift: stand the moved function at the top of the file, and leave the name it was written under on a body holding nothing but these lines.";
  "The two lifts that leave a name behind end here and ended here written out twice. What each of them puts inside the lines left behind is the whole of what they differ by - one calls and hands the answer straight on, the other calls and puts back what the call gives it - and that is the one thing handed in.";
  "How many arguments the old name takes, and whether it waits, are read off the function being replaced rather than handed in, because that is the one place they cannot be wrong. Only its body is swapped, so what it takes and whether it waits are exactly what they were, and a caller of the old name sees nothing change.";
  arguments_assert(arguments, 5);
  let async_is = property_get(declaration, "async");
  let param_names = property_list_map(
    declaration,
    "params",
    js_identifier_name_try,
  );
  let stub_code = js_code_function_declaration_args(
    async_is,
    name_old,
    param_names,
    inside,
  );
  let stub = js_parse_statement(stub_code);
  let stub_block = property_get(stub, "body");
  property_set(declaration, "body", stub_block);
  let body = property_get(ast, "body");
  list_add(body, moved);
}
