export async function js_array_text_call_set(ast, selects, word, f_name) {
  arguments_assert(arguments, 4);
  ("Points one written entry of an ordered register at a call to a named function,");
  ("leaving it where it sits. The register family could write a word and could");
  ("write a name, and a call was the third thing an entry is ever made of - which");
  ("is the one a spelled-out constant has to become when its getter already");
  ("exists.");
  ("Taking the word out and adding the call would have said the same thing in two");
  ("commands, and read as two changes: a register briefly short one entry is a");
  ("state nobody wants and a peer's sweep can commit. Setting it in place keeps the");
  ("order too, which for a register is part of the meaning.");
  ("The entry is found by the word it holds, so a register that does not hold that");
  ("word refuses here rather than quietly doing nothing.");
  let elements = js_selects_array_elements(ast, selects);
  let found = js_array_element_text_find(elements, word);
  let index = list_index_of(elements, found);
  let expression = await js_call_new_expression(f_name, ast);
  list_set(elements, index, expression);
}
