import { file_read_uncached } from "./file_read_uncached.mjs";
import { g_arc_review_text_parse } from "./g_arc_review_text_parse.mjs";
import { g_sermon_chapter_passages_chaptered } from "./g_sermon_chapter_passages_chaptered.mjs";
import { property_get } from "./property_get.mjs";
import { g_arc_answer_passage } from "./g_arc_answer_passage.mjs";
import { add } from "./add.mjs";
import { file_write_json } from "./file_write_json.mjs";
import { list_size } from "./list_size.mjs";
export async function g_arc_review_chapter_read(
  review_path,
  chapter_code,
  arc_path,
) {
  "Read an edited review page back into an arc and write that arc as JSON - the way work that came back as readable text becomes the stored thing.";
  "EVERY REFERENCE IS RESOLVED on the way in, against the very passages the chapter offered. That is the step that makes taking readable text seriously safe: the words of an arc are the writer's own and nobody can check them for them, but a passage either was handed to them or was not, and one that was not stops the whole page here rather than being stored as an arc nothing can play.";
  "The Scripture printed on the page is not read back, so a page whose verses were edited still writes an arc that agrees with the Bible.";
  "READ UNCACHED, because the whole point of the page is that a person edits it outside this process. A cached read would hand back the words as they stood when something else last looked, and write those over the edit that was the reason for the call.";
  let review_text = await file_read_uncached(review_path);
  let arc = g_arc_review_text_parse(review_text);
  let passages = await g_sermon_chapter_passages_chaptered(chapter_code);
  let turns = 0;
  let conversations = property_get(arc, "conversations");
  for (let conversation of conversations) {
    let conversation_turns = property_get(conversation, "turns");
    for (let turn of conversation_turns) {
      let reference = property_get(turn, "reference");
      g_arc_answer_passage(passages, reference);
      turns = add(turns, 1);
    }
  }
  await file_write_json(arc_path, arc);
  let r = {
    arc_path,
    conversations: list_size(conversations),
    turns,
  };
  return r;
}
