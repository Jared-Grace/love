import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
export function bible_interlinear_verse_gloss_text(verse) {
  "$plain verse";
  "the verse is one row of the interlinear, holding its words and its English. It is text to read and nothing that runs.";
  "One interlinear verse as a single run of English, in the order the English was worded for.";
  arguments_assert(arguments, 1);
  ("WHAT IS PRINTED UNDER THE WORDS IS NOT A GLOSS COLUMN. The column is headed BSB version, and it is the Berean Standard Bible cut into chunks and hung on the original words - so a chunk says what it says because of where ENGLISH puts it, and the table keeps a second number saying where that is. That is the number the words are put back in order by.");
  ("THE ORIGINAL'S ORDER WAS TRIED FIRST AND IT CANNOT WORK, and the reason is not that it read choppily. Genesis 1:3 is the proof: the verb and he said is glossed said, and its leading and is filed under the next word as the chunk And God - so read in the order the Hebrew stands in, the verse comes out as said And God, which is not the English order and is not the Hebrew order either. The chunks straddle the words they hang on, so no arrangement of them is a word-for-word line; there are only two honest outputs, the English these chunks were cut from, and a gloss column this repo writes for itself.");
  ("NOTHING IS LOST BY PUTTING THEM BACK. The band is a whole line under a whole line rather than a word standing under a word, so nothing on the page ever showed which English chunk stood over which picture - the order the chunks were left in bought no alignment and cost the reader the sentence.");
  ("THE TEXT MAY BE SHOWN TO ANYBODY. What comes out this way is the Berean wording, which this repo already publishes as one of its own translations and reads as public domain off the publisher's own licence page.");
  ("IT IS A READING AND NO LONGER A BUILDING, and that is deliberate. The line used to be assembled here out of the verse's WORDS, which is one drop too late: a word is what survives the two filters that keep the original text public and wordless rows out of it, and both of those take a row's English away with the original. So the line is built once, from the rows, by ",
    fn_name("bible_interlinear_rows_english_text"),
    ", and this is the one place that knows what the verse calls it.");
  let text = property_get(verse, "english");
  return text;
}
