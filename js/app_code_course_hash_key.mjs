import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_course_hash_key() {
  "The word standing before the course in a code app link, so a link can open on a run of lessons narrower than the whole one.";
  "2026-10-15: asked for as a link that holds only the lessons that step through a program. Not picked: a bare word with no value, which fits none of the key=value pairs every other part of the link is written in.";
  arguments_assert(arguments, 0);
  let v = "course";
  return v;
}
