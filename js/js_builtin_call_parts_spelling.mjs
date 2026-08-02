import { property_get } from "./property_get.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
export function js_builtin_call_parts_spelling(parts) {
  "The two halves of a built-in method call written back out the way the file spells them, with the dot between.";
  "A sweep reports what it moved, and a method name on its own does not say enough to be read - a report of `now` leaves the reader working out which built-in that was, while `Date.now` is the line they would find if they went looking.";
  let object = property_get(parts, "object");
  let member = property_get(parts, "member");
  let dot = ".";
  let spelling = text_combine_3(object, dot, member);
  return spelling;
}
