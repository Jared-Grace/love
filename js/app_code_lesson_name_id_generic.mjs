import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function app_code_lesson_name_id_generic(rights, left, name_get) {
  "★ IT NO LONGER MAKES AN ID. It used to join the category word to the words handed in and turn the result into an underscore slug, and that slug became the key a learner's finished work was stored under. Ids are written down under each lesson's own function name now, so a lesson can no longer name itself out of its own prose.";
  "rights is still received and no longer read. It is the list of words the id was built from, and it is passed by every lesson maker in the app, so taking it away is a change to all of them and is left to its own commit rather than smuggled into this one.";
  left = text_first_upper_to(left);
  let lambda = name_get(left);
  let name_id = {
    name: lambda,
  };
  return name_id;
}
