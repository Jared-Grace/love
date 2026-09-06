import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { path_join } from "./path_join.mjs";
import { bible_audio_dictionary_door_commit } from "./bible_audio_dictionary_door_commit.mjs";
import { git_commit_second } from "./git_commit_second.mjs";
import { bible_audio_sounded_out_door_commit } from "./bible_audio_sounded_out_door_commit.mjs";
import { bible_audio_apostrophe_door_commit } from "./bible_audio_apostrophe_door_commit.mjs";
import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
export async function bible_audio_reading_changed_args(bible_folder, chapters) {
  "$plain bible_folder";
  "$plain chapters";
  "The folder to read, the second each of the three doors was opened at, and the chapters asked for - which is everything a reading-changed measurement needs before it begins, and the same for every such measurement.";
  "★ THE TWO MEASUREMENTS DIFFER IN WHAT THEY REPORT AND NOT IN WHAT THEY STAND ON. One counts the chapters whose sound no longer says what the reading says; the other names each changed word with the word either side of it. Both need the same folder and the same three moments, and both got them by writing the same eight lines out. Eight lines copied is eight lines that can be mended in one place and left wrong in the other - and a door read at the wrong moment does not fail, it quietly calls a broken chapter current.";
  "★ ALL THREE DOORS ARE FETCHED, NOT JUST THE NEWEST. The newest says which chapters are worth reading at all, because anything recorded over it is recorded over the other two as well; the older two then say which pair of reading steps actually spoke each of those chapters. A chapter recorded between them drops nothing and still says names wrongly.";
  "The chapters arrive as one comma-joined word, as every list does on a command line, and are split here rather than at the far end, because a word handed on whole is read letter by letter there and quietly matches nothing.";
  arguments_assert(arguments, 2);
  let root = bible_audio_root_folder();
  let folder = path_join([root, bible_folder]);
  let commit = await bible_audio_dictionary_door_commit();
  let dictionary_second = await git_commit_second(commit);
  let commit_fallback = await bible_audio_sounded_out_door_commit();
  let fallback_second = await git_commit_second(commit_fallback);
  let commit_apostrophe = await bible_audio_apostrophe_door_commit();
  let apostrophe_second = await git_commit_second(commit_apostrophe);
  let asked = text_split_comma_or_empty(chapters);
  let args = {
    root: folder,
    dictionary_second,
    fallback_second,
    apostrophe_second,
    chapters: asked,
  };
  return args;
}
