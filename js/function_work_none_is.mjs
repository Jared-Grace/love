export async function function_work_none_is(f_name) {
  "Whether the named function takes nothing and calls nothing, and so can only be handing back a fixed value or doing nothing at all.";
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let none = js_function_work_none_is(declaration);
  return none;
}
