import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { fn_name } from "./fn_name.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
export async function bible_reader_words_known(words) {
  "$plain words";
  "Splits the words named into the ones the reader already had an answer for and the ones it had none for, asked of the reader before any Bible name is filed on top of it.";
  "★ IT SEPARATES A GAP BEING FILLED FROM AN ANSWER BEING OVERWRITTEN, WHICH ARE WORTH OPPOSITE AMOUNTS. A Bible name filed where the reader had nothing can only improve on letters sounded out one at a time. The same name filed over an answer the reader already had is a claim to know better than the standard dictionary, and that claim has to be right word by word rather than in general.";
  "★ THE READER IS ASKED BEFORE THE FILING, WHICH IS THE ONLY MOMENT THE QUESTION EXISTS. Afterwards every Bible name is known, because filing it is what made it known, and the answer would be yes to everything.";
  "The words arrive as one comma-joined word, as every list does on a command line, and are split here rather than at the far end, where a word handed over whole is read letter by letter and quietly matches nothing.";
  arguments_assert(arguments, 1);
  let asked = text_split_comma_or_empty(words);
  let script_name = fn_name("bible_reader_words_known");
  let args = {
    words: asked,
  };
  let reported = await py_script_speech_json_report(script_name, args);
  return reported;
}
