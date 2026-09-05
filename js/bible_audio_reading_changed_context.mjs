import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { path_join } from "./path_join.mjs";
import { bible_audio_dictionary_door_commit } from "./bible_audio_dictionary_door_commit.mjs";
import { git_commit_second } from "./git_commit_second.mjs";
import { bible_audio_sounded_out_door_commit } from "./bible_audio_sounded_out_door_commit.mjs";
import { bible_audio_apostrophe_door_commit } from "./bible_audio_apostrophe_door_commit.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
export async function bible_audio_reading_changed_context(
  bible_folder,
  chapters,
  words,
) {
  "$plain bible_folder";
  "$plain chapters";
  "$plain words";
  "Every changed occurrence of the named words, with the word each side of it, which of the two reading steps moved, and how the soundings divide.";
  "★ THE QUEUE BESIDE THIS ONE COUNTS THE OCCURRENCES AND REMEMBERS ONE SOUNDING, WHICH IS ENOUGH FOR A NAME AND NOT FOR A SMALL WORD. It says so itself: a word sounds the same wherever it is met. Israel does; the does not, because the sound of the is read off the word after it. So a count of two hundred and eight changed thes sits beside a single pair of soundings that came from whichever one was met first, and the two cannot be read together at all.";
  "★ IT REPORTS WHICH STEP MOVED, WHICH IS THE THING NOTHING ELSE CAN SAY. Every chapter old enough to measure was recorded before all three doors, so the counting queue has no chapter in which only one step differs and cannot separate them. Here each piece is asked whether the two text steps hand the voice the same letters: where they do, only the sound step can have moved the word.";
  "★ A SMALL WORD THAT MOVED ONLY WHERE THE TEXT MOVED HAS NOT BEEN MISREAD. It is standing beside a word that used to be cut short at a curly apostrophe and is now whole, so its own rule fired on a different neighbour and rightly. That is a mended recording rather than a broken one, and it is the difference between leaving five hundred and seventy-nine chapters alone and recording them again.";
  arguments_assert(arguments, 3);
  let root = bible_audio_root_folder();
  let folder = path_join([root, bible_folder]);
  let commit = await bible_audio_dictionary_door_commit();
  let dictionary_second = await git_commit_second(commit);
  let commit_fallback = await bible_audio_sounded_out_door_commit();
  let fallback_second = await git_commit_second(commit_fallback);
  let commit_apostrophe = await bible_audio_apostrophe_door_commit();
  let apostrophe_second = await git_commit_second(commit_apostrophe);
  let script_name = fn_name("bible_audio_reading_changed_context");
  let asked = text_split_comma_or_empty(chapters);
  let followed = text_split_comma_or_empty(words);
  let args = {
    root: folder,
    dictionary_second,
    fallback_second,
    apostrophe_second,
    chapters: asked,
    words: followed,
  };
  let reported = await py_script_speech_json_report(script_name, args);
  return reported;
}
