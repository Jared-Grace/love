import { file_read_json } from "./file_read_json.mjs";
import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
import { g_arc_assert } from "./g_arc_assert.mjs";
export async function g_arc_chapter_assert(arc_path, chapter_code) {
  "Prove that one stored arc obeys the rules it was written under, by name, against the chapter it answers from.";
  "THE RUNNABLE HALF of the check. The check itself works on an arc and the passages it was offered, which are objects nobody can type at a command; this turns a path and a chapter code into those, so an arc that was just written can be checked where it lies rather than only inside another call.";
  let arc = await file_read_json(arc_path);
  let passages = await g_sermon_chapter_passages_chaptered(chapter_code);
  let r = g_arc_assert(arc, passages);
  return r;
}
