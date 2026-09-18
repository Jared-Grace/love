import { arguments_assert } from "./arguments_assert.mjs";
import { bible_gloss_markup_dropped } from "./bible_gloss_markup_dropped.mjs";
import { equal } from "./equal.mjs";
import { bible_gloss_brackets_dropped } from "./bible_gloss_brackets_dropped.mjs";
export function bible_glyph_gloss_supplied_dropped(gloss) {
  arguments_assert(arguments, 1);
  ("$plain gloss");
  ("the gloss is one word's English chunk as the interlinear cut it. It is text to read and nothing that runs.");
  ("One English chunk with the words the translators SUPPLIED taken out of it: the square brackets and the braces mark English that stands for no word in the original, so a picture line that keeps them shows the reader a word the writer never wrote.");
  ("A BRACE SAYS THE SAME THING A SQUARE BRACKET DOES and is dropped the same way. The interlinear prints both, and the sister function that only takes the marks off treats them as one class in so many words; the stars  as well  at Genesis 1:16 and  have  at John 1:16 are supplied exactly as  the  is. Reading the two marks differently would have let half of one class through while the other half was stopped, and a reader would meet a supplied word in some verses and not in others with nothing on the page saying why.");
  ("THE PICTURE BIBLE IS LITERAL, so a supplied word is not a small untidiness - it is the one thing the edition promises not to do. John 1:1 has no article in front of beginning, and the interlinear's [the] beginning puts one there; a reader who is shown that can never see the absence, and the absence is the reading.");
  ("A CHUNK THAT IS SUPPLIED ALL THROUGH KEEPS ITS WORDS, with only the brackets taken off. The brackets say which English answers to no original word; when every word of the chunk is bracketed there is still an original word underneath it, and dropping the whole chunk would delete that word from the verse rather than the addition from the chunk. The brackets are the mark of an addition only while something unbracketed stands beside them.");
  ("THE OPENING MARK AND THE CLOSING MARK ARE NOT ALWAYS THE SAME ONE. Fifteen chunks in the tables open with a brace and close with a square bracket or the other way about - He did this so that at Joshua 4:24, Amaziah at 2 Kings 14:19, Baruch at Jeremiah 45:4, five more in the Gospels and Acts. They are typing slips in the source and they mean exactly what a matched pair means, so a span is read from ANY opener to the next closer rather than from one mark to its twin. Read strictly, each of those would have printed its marks into scripture.");
  ("A MARK LEFT OVER AFTER THAT KEEPS THE WHOLE CHUNK AND LOSES ONLY THE MARKS. The interlinear cuts one English sentence into chunks and a supplied span may open in one chunk and close in a later one, so a chunk holding one lone mark is not a chunk to throw away - nothing in it says how far the span reached. The Israelites learned at Joshua 9:16 and could hold at 2 Kings 4:39 are that shape. Keeping the words costs the reader the knowledge that some of them were supplied; dropping them would cost the reader the verse.");
  ("THE PAGE MARKUP COMES OUT BEFORE THE SPANS DO. A tag sits inside a supplied span in one chunk of Deuteronomy 32:43 and outside it in the next, so cutting the spans first would carry one of them off and leave the other standing in the verse.");
  let text = bible_gloss_markup_dropped(gloss);
  text = text.replaceAll(/[\[{][^\[\]{}]*[\]}]/g, " ");
  let unpaired = /[\[\]{}]/.test(text);
  text = text.replaceAll(/\s+/g, " ");
  text = text.trim();
  let emptied = equal(text, "");
  let kept = bible_gloss_brackets_dropped(gloss);
  let r = emptied || unpaired ? kept : text;
  return r;
}
