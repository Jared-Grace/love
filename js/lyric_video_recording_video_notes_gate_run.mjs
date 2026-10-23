import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_recording_video_notes_unsound } from "./lyric_video_recording_video_notes_unsound.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export async function lyric_video_recording_video_notes_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the store of recording-to-video notes is sound about itself - every note is filed under the recording it names, and no video is named by two notes.");
  ("★ IT GATES WHAT IS TRUE ON ANY MACHINE AND NOT WHAT IS ON THIS DISK. The notes keep file names and never paths, because the folder the songs live in has already moved; so a check that the named files are there would pass here and fail everywhere else, which is a gate measuring the machine rather than the repo. A note naming a file that has gone already fails safe at read time, by the reader's own design.");
  ("★ BOTH FAULTS ARE SILENT, WHICH IS WHY THEY ARE WORTH A GATE AT ALL. A misfiled note is found by nobody and reads as a song that was never rendered; two notes on one video read as two finished songs and hand the same file out twice. Neither throws and neither leaves an empty answer, so without this nothing ever asks.");
  ("It ratchets against nothing rather than against a baseline, because every note in the store was written by a command that could have checked this, so a fault here is new work rather than inherited history.");
  let unsound = await lyric_video_recording_video_notes_unsound();
  list_empty_is_assert_json(unsound.misnamed, {
    hint: text_combine_multiple([
      "each of these notes is filed under a name that is not the recording it names, so nothing can ever find it - the store is addressed by ",
      fn_name("lyric_video_recording_video_note_path"),
      ", so rename the file to the recording plus .json, or rewrite it with ",
      fn_name("lyric_video_recording_video_write"),
      " and delete the misfiled one",
    ]),
  });
  list_empty_is_assert_json(unsound.shared, {
    hint: text_combine_multiple([
      "more than one recording claims each of these videos, and the giveaway would hand the same file out under both songs - listen to the recordings and delete the note that is wrong from the store ",
      fn_name("lyric_video_recording_video_notes"),
      " reads",
    ]),
  });
  ("The store is named in the complaint, as the misfiled half already names its own, because a complaint naming no function cannot be placed by a deployment and so holds every app back - a fault in which recording goes with which video stopped a bible page from shipping.");
  ("Says how many notes it read, because a gate that answers nothing cannot be told apart from one that looked at nothing.");
  let answer = {
    notes: unsound.notes,
    misnamed: 0,
    shared: 0,
  };
  return answer;
}
