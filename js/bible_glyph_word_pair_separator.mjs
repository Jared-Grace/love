import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_word_edge_picture_is } from "./bible_glyph_word_edge_picture_is.mjs";
import { bible_glyph_word_separator } from "./bible_glyph_word_separator.mjs";
import { text_from_code_number } from "./text_from_code_number.mjs";
export function bible_glyph_word_pair_separator(
  word_before,
  word_after,
  lookup,
) {
  arguments_assert(arguments, 3);
  ("$plain word_before");
  ("$plain word_after");
  ("$plain lookup");
  ("the two words are neighbours in one verse and the lookup is the table of what each glyph name draws as. All three are data to read and none of them runs.");
  ("The character that goes between two neighbouring words of the picture Bible: the wide one where the pair could be misread as a single word, and an ordinary space everywhere else.");
  ("THE WIDE GAP IS A MARK, AND A MARK SPENT EVERYWHERE MEANS NOTHING. ",
    fn_name("bible_glyph_word_separator"),
    " is an em space carrying the entire punctuation of this writing system - pictures touching are one word, pictures apart are two - and it was until now written between every pair of words in a verse. Of thirteen thousand one hundred and seventy seven gaps in the written chapters, seven hundred and thirty five have a picture on both sides. The other twelve thousand four hundred and forty two were being told apart by something that had nothing to tell.");
  ("THE PAIR THAT NEEDS IT IS A WORD ENDING IN A PICTURE FOLLOWED BY A WORD STARTING WITH ONE. A letter, a comma or a semicolon at either edge separates the two by itself, and no reader has ever had to be taught that a word and a picture are different things.");
  ("WHAT COUNTS AS A PICTURE IS ASKED OF THE TABLE AND NOT OF THE VERSE, which is the part that is easy to get wrong. A glyph can be fully seated and fully authored and still draw as its own English name, because no emoji and no artwork exists for it yet; ",
    fn_name("bible_glyph_word_edge_picture_is"),
    " is what tells those apart, and without it an altar and a priest were being given a picture's width of air on both sides while printing as letters.");
  ("SO THE ENGLISH ON THE PAGE IS SET LIKE ENGLISH AGAIN. Most of what is written here is still ordinary words - the grammar this Bible has not reached yet - and a whole picture's width between every one of them made a sentence read as a list. The gap that means something is now the only wide one on the line, which is what makes it legible as a mark at all.");
  ("IT DECIDES ONE GAP AND NOT A LINE, so the two drawers ask it word pair by word pair and neither of them knows the rule. The page and the plain text have to put the same character in the same place - a reader copies a verse out of one and reads it in the other - and the only way to be sure of that is for the decision to exist once.");
  let ends = bible_glyph_word_edge_picture_is(word_before, true, lookup);
  if (ends) {
    let begins = bible_glyph_word_edge_picture_is(word_after, false, lookup);
    if (begins) {
      let wide = bible_glyph_word_separator();
      return wide;
    }
  }
  let ordinary = text_from_code_number(32);
  return ordinary;
}
