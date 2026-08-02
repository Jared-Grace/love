import { g_openai_split_property } from "./g_openai_split_property.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
("Line count of one sermon passage across BOTH stores: a `lines` array in the write store, or a `sermon` newline-string in the edited bible store, split the game's own way.");
export function g_sermon_passage_line_count(passage) {
  let has_lines = property_exists(passage, "lines");
  if (has_lines) {
    let lines = property_get(passage, "lines");
    let r = lines.length;
    return r;
  }
  let split = g_openai_split_property(passage, "sermon");
  let r2 = split.length;
  return r2;
}
