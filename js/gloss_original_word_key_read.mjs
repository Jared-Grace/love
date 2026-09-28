import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_punctuation_dash_kept_split } from "./text_punctuation_dash_kept_split.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { list_copy } from "./list_copy.mjs";
export function gloss_original_word_key_read(strongs) {
  "The reader that keys the Hebrew and Greek words of a gloss store by every dictionary entry their shape could belong to, so that two forms of one word are met as one.";
  "$plain strongs";
  "This is the original-language answer to the question the Cebuano and Urdu stores answered for themselves. Cebuano folds capitals and matches spellings, which is enough for a language whose words barely move; Urdu asks for the English root, because the words that store teaches are English ones. Hebrew and Greek words change their ending almost every time they are used, so neither of those two answers reaches them.";
  "★ THE WORD IS CUT THE WAY A VERSE IS CUT BEFORE ANYTHING IS DECIDED ABOUT IT, SO THAT THE TWO SIDES OF A QUESTION ARE SPELLED THE SAME WAY. A word taken from an explanation arrives as the store wrote it, marks and all - the stop at the end of a verse is a letter of the spelling there. A word taken from a verse arrives already cut out of that verse, and the cutting threw those marks away. Left alone, the same word asked from the two sides came back as two different keys, and the check that used them said a verse-final word was unrelated to itself.";
  "A spelling the interlinear knows no number for is keyed by the cut spelling, folded. That is nearly what the store did before this reader existed, and it is the only fallback both sides can reach: keying an unknown word by how the explanation wrote it would put the marks back into the key and split the two sides again exactly where nothing else is known about the word.";
  "A word that is nothing but marks cuts down to nothing, and then it comes back with no keys at all rather than with one empty key. There is nothing here to key, and a list can say that where a single answer had to say it in a value that also reads as a key.";
  "★ SEVERAL KEYS COME BACK, NOT ONE, BECAUSE ONE SHAPE CAN HONESTLY BELONG TO TWO ENTRIES. Joshua eleven says the northern army was chased as far as the valley of Mizpeh in verse eight and that the same valley is named in verse seventeen, and it is, with the one letter meaning in written onto the front. Both words are entry one thousand two hundred and thirty-seven in the interlinear. Keyed by one number apiece the second was given one thousand two hundred and thirty-six, an Aramaic word of the same shape, so the two never met and the check called a true sentence false. Asked for every entry the shape could be, they meet, and no word is welded to anything it does not share an entry with.";
  "A number and a folded spelling can never be taken for each other, because one is written in digits and the other in Hebrew or Greek letters, so the two kinds of key share no answer.";
  arguments_assert(arguments, 1);
  function spelling_keys(text) {
    let nothing = text_empty_is(text);
    if (nothing) {
      let none = [];
      return none;
    }
    let one = [text];
    return one;
  }
  function keys_read(word) {
    let folded = text_lower_to(word);
    let numbers = property_get_or_null(strongs, folded);
    if (null_is(numbers)) {
      let parts = text_punctuation_dash_kept_split(folded);
      let bare = list_get_or_null(parts, 0);
      if (null_is(bare)) {
        let itself = spelling_keys(folded);
        return itself;
      }
      let cut = property_get_or_null(strongs, bare);
      if (null_is(cut)) {
        let spelled = spelling_keys(bare);
        return spelled;
      }
      let met = list_copy(cut);
      return met;
    }
    let known = list_copy(numbers);
    return known;
  }
  return keys_read;
}
