export async function function_parallel_marked_is(f_name) {
  "Whether the named function carries the alike-on-purpose mark as a call in its body, which is the only way the mark is ever written.";
  "Asking after the names a body reads instead would say yes to the handful of functions that read or place the mark, since they spell it too. Those carry no claim about being alike, and counting them would make the check report its own machinery.";
  arguments_assert(arguments, 1);
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let block = property_get(declaration, "body");
  let statements = js_block_body_get(block);
  let mark_name = function_duplicate_kind_parallel.name;
  for (let statement of statements) {
    let call = js_statement_call_any_get(statement);
    let missing = null_is(call);
    if (missing) {
      continue;
    }
    let name = js_call_callee_name_try(call);
    let marked = equal(name, mark_name);
    if (marked) {
      return true;
    }
  }
  return false;
}
