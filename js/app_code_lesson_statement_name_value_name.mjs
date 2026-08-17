import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
export function app_code_lesson_statement_name_value_name() {
  arguments_assert(arguments, 0);
  ("the one name the lessons on giving a value a name use while there is only ever one cup - the first of the two");
  (
    "Six screens opened by asking for the pair and then taking the first of it, which is one fact written six times over and read each time as a list being picked from rather than as the name it is. Asked for by name here, the picking happens once and a screen says what it wants."
  );
  (
    "The pair keeps its own name because the screen with two cups on it really does want both, in the order they are met. This is the other reading of that same list, not a replacement for it."
  );
  let names = app_code_lesson_statement_name_value_names();
  let name = list_first(names);
  return name;
}
