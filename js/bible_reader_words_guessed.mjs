import { arguments_assert } from "./arguments_assert.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { list_unique } from "./list_unique.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_reader_words_guessed(bible_folder) {
  "$plain bible_folder";
  "Every word of one bible that the reading has no answer for and so sounds out from its spelling, each with the sounds it guessed.";
  "★ THESE ARE THE ONLY WORDS THAT CAN BE SAID WRONG WITHOUT ANYBODY HAVING WRITTEN THE WRONG ANSWER DOWN. Every other word is answered by the reader's own dictionary, the Bible names filed on top of it, or the hand list, so a fault there is a fault in a written entry and is mended by mending the entry. A guessed word has no entry to mend - so this is the list that needs a source, or an ear, before the recordings can be called right.";
  "The words are taken as written, capitals and all, because a name and an ordinary word can share a spelling and the reading files them apart.";
  arguments_assert(arguments, 1);
  let written = await bible_words_written(bible_folder);
  let words = list_unique(written);
  let args = {
    words,
  };
  let reported = await py_script_speech_json_report(
    fn_name("bible_reader_words_guessed"),
    args,
  );
  return reported;
}
