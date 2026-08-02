export function js_function_declaration_personal_names(declaration) {
  arguments_assert(arguments, 1);
  ("Every name a function chose for itself: its own name, the names it gave the things handed to it, and the names it gave the things it made along the way.");
  ("These are the names that say who wrote a function rather than what it does, so they are the ones a shape reader blanks. A name nobody outside can see carries no meaning to compare - two functions calling the same thing a count and a total are doing the same work, and only the blanking lets that be seen. The names of the other functions it calls are deliberately not here: those are what it does.");
  ("Its own name is first on purpose. Three readers wanted this list, and every one of them wanted it in that order, because a shape numbers its blanks by where each name first appears and a function that never mentions itself would otherwise number differently from one that does.");
  let own = js_function_declaration_name(declaration);
  let params = js_function_declaration_params_names(declaration);
  let locals = js_declared_names(declaration);
  let named = list_concat(params, locals);
  let personal = list_concat([own], named);
  return personal;
}
