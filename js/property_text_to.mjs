import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
export function property_text_to(object, property_name) {
  arguments_assert(arguments, 2);
  ("What a record holds under a name, written out as text.");
  ("A quiz keeps its question and its answer as whatever they really are - a");
  ("number, a truth - and every place that shows one to a learner has to write it");
  ("out first. Reaching in and writing out arrive together every time, and the");
  ("value in between is never shown as it stands.");
  let value = property_get(object, property_name);
  let text = text_to(value);
  return text;
}
