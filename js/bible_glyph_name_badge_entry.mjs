import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
export function bible_glyph_name_badge_entry(word) {
  "The chapter entry that marks one proper name with the name badge and keeps its letters beside it.";
  "$plain word";
  "the word is the name as the chapter spells it, capital letter and trailing punctuation and all. It is written back out unchanged behind the badge and nothing about it runs.";
  "THE BADGE AND THE LETTERS ARE ONE ENTRY AND THE SHORTHAND FOR IT IS SPELLED IN ONE PLACE. Two writers put this entry into chapters - one over a whole chapter, one over a single verse - and a badge spelled differently by either of them is a mark the page draws and no reading can find. The shorthand opens a picture group with a dollar and closes it with the next one, so what follows the second dollar is the plain English that stays.";
  arguments_assert(arguments, 1);
  let r = text_combine("$proper_name$", word);
  return r;
}
