import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { path_join } from "./path_join.mjs";
import { bible_audio_dictionary_door_commit } from "./bible_audio_dictionary_door_commit.mjs";
import { git_commit_second } from "./git_commit_second.mjs";
import { bible_audio_sounded_out_door_commit } from "./bible_audio_sounded_out_door_commit.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
export async function bible_audio_reading_changed_queue(
  bible_folder,
  chapters,
) {
  "$plain bible_folder";
  "$plain chapters";
  "The chapters of a recorded bible whose sound says something the reading no longer says, counted by reading each of them twice - once as the reading was on the day it was recorded, once as it is now - and setting the two side by side word by word.";
  "★ THE QUEUE BESIDE THIS ONE ASKS THE SMALLER HALF OF THE SAME QUESTION. A word the old reading had never heard of came back with no sounds and was caught as silence; a word it held a wrong answer for came back sounding wrong, which is not silence, and was not. Luke 3 is the case that showed it: recorded the day before the door, dropping nothing, and saying neither Pontius nor Pilate right.";
  "★ BOTH DOORS ARE HANDED OVER, AND EACH ONE DOES A DIFFERENT JOB. The later door - where the dictionary of names arrived - says which chapters are worth reading at all, and asking the older one there would have called Luke 3 current while both of Pilate's names are spoken wrongly in it. The older door - where the reading stopped leaving an unknown name silent - then says which of the three readings this repo has spoken with actually spoke each of those chapters, since a chapter recorded between the two doors was spoken by a reading that drops nothing and still says names wrongly.";
  "★ THE TWO HALVES ARE REPORTED APART BECAUSE THEY COST DIFFERENT AMOUNTS. The chapters that dropped a word are already being recorded again night after night and want no deciding. The chapters that merely say a name wrongly are work nobody has agreed to yet, so they are counted and named and left alone.";
  "★ NAMING CHAPTERS ASKS ABOUT THOSE ONLY, WHICH IS HOW THE ANSWER IS CHECKED WITHOUT WAITING FOR ALL OF THEM. Reading a thousand chapters twice takes most of an hour, and a run that long should not be the first thing tried after an edit. The names arrive as one comma-joined word, as every list does on a command line, and are split here rather than there, because a word handed on whole is read letter by letter at the far end and quietly matches nothing.";
  arguments_assert(arguments, 2);
  let root = bible_audio_root_folder();
  let folder = path_join([root, bible_folder]);
  let commit = await bible_audio_dictionary_door_commit();
  let dictionary_second = await git_commit_second(commit);
  let commit_fallback = await bible_audio_sounded_out_door_commit();
  let fallback_second = await git_commit_second(commit_fallback);
  let script_name = fn_name("bible_audio_reading_changed_queue");
  let asked = text_split_comma_or_empty(chapters);
  let args = {
    root: folder,
    dictionary_second,
    fallback_second,
    chapters: asked,
  };
  let reported = await py_script_speech_json_report(script_name, args);
  return reported;
}
