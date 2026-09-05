import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_lyric_videos_folder } from "./data_given_lyric_videos_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_hand_times_read } from "./lyric_video_hand_times_read.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { json_equal } from "./json_equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { lyric_video_times_machine_word } from "./lyric_video_times_machine_word.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_times_machine_mark(name) {
  arguments_assert(arguments, 1);
  ("$plain name");
  ("Says of one named timing document that the moments in it are a machine's, which is what allows a later listening to write over them.");
  ("★ IT REFUSES UNLESS THE MOMENTS IT IS ABOUT TO MAKE OVERWRITABLE ARE ALREADY KEPT SOMEWHERE ELSE. This is the one command in the pipeline that removes a protection rather than adding one, so the copy is not a courtesy it performs afterwards - it is the condition it runs under. A backup that is merely encouraged gets skipped exactly on the day it was needed, and the argument for marking a document is always the same shape: nobody remembers a person timing this one. Being wrong about that is unrecoverable in one direction and free in the other.");
  ("★ IT IS MARKED BY HAND BECAUSE THE PROOF THE SWEEP USES CANNOT REACH HERE. The sweep marks a document by rebuilding it from the hearing this repo kept, which settles authorship outright; a document timed by some earlier tool leaves no such hearing and never will, so the only evidence about it is what its own history shows - and reading a history is a judgement, made once, by somebody who then names the document.");
  ("The name is the document's own, not a chapter, because two translations of one chapter are two songs and only one of them may be the one being ruled on.");
  let folder = data_given_lyric_videos_folder();
  let path = path_join([folder, name + ".json"]);
  let document = await file_read_json(path);
  let kept = await lyric_video_hand_times_read();
  let was = kept[name];
  let absent = equal(was, undefined);
  let safe = not(absent) && json_equal(was.lines, document.lines);
  assert_json(safe, {
    name,
    path,
    hint: text_combine_multiple([
      "this document's moments are not in the kept record, so marking them the machine's would make them overwritable while they exist in one place only - run ",
      fn_name("lyric_video_documents_hand_times_keep"),
      " first",
    ]),
  });
  document.times_from = lyric_video_times_machine_word();
  await file_overwrite_json(path, document);
  let r = {
    name,
    path,
    word: document.times_from,
  };
  return r;
}
