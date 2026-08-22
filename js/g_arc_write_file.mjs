import { g_npc_nickname_index } from "./g_npc_nickname_index.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { g_arc_write } from "./g_arc_write.mjs";
export async function g_arc_write_file(arc_path, chapter_code, nickname) {
  "Take an arc drafted as its own file and file it in the chapter store, under the person it was written for.";
  "$plain chapter_code";
  "THE DOOR A DRAFT COMES IN THROUGH, and the reason a draft has anywhere to go. An arc arrives as a file - written out by a model, laid out to be read, edited by hand, parsed back - and until it is filed it is one path in a scratch folder that nothing plays, nothing backs up and nothing checks. This is the last step of writing one, and it is one command so that finishing an arc never depends on remembering where the store keeps things.";
  "$plain nickname";
  "THE PERSON IS NAMED RATHER THAN NUMBERED, and the name is turned into their pool number here. Filing a finished arc is the moment somebody is most likely to reach for the wrong person, because the draft has been read a hundred times and the number has not; a name that nobody in the pool answers to throws, where a number one too high quietly writes the arc onto somebody else.";
  let arc = await file_read_json(arc_path);
  let index = await g_npc_nickname_index(nickname);
  let path = await g_arc_write(chapter_code, index, arc);
  return path;
}
