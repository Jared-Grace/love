import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast_body } from "./function_ast_body.mjs";
import { js_statement_address_name } from "./js_statement_address_name.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function function_body_addressed(f_name) {
  "$plain f_name";
  "The top-level lines of the named function's body, each beside the word a cut is addressed by when it points at that line.";
  "AN ADDRESS AND THE LINE IT NAMES ARE ONE READING. Two callers wanted the pair and both were building it, and a caller that rebuilt the addresses a different way from the one the cut reads them by would be pointing commands at lines the cut cannot find.";
  "THE ORDER IS THE ORDER THEY ARE WRITTEN IN, which is what lets a reader step from an address to the line above it. A run whose last word is one nobody chose can be offered again one line shorter, and there is nowhere else to look up what that shorter run would then be addressed by.";
  "NOTHING IS WRITTEN AND NOTHING IS MOVED.";
  arguments_assert(arguments, 1);
  let read = await function_ast_body(f_name);
  let ast = property_get(read, "ast");
  let statements = property_get(read, "statements");
  let addresses = [];
  for (let statement of statements) {
    let address = js_statement_address_name(ast, statement);
    list_add(addresses, address);
  }
  let r = {
    ast,
    statements,
    addresses,
  };
  return r;
}
