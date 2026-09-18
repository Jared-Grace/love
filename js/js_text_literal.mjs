import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { subtract } from "./subtract.mjs";
import { text_split } from "./text_split.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { text_size } from "./text_size.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_replace } from "./text_replace.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
export function js_text_literal(text) {
  "Spells a piece of text as the source line a formatted JavaScript file would carry it on, quotation marks and escapes and all.";
  "$plain text";
  "the text is whatever is to be written down as a string. It is quoted and escaped and nothing about it runs.";
  "IT EXISTS BECAUSE FINDING A STRING IN A SOURCE FILE MEANS SPELLING IT THE WAY THE FILE SPELLS IT, and putting a quotation mark on each end is not that. The picture Bible chapters carry a word for every word of scripture, and a word at the end of a sentence somebody says carries the closing quotation mark with it - so the chapter's own line for it reads 'Esau.\"' in single quotes, because that is what needs no escape. A search built by adding double quotes looks for something that is not there and reports the word missing from a chapter that names it twenty times.";
  "THE RULE IS THE FORMATTER'S AND IS COPIED RATHER THAN GUESSED: whichever quotation mark the text uses less often goes on the outside, and a tie goes to the double. That is what prettier does, so a literal spelled here matches a literal already in the file, and a literal written from here survives the next formatting pass unchanged.";
  arguments_assert(arguments, 1);
  let json = json_to(text);
  let doubles = subtract(text_split(text, '"').length, 1);
  let singles = subtract(text_split(text, "'").length, 1);
  let single_outside = greater_than(doubles, singles);
  if (not(single_outside)) {
    return json;
  }
  let size = text_size(json);
  let to = subtract(size, 1);
  let inner = text_slice(json, 1, to);
  let unescaped = text_replace(inner, '\\"', '"');
  let escaped = text_replace(unescaped, "'", "\\'");
  let r = text_combine_3("'", escaped, "'");
  return r;
}
