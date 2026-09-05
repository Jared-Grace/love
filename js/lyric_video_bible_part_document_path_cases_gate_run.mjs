import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_part_document_path_cases } from "./lyric_video_bible_part_document_path_cases.mjs";
import { property_get } from "./property_get.mjs";
import { psalms_song_file_part_or_null } from "./psalms_song_file_part_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { lyric_video_bible_part_document_path } from "./lyric_video_bible_part_document_path.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function lyric_video_bible_part_document_path_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every song file name written down in the corpus reaches the timing document the corpus says, so the several spellings of one singing meet in one file and two different passages never do.");
  ("★ THE READING AND THE ADDRESS ARE ASKED TOGETHER ON PURPOSE, BECAUSE NEITHER OF THEM ALONE IS THE THING THAT CAN GO WRONG. Each is already right about what it was asked; what a person actually depends on is that a file name on the disk arrives at one particular document, and that is a fact about the pair of them. Either one changing its mind about the mark between two verses breaks it, and only a check that walks the whole way notices.");
  ("★ WHAT IS BEING GUARDED IS SOMEBODY'S EVENING RATHER THAN A STRING. Two spellings of one song that drifted apart would be drafted twice, and the second draft would put an even spread where corrected times had been; two passages that came together would do the same. Neither goes red anywhere, and both are seen for the first time by a person watching a video whose words no longer land on the beats.");
  ("Throws so the dispatcher seam exits nonzero");
  let cases = lyric_video_bible_part_document_path_cases();
  function answer(c) {
    let file_name = property_get(c, "file_name");
    let read = psalms_song_file_part_or_null(file_name);
    if (null_is(read)) {
      return null;
    }
    let path = lyric_video_bible_part_document_path(
      "bsb",
      "PSA",
      read.chapter,
      read.verse_first,
      read.verse_last,
    );
    return path;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "document_path",
    "name",
    "lyric video bible part document path",
  );
  return r;
}
