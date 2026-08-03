export function js_function_arguments_assert_add(declaration) {
  arguments_assert(arguments, 1);
  ("Write the line that counts a function's arguments at the top of its body, saying how many it takes.");
  ("Every function standing on its own in this repo opens with that line, and the three commands that make a new one out of an old one's insides were writing functions without it. A helper written inside another function never needed it - it was reached from one place, by lines standing beside it - but the moment it stands on its own anything may call it, and the count is the only thing left saying what it expects.");
  ("A function that already opens with the line is left exactly as it stands. Running a cut twice must not leave the count written twice, and a hand-written line already says what this would say.");
  let body = property_get(declaration, "body");
  let statements = property_get(body, "body");
  let first = list_first_or_null(statements);
  let already = js_call_named_statement_is(first, fn_name("arguments_assert"));
  if (already) {
    return;
  }
  let params = property_get(declaration, "params");
  let count = list_size(params);
  let counted = text_to(count);
  let code = text_combine_multiple(["arguments_assert(arguments, ", counted, ");"]);
  let statement = js_parse_statement(code);
  list_add_first(statements, statement);
}
