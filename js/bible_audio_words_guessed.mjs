import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_audio_words_guessed(bible_folder) {
  "$plain bible_folder";
  "Every word a recorded bible was read aloud with that the reading had no answer for and sounded out from its spelling, judged inside the very line each piece was spoken from, with how often and where first.";
  "★ IT ASKS THE RECORDINGS RATHER THAN THE WORD LIST, BECAUSE A WORD ON ITS OWN IS NOT HOW A RECORDING MET IT. The list cuts a joined place name into pieces, so its pieces look like guesses even where the reading met the whole name written down. Read inside the line, a word is judged exactly as the voice judged it.";
  "Each guessed word comes back with the first piece it was guessed in, so the answer to whether the guess sounds right is one file away.";
  arguments_assert(arguments, 1);
  let root = path_join([bible_audio_root_folder(), bible_folder]);
  let args = {
    root,
  };
  let reported = await py_script_speech_json_report(
    fn_name("bible_audio_words_guessed"),
    args,
  );
  return reported;
}
