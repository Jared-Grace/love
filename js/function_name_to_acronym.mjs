import { list_join_empty } from "./list_join_empty.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
import { error_json } from "./error_json.mjs";
export function function_name_to_acronym(f_name) {
  let parts = function_name_to_parts(f_name);
  let letters = null;
  try {
    letters = list_map(parts, list_first);
  } catch (e) {
    ("An error handed to json straight is an empty pair of brackets, because the");
    ("words it carries sit on properties that are deliberately not walked. So this");
    ("used to raise the name it was given and nothing at all about what went");
    ("wrong, and the guess written beside it - an empty part, two marks in a row,");
    ("a trailing mark - was a guess only because the sentence saying which one it");
    ("actually was had already been thrown away.");
    let cause = error_readable(e);
    error_json({
      cause,
      f_name,
    });
  }
  let acronym = list_join_empty(letters);
  return acronym;
}
