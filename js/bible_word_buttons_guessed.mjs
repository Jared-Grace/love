import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_words } from "./ebible_version_words.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_word_buttons_guessed(bible_folder) {
  "$plain bible_folder";
  "Every word a tapped-word button says that the reading had to guess, because the button recordings are spoken from the word in small letters; with which of them a capital letter would mend, and which word pairs - like Job and job - share one recording but want two sounds.";
  "★ IT ASKS THE BUTTON'S OWN WORD LIST, THE LOWERCASED ONE THE RECORDER WAS HANDED, NOT THE TEXT AS WRITTEN. The Bible name list answers only the capitalised spelling, so a name that is right in a chapter can be guessed on its button, and only the button's spelling shows that.";
  "The capitalised spellings the bible writes are passed too, so a pair is only reported where the bible actually writes the name.";
  arguments_assert(arguments, 1);
  let words = await ebible_version_words(bible_folder);
  let written = await bible_words_written(bible_folder);
  let args = {
    words,
    written,
  };
  let reported = await py_script_speech_json_report(
    fn_name("bible_word_buttons_guessed"),
    args,
  );
  return reported;
}
