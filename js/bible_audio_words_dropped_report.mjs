import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { path_join } from "./path_join.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
export async function bible_audio_words_dropped_report(bible_folder) {
  "$plain bible_folder";
  "Which words of a recorded bible the reading cannot say, and so leaves silent - counted over every chapter already on disk.";
  "★ A WORD THE READING CANNOT SAY IS SILENCE, NOT AN ERROR, SO NOTHING GOES RED WITHOUT THIS. The recording finishes, the caption still shows the word, and the sentence is simply missing it - measured once at 11192 word-occurrences over 508 of 738 chapters, almost all of them Hebrew proper names. The only way to know is to ask the letters-to-sound step what it made of each word.";
  "★ IT ASKS THE READING'S OWN STEP RATHER THAN BUILDING A SECOND ONE. Two copies of those settings would let this pass while the reading dropped words, which is the failure it exists to catch.";
  "★ AN EMPTY ANSWER IS THE GOOD ANSWER, AND IT MEANS A BATCH IS FIT TO KEEP. Run it after a night of recording and before deciding to record anything again: a chapter that drops no word does not need doing twice.";
  let root = bible_audio_root_folder();
  let folder = path_join([root, bible_folder]);
  let script_name = "bible_audio_words_dropped";
  let args = {
    root: folder,
  };
  let reported = await py_script_speech_json_report(script_name, args);
  return reported;
}
