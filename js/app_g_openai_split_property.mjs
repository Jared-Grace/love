import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_openai_split } from "./g_openai_split.mjs";
export function app_g_openai_split_property(object, property_name) {
  arguments_assert(arguments, 2);
  ("The lines of one named part of a passage, cut apart the way what a machine");
  ("wrote comes back.");
  ("A passage keeps its sermon, its objections and the rest as one long run of");
  ("text with the lines still inside it, so every reader of one of those parts asks");
  ("for it and then cuts it apart, and never wants the uncut run in between.");
  ("Which part is asked for is given rather than fixed, because the cutting is the");
  ("same for all of them and the choosing is the only thing a caller differs in.");
  let text = property_get(object, property_name);
  let lines = g_openai_split(text);
  return lines;
}
