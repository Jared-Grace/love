import { log } from "./log.mjs";
import { js_identifiers_to_statements } from "./js_identifiers_to_statements.mjs";
import { js_identifiers_named } from "./js_identifiers_named.mjs";
export function js_statements_with_identifiers_named(ast, identifier_name) {
  let identifiers_named = js_identifiers_named(ast, identifier_name);
  log(js_statements_with_identifiers_named.name, {
    identifiers_named,
  });
  let statements = js_identifiers_to_statements(ast, identifiers_named);
  return statements;
}
