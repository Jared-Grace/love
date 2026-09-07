import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_dictionary_echo_proven() {
  "The words where the dictionary on this disk names a root that the same dictionary, asked about that root, says is itself built from something else - so the first answer was an affixed form rather than a root, proven by nothing but the dictionary disagreeing with itself.";
  "★ THIS NEEDS NO JUDGMENT AND NO OUTSIDE SOURCE, WHICH IS WHY IT IS WORTH MORE THAN A READING OF THE SAME ROWS. Guessing which answers are affixed means naming Cebuano affixes and deciding how much of a word an ending may be, and every such rule has exceptions that only a speaker can settle. Asking the dictionary about its own answer has no rule in it at all: if it says the root of one word is a second word, and says the root of that second word is a third, then by its own account the second was never a root. A source is allowed to be incomplete, and it is not allowed to be inconsistent.";
  "The echo was found by reading ten outliers by hand and looks like a habit of the lookup rather than a scattering of mistakes - an entry reached under an inflected word can answer with that word. Ten cases cannot say how far a habit reaches. This counts it over everything the dictionary has ever answered here.";
  "Only answers where the root differs from the word are looked at. A dictionary saying a word is its own root is making a claim that may well be true, and it is a different claim from this one.";
  "Measured: 10722 words have been asked of the dictionary and kept, and in 5090 of them the root it named was also asked about. Of those, 902 - near enough one in six - are answered with a root the dictionary itself takes back further. None are circular. So the root field means the form a word came from and not the form it finally rests on, about a sixth of the time.";
  "This is not an error count and calling it one would be wrong. A word coming from matuod and matuod coming from tuod are both true; the dictionary is stopping a step short rather than pointing somewhere false. What it explains is why explanations that go further back keep reading as disagreements when they are not.";
  "Held against the claims where the store and the dictionary part company, the split falls where that reading predicts. Where the store went deeper than the dictionary, 42 per cent of the dictionary roots are ones it takes back further itself; where the store stopped shallower, none of them are, out of 43. Read carefully: the direction of that gap is partly built in, because a shorter root is nearer the end of any chain and so has less left to analyse. The size of it is still worth something - the deeper claims are largely the store being more thorough than its source, and the shallower ones have nothing of the kind behind them.";
  "Nothing is asked of the site. Every answer was fetched long ago and is read off the disk, so a word the dictionary has never been asked about is silent here rather than counted either way.";
  arguments_assert(arguments, 0);
  let known = await binisaya_words_known();
  let words = object_property_names(known);
  let asked = 0;
  let echoing = [];
  let chains = 0;
  function word_read(word) {
    let held = property_get(known, word);
    let none = null_is(held);
    if (none) {
      return;
    }
    let root = property_get(held, "root");
    let bare = equal(root, "");
    if (bare) {
      return;
    }
    let folded_word = gloss_word_folded(word);
    let folded_root = gloss_word_folded(root);
    let itself = equal(folded_word, folded_root);
    if (itself) {
      return;
    }
    let root_held = property_get_or_null(known, root);
    let unasked = null_is(root_held);
    if (unasked) {
      return;
    }
    asked = add(asked, 1);
    let deeper = property_get(root_held, "root");
    let silent = equal(deeper, "");
    if (silent) {
      return;
    }
    let folded_deeper = gloss_word_folded(deeper);
    let settled = equal(folded_root, folded_deeper);
    if (settled) {
      return;
    }
    let same_again = equal(folded_deeper, folded_word);
    if (same_again) {
      chains = add(chains, 1);
      return;
    }
    list_add(echoing, {
      word: word,
      said: root,
      under_it: deeper,
    });
  }
  each(words, word_read);
  let r = {
    dictionary_words: list_size(words),
    root_also_asked: asked,
    echoing: list_size(echoing),
    circular: chains,
    rows: echoing,
  };
  return r;
}
