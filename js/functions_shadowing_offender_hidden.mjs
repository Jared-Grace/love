import { list_concat_property } from "./list_concat_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function functions_shadowing_offender_hidden(offender) {
  arguments_assert(arguments, 1);
  ("Every word a function hides, whichever of the two ways it hides it.");
  ("A word can be hidden by a scope inside the file standing over a binding");
  ("further out, or by the function's own level standing over a function of the");
  ("repo. The two are found separately because the repair for each is a different");
  ("rename, but asking whether a word is hidden at all does not care which, so the");
  ("two lists are read only to be laid end to end.");
  let outer = property_get(offender, "shadows_outer");
  let hidden = list_concat_property(outer, offender, "shadows_function");
  return hidden;
}
