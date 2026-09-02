import { property_get } from "./property_get.mjs";
import { urdu_glued_words_roman_verdicts_joined_glued } from "./urdu_glued_words_roman_verdicts_joined_glued.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { text_split } from "./text_split.mjs";
import { lists_cartesian_product } from "./lists_cartesian_product.mjs";
import { list_map } from "./list_map.mjs";
import { urdu_glued_words_control_verdict } from "./urdu_glued_words_control_verdict.mjs";
export async function urdu_glued_words_roman_verdicts() {
  "What the Latin-alphabet printing of the second Urdu bible says about every ruling the Urdu-script printing of it already found something to say about, kept as the word against the spellings that were looked for, how often each side stands, and what that amounts to.";
  "It answers a question the first control cannot. When one translation writes a space and another does not, that can be two publishing houses following two habits, and no count will tell you which. Here there are not two translations: there is one translation printed in two alphabets, so a difference between the printings is a difference of typesetting and never a difference of wording. Where the Latin printing runs the pieces together, the space in the Urdu printing is a habit; where the Latin printing writes the space too, the boundary is real.";
  "It asks the second control about the very spelling the first one was asked about, rather than working one out for itself. The proposal is the one the detector offered and, for a ruling to leave a word alone, the one the ruler turned down; two controls asked about two different spellings would not be two opinions about anything.";
  "★ EVERY LATIN SPELLING COMES OUT OF A PUBLISHED LIST OF URDU WORDS AND NOT OUT OF THE BIBLE BEING QUESTIONED. It used to work the other way: the spellings were written by hand and then confirmed by reading the Latin printing itself, which made each one a small thing taken out of a text published under terms that forbid taking things out of it. Nothing here now knows anything about that printing except how many times a spelling stands in it, and a count of a string somebody else wrote is a fact about the string.";
  "★ IT LOOKS FOR SEVERAL SPELLINGS AND ADDS THEM UP, BECAUSE THERE IS NO SUCH THING AS THE SPELLING. Urdu leaves its short vowels out and the Latin alphabet does not, so one word is honestly written several ways and a printing that uses the second-commonest of them would read, to a reading that only looked for the commonest, as a printing that never uses the word at all. That is silence manufactured out of a guess, and silence is the one answer this must never invent.";
  "★ THE JOINED-UP SPELLING IS TAKEN FROM THE LIST WHEN THE LIST HAS THE WHOLE WORD, AND BUILT OUT OF THE PIECES ONLY WHEN IT DOES NOT, AND THAT ORDER IS THE WHOLE GUARD AGAINST A BAD CUT. Vowels move when pieces join, so a word wrongly cut builds into a spelling that stands nowhere - and standing nowhere reads exactly like a printing that writes the space. The list settles it without anybody reading a Bible: a word it lists is a word, and it gives the spelling; a word it does not list is not a word people write, which is what makes building one out of the pieces sound.";
  "Whether the list holds the whole word is handed back rather than only used, because it is evidence in its own right and it is evidence about the ruling rather than about the printing. A ruling to put a space inside something a dictionary calls a word is a ruling worth looking at twice, whatever any Bible does with it.";
  "The spaced spelling is always built out of the pieces, and that is sound for the opposite reason: each piece there is a whole word standing on its own, spelled the way it is spelled when it stands on its own.";
  "A word with a piece the list has never heard of is left out entirely rather than answered. It then has one opinion about it instead of two, which is honest, where a guessed spelling would have given it two opinions one of which was invented.";
  "Every count is remembered by the spelling it was made for, because the pieces repeat and the spellings of the pieces repeat with them. The ending that makes a verb future turns up in dozens of these words, and every one of them would otherwise scan a whole Bible for it again.";
  "Whether a ruling asked for the space is read straight off the list of rulings rather than asked for by name, because most of the words here are not on it. Asking for a name that is not there is an error and would stop the whole reading at the first ruling to leave a word alone.";
  arguments_assert(arguments, 0);
  let r2 = await urdu_glued_words_roman_verdicts_joined_glued();
  let joined_glued = property_get(r2, "joined_glued");
  let joined_apart = property_get(r2, "joined_apart");
  let choices_of = property_get(r2, "choices_of");
  let spellings_of = property_get(r2, "spellings_of");
  let occurrences = property_get(r2, "occurrences");
  let split = property_get(r2, "split");
  let script_verdicts = property_get(r2, "script_verdicts");
  let control = property_get(r2, "control");
  let verdicts = {};
  for (let word of object_property_names(script_verdicts)) {
    let spaced = property_path_get_2(script_verdicts, word, "spaced");
    let unproposed = equal(spaced, null);
    if (unproposed) {
      continue;
    }
    let pieces = text_split(spaced, " ");
    let choices = choices_of(pieces);
    let unspelled = equal(choices, null);
    if (unspelled) {
      continue;
    }
    let combinations = lists_cartesian_product(choices);
    let apart_texts = list_map(combinations, joined_apart);
    let word_spellings = spellings_of(word);
    let unlisted = equal(word_spellings, null);
    let listed = not(unlisted);
    let glued_texts = word_spellings;
    if (unlisted) {
      glued_texts = list_map(combinations, joined_glued);
    }
    let apart = occurrences(apart_texts);
    let glued = occurrences(glued_texts);
    let spacing_ruled = split[word];
    let unruled = equal(spacing_ruled, undefined);
    let spacing_wanted = not(unruled);
    let verdict = null;
    if (spacing_wanted) {
      verdict = urdu_glued_words_control_verdict(apart, glued);
    }
    let keeping = not(spacing_wanted);
    if (keeping) {
      verdict = urdu_glued_words_control_verdict(glued, apart);
    }
    let judged = {
      word,
      roman: glued_texts,
      roman_spaced: apart_texts,
      listed,
      glued,
      apart,
      verdict,
    };
    verdicts[word] = judged;
  }
  let r = {
    control,
    verdicts,
  };
  return r;
}
