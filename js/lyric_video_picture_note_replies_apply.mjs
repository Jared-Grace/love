import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_name_json_folder_gitignore } from "./file_name_json_folder_gitignore.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { notes_reply } from "./notes_reply.mjs";
import { list_add } from "./list_add.mjs";
export async function lyric_video_picture_note_replies_apply() {
  "Put every reply written in the replies file under the lyric video picture note it answers, and answer with the ones whose words matched no note.";
  "THE REPLIES COME FROM ONE FIXED FILE AND NOT FROM ARGUMENTS, because a note is a sentence full of commas and question marks and a round answers a dozen of them at once; typed on a command line the words split, and one command per note is a loop that leaves nothing behind.";
  "EACH ENTRY NAMES THE PICTURE'S KEY, THE NOTE'S WORDS EXACTLY, AND THE REPLY, because a note is addressed by its own words and never by its place in the list.";
  "WHAT MATCHED NOTHING IS HANDED BACK, so a reply whose words were copied wrong is seen at once rather than looking as though it landed.";
  arguments_assert(arguments, 0);
  let path = file_name_json_folder_gitignore(
    "lyric_video_picture_note_replies",
  );
  let entries = await file_read_json(path);
  let missed = [];
  for (let entry of entries) {
    let key = property_get(entry, "key");
    let words = property_get(entry, "note");
    let reply = property_get(entry, "reply");
    let reached = await notes_reply(
      fn_name("lyric_video_picture_note_add"),
      key,
      words,
      reply,
    );
    if (equal(reached, 0)) {
      list_add(missed, entry);
    }
  }
  return missed;
}
