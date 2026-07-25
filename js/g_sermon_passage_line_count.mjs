import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_openai_split } from "./app_g_openai_split.mjs";
("Line count of one sermon passage across BOTH stores: a `lines` array (",
  g_sermon_write.name,
  ") or a `sermon` newline-string (edited ",
  app_g_bible.name,
  ", split the game's own way).");
export function g_sermon_passage_line_count(passage) {
  let has_lines = property_exists(passage, "lines");
  if (has_lines) {
    let lines = property_get(passage, "lines");
    let r = lines.length;
    return r;
  }
  let sermon = property_get(passage, "sermon");
  let split = app_g_openai_split(sermon);
  let r2 = split.length;
  return r2;
}
