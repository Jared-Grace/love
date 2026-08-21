import { file_read_json } from "./file_read_json.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { g_arc_write } from "./g_arc_write.mjs";
export async function g_arc_write_file(arc_path, chapter_code, index_text) {
  "Take an arc drafted as its own file and file it in the chapter store, under the person it was written for.";
  "$plain chapter_code";
  "THE DOOR A DRAFT COMES IN THROUGH, and the reason a draft has anywhere to go. An arc arrives as a file - written out by a model, laid out to be read, edited by hand, parsed back - and until it is filed it is one path in a scratch folder that nothing plays, nothing backs up and nothing checks. This is the last step of writing one, and it is one command so that finishing an arc never depends on remembering where the store keeps things.";
  "The person's number arrives as text because a command line has nothing else to hand over, and is turned into a number here rather than left as one - stored as text it would read as a different person from the same number written by anything that did the turning.";
  let arc = await file_read_json(arc_path);
  let index = number_from_text(index_text);
  let path = await g_arc_write(chapter_code, index, arc);
  return path;
}
