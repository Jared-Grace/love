import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { lyric_video_hearings_path } from "./lyric_video_hearings_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { path_join } from "./path_join.mjs";
import { equal } from "./equal.mjs";
import { lyric_video_document_hearing_rebuilt_is } from "./lyric_video_document_hearing_rebuilt_is.mjs";
import { lyric_video_times_machine_word } from "./lyric_video_times_machine_word.mjs";
export async function lyric_video_documents_times_from_missing() {
  arguments_assert(arguments, 0);
  ("The timing documents a machine demonstrably wrote and which nevertheless say nothing about where their moments came from.");
  ("★ IT PROVES THE CLAIM RATHER THAN GUESSING IT, BY REBUILDING THE DOCUMENT FROM THE HEARING THAT WAS KEPT. Every song the machine listened to left a record of exactly where it placed each line, and rebuilding from that record either lands on the document exactly or does not. A document it lands on was written by the machine; a document it misses anywhere was not, because somebody moved a number afterwards and moving a number is the whole of what a person's timing is.");
  ("★ A DOCUMENT WITH NO KEPT HEARING IS NOT NAMED HERE, EVEN THOUGH SOME OF THOSE ARE THE MACHINE'S TOO. There is no evidence about them either way, and the mark is a permission to overwrite: handing one out on a hunch risks the one thing that cannot be got back, an evening somebody spent tapping. Leaving it out costs a machine a minute of listening it has already proved it can do.");
  ("It is asked as its own question so that the repair can ask it twice - once to find its work and once to show there is none left - which is what makes the repair prove itself instead of reporting how many files it happened to open.");
  let folder_documents = data_given_lyric_videos_folder();
  let path_findings = lyric_video_hearings_path();
  let there = await file_exists(path_findings);
  if (not(there)) {
    let none = [];
    return none;
  }
  let hearings = await file_read_json(path_findings);
  let names = object_property_names(hearings);
  let missing = [];
  for (let name of names) {
    let path = path_join([folder_documents, name + ".json"]);
    let here = await file_exists(path);
    if (not(here)) {
      continue;
    }
    let document = await file_read_json(path);
    let unmarked = equal(document.times_from, undefined);
    if (not(unmarked)) {
      continue;
    }
    let rebuilt = lyric_video_document_hearing_rebuilt_is(
      document,
      hearings[name],
    );
    if (not(rebuilt)) {
      continue;
    }
    let one = {
      name,
      path,
      word: lyric_video_times_machine_word(),
    };
    missing.push(one);
  }
  return missing;
}
