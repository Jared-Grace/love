import { file_read_json } from "./file_read_json.mjs";
import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
import { g_arc_review_text } from "./g_arc_review_text.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { text_size } from "./text_size.mjs";
export async function g_arc_review_chapter_write(
  arc_path,
  chapter_code,
  review_path,
) {
  "Read a written arc back from a file, lay it out with its Scripture, and write that where a person can read it.";
  "THE CHAPTER IS ASKED FOR because a written arc does not record which one it answered from - the passages were handed to the writer by its prompt, and nothing that comes back names the chapter. Given it here, every reference is resolved against exactly the passages that were offered, so a reference from anywhere else is caught rather than printed.";
  "One chapter, because that is a convert's prompt. A leader stands on several, and that caller gathers its own passages and calls the laying out directly.";
  "The place to write is asked for rather than made up from the arc's own path, because a written arc has no settled home yet and a rule for turning one path into another would be a decision about that home made by the wrong function.";
  let arc = await file_read_json(arc_path);
  let passages = await g_sermon_chapter_passages_chaptered(chapter_code);
  let text = g_arc_review_text(arc, passages);
  await file_overwrite(review_path, text);
  let r = {
    review_path,
    characters: text_size(text),
  };
  return r;
}
