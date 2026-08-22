import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { word_picture_wordings } from "./word_picture_wordings.mjs";
import { property_get } from "./property_get.mjs";
import { error_json } from "./error_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
export function word_picture_wording(word) {
  "$plain word";
  "What to draw for one taught word, refusing by name if that word is not one the game draws.";
  "IT REFUSES WITH THE WHOLE LIST OF WORDS THAT DO HAVE ONE, because the two ways to arrive here are a misspelling and a word that was left out on purpose, and the list tells those apart at a glance. Answering with nothing would have both look the same, and the caller would go on to draw a picture from an empty wording.";
  let wordings = word_picture_wordings();
  let wording = property_get(wordings, word);
  if (equal(wording, undefined)) {
    error_json({
      word,
      drawn: object_property_names(wordings),
      hint: text_combine_multiple([
        "this taught word has no picture; either it is misspelled, or it names something a picture cannot show and ",
        fn_name("word_picture_wordings"),
        " says why",
      ]),
      f_name: fn_name("word_picture_wording"),
    });
  }
  return wording;
}
