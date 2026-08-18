export function js_code_handback_take(name_answer, name) {
  ("One written-out line taking a single name off what a moved body handed back and putting it where the moved body used to write it.");
  ("The name is given no let. It already exists, out in the function the moved body was written inside, and that is the whole point of the line - a let would make a second one standing beside it, and the line waiting to read the write would go on reading the first for ever.");
  let quoted = js_code_string(name);
  let read = js_code_call_args(fn_name("property_get"), [name_answer, quoted]);
  let code = js_code_assign_statement(name, read);
  return code;
}
