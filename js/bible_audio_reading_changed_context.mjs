import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_reading_changed_args } from "./bible_audio_reading_changed_args.mjs";
import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { property_set } from "./property_set.mjs";
import { fn_name } from "./fn_name.mjs";
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
  "★ THE WORDS TO FOLLOW ARE THE ONE THING THE QUEUE BESIDE THIS ONE DOES NOT ASK FOR, so they are added to the shared ask rather than being built into it. Everything under them - the folder, the three doors, the chapters - is the same question both measurements stand on, and is asked for whole.";
  arguments_assert(arguments, 3);
  let args = await bible_audio_reading_changed_args(bible_folder, chapters);
  let followed = text_split_comma_or_empty(words);
  property_set(args, "words", followed);
  let script_name = fn_name("bible_audio_reading_changed_context");
  let reported = await py_script_speech_json_report(script_name, args);
  return reported;
}
