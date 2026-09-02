import { object_is_assert_json } from "./object_is_assert_json.mjs";
export function object_is_assert(object) {
  "Refuses anything that is not a plain object of named properties.";
  "The twin underneath carries a caller's own words into the refusal. This one is for the door of a function whose name already says which door it is.";
  object_is_assert_json(object, {});
}
