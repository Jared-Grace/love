import { arguments_assert } from "./arguments_assert.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function app_code_lesson_name_id_generic(left, name_get) {
  arguments_assert(arguments, 2);
  ("★ IT NO LONGER MAKES AN ID, AND NOTHING ELSE DOES EITHER. It used to join the category word to the lesson's own words and turn the result into an underscore slug, and that slug became the key a learner's finished work was stored under. So rewording a title - the safest edit there is - moved a stored key, which is among the most destructive.");
  ("Ids are written down under each lesson's own function name now. A lesson can no longer name itself out of its own prose, because the words it would have named itself from are not handed here any more.");
  left = text_first_upper_to(left);
  let lambda = name_get(left);
  let name_id = {
    name: lambda,
  };
  return name_id;
}
