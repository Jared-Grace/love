import { arguments_assert } from "./arguments_assert.mjs";
import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_hearing_record(name_document, hearing) {
  arguments_assert(arguments, 2);
  ("$plain name_document");
  ("$plain hearing");
  ("Keeps what listening to one song turned up - how much of the written psalm was actually heard, and which lines the two readings placed differently - beside the findings of every other check, and hands back the whole record.");
  ("★ IT IS KEPT BECAUSE IT CANNOT BE ASKED FOR TWICE. Hearing a song takes minutes of a machine's whole attention, and once the times are written the document is no longer untouched, so the very command that would produce this answer again now refuses to run. A number that is expensive to get and impossible to get a second time is not something to leave in the scroll of a terminal that closes.");
  ("★ IT IS A FINDING AND NOT DATA, WHICH IS WHY IT SITS IN THE FOUND HALF. Nothing running depends on it; it is a record of what a check said on a day, and putting it where the present's data lives would offer it to every sweep that rewrites names and values across the given folder. A past reading that gets tidied up is no longer a reading.");
  ("The document is named rather than the chapter, because the same chapter sung in a second translation is a different song with different lines and a different answer, and a key that could not tell them apart would quietly keep only whichever was heard last.");
  let folder = findings_folder();
  let path_findings = path_join([folder, "lyric_video_hearings.json"]);
  let there = await file_exists(path_findings);
  let empty = {};
  let record = not(there) ? empty : await file_read_json(path_findings);
  record[name_document] = hearing;
  await file_overwrite_json(path_findings, record);
  return record;
}
