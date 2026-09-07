import { arguments_assert } from "./arguments_assert.mjs";
import { text_punctuation_apostrophe_kept_removed } from "./text_punctuation_apostrophe_kept_removed.mjs";
import { text_includes } from "./text_includes.mjs";
export function text_apostrophe_inside_word_is(t) {
  "Whether an apostrophe in this text stands inside a word rather than at one of its ends, which is what tells a mark joining a word together apart from one opening or closing a quotation.";
  "★ THE SAME CHARACTER DOES BOTH JOBS AND ONLY ITS POSITION SAYS WHICH. Cebuano writes an enclitic joined on with an apostrophe - usa'g, siya'y, gagmay'ng - and a translator opens and closes quoted speech with the same mark. Asking only whether the text carries one at all was measured to count three thousand words as apostrophed where a search of the translation finds about forty, and every quoted word then dragged its own unrelated pieces into the answer behind it.";
  "The judgment is not made here. The word is handed to the reader that already knows this difference, which turns the curly apostrophe into the plain one and drops the ones standing at either end, and whatever it leaves behind is by that reader's own definition a mark inside a word.";
  "$plain t";
  arguments_assert(arguments, 1);
  let bare = text_punctuation_apostrophe_kept_removed(t);
  let inside = text_includes(bare, "'");
  return inside;
}
