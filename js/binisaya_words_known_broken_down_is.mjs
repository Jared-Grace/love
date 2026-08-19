import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function binisaya_words_known_broken_down_is(known, word) {
  "Whether the dictionary took one Cebuano word apart into a root and the affixes put on it.";
  "This is not the same question as whether the word is a word, and it must not be read as though it were. The site takes apart what is built out of something and says nothing about a root, so gugma - the commonest noun in the language - carries no breakdown at all, and two thousand four hundred and forty one of the ten thousand five hundred and twenty two answers held are of that shape. Every one of them is a word.";
  "It is worth asking where the word is one the answer is owed for. A named root that the dictionary's own root sits inside is built out of something by construction, so the site would have taken it apart had it carried it - and there the silence does mean the letters were got from nowhere. That is how bulah, given as the root of bulahan, and labih, given as the root of labihan, were told apart from the thirty-two beside them that turned out to be ordinary words named one layer up.";
  "A word nobody has asked about yet answers the same as a word the site had nothing to take apart. The caller that wants those told apart wants the asking done, not a third answer.";
  arguments_assert(arguments, 2);
  let held = binisaya_words_known_get(known, word);
  let missing = null_is(held);
  if (missing) {
    return false;
  }
  let analysed = property_get(held, "analysed");
  return analysed;
}
