import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_reading_changed_args } from "./bible_audio_reading_changed_args.mjs";
import { fn_name } from "./fn_name.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
export async function bible_audio_reading_changed_queue(
  bible_folder,
  chapters,
) {
  "$plain bible_folder";
  "$plain chapters";
  "The chapters of a recorded bible whose sound says something the reading no longer says, counted by reading each of them twice - once as the reading was on the day it was recorded, once as it is now - and setting the two side by side word by word.";
  "★ THE QUEUE BESIDE THIS ONE ASKS THE SMALLER HALF OF THE SAME QUESTION. A word the old reading had never heard of came back with no sounds and was caught as silence; a word it held a wrong answer for came back sounding wrong, which is not silence, and was not. Luke 3 is the case that showed it: recorded the day before the door, dropping nothing, and saying neither Pontius nor Pilate right.";
  "★ THE READING IS TWO STEPS AND THE APOSTROPHE MOVED THE FIRST OF THEM, WHICH IS WHY THIS IS NOT ONE LINE OF READINGS. The dictionary and the sounding-out changed how letters become sounds; the apostrophe changed what letters the voice is handed in the first place. A measurement that only swapped the sound step would hand both sides the same curly text and report no difference at all, while the recording says the opposite of its own caption - 'isn't' spoken as 'is'.";
  "★ THE TWO HALVES ARE REPORTED APART BECAUSE THEY COST DIFFERENT AMOUNTS. The chapters that dropped a word are already being recorded again night after night and want no deciding. The chapters that merely say a name wrongly are work nobody has agreed to yet, so they are counted and named and left alone.";
  "★ NAMING CHAPTERS ASKS ABOUT THOSE ONLY, WHICH IS HOW THE ANSWER IS CHECKED WITHOUT WAITING FOR ALL OF THEM. Reading a thousand chapters twice takes most of an hour, and a run that long should not be the first thing tried after an edit.";
  "Which folder to read, which three doors to stand on, and how the named chapters are split are the same for every reading-changed measurement, and are asked for whole rather than assembled again here.";
  arguments_assert(arguments, 2);
  let args = await bible_audio_reading_changed_args(bible_folder, chapters);
  let script_name = fn_name("bible_audio_reading_changed_queue");
  let reported = await py_script_speech_json_report(script_name, args);
  return reported;
}
