import { file_read_json } from "./file_read_json.mjs";
import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
import { g_arc_review_round_trip_assert } from "./g_arc_review_round_trip_assert.mjs";
export async function g_arc_review_chapter_round_trip_assert(
  arc_path,
  chapter_code,
) {
  "Prove that one written arc survives being laid out to read and read back again, by name, against the chapter it answers from.";
  "THE RUNNABLE HALF of the proof. The proof itself works on an arc and the passages it was offered, which are objects nobody can type at a command; this is what turns a stored arc and a chapter code into those, so the check can be run over a real arc rather than only over one built for it.";
  let arc = await file_read_json(arc_path);
  let passages = await g_sermon_chapter_passages_chaptered(chapter_code);
  let r = g_arc_review_round_trip_assert(arc, passages);
  return r;
}
