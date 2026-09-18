import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { bible_gloss_brackets_dropped } from "./bible_gloss_brackets_dropped.mjs";
export function bible_glyph_gloss_supplied_dropped(gloss) {
  arguments_assert(arguments, 1);
  ("$plain gloss");
  ("the gloss is one word's English chunk as the interlinear cut it. It is text to read and nothing that runs.");
  ("One English chunk with the words the translators SUPPLIED taken out of it: the square brackets mark English that stands for no word in the original, so a picture line that keeps them shows the reader a word the writer never wrote.");
  ("THE PICTURE BIBLE IS LITERAL, so a supplied word is not a small untidiness - it is the one thing the edition promises not to do. John 1:1 has no article in front of beginning, and the interlinear's [the] beginning puts one there; a reader who is shown that can never see the absence, and the absence is the reading.");
  ("A CHUNK THAT IS SUPPLIED ALL THROUGH KEEPS ITS WORDS, with only the brackets taken off. The brackets say which English answers to no original word; when every word of the chunk is bracketed there is still an original word underneath it, and dropping the whole chunk would delete that word from the verse rather than the addition from the chunk. The brackets are the mark of an addition only while something unbracketed stands beside them.");
  let text = gloss.replaceAll(/\[[^\]]*\]/g, " ");
  text = text.replaceAll(/\s+/g, " ");
  text = text.trim();
  let emptied = equal(text, "");
  let kept = bible_gloss_brackets_dropped(gloss);
  let r = emptied ? kept : text;
  return r;
}
