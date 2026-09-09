import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { text_letters_is } from "./text_letters_is.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_lower_is } from "./text_lower_is.mjs";
import { not } from "./not.mjs";
export function text_word_junk_why_or_null(word) {
  arguments_assert(arguments, 1);
  ("$plain word");
  ("Why one word of English writing cannot be a word at all, or nothing if there is no reason - the three shapes that a marked-up file leaves behind and a language does not make.");
  ("★ IT ASKS NOTHING OUTSIDE THE WORD IN FRONT OF IT, AND THAT IS THE WHOLE VALUE OF IT. Every other check on this shelf sets one publication beside another, and a comparison can only ever see where the two differ - a fault they both inherited from the material behind them reads as perfect agreement, which is exactly how three stray letters sat unseen in Genesis and Acts while the same three were caught in Luke. This has no second source to be blind with. It reads the word and says whether English makes words that shape.");
  ("THE THREE SHAPES ARE NOT GUESSES ABOUT SPELLING. No English word writes one letter three times running - not one, so a run of three is somebody's placeholder or a mark left in. A comma, colon or semicolon with a letter hard against it is a space that was lost, and the two words on either side arrive welded into one no dictionary holds. A small letter with a capital hard against it is the same loss where the second word was a name or opened a sentence.");
  ("IT SAYS WHY RATHER THAN YES OR NO, because a caller has to write down what it found and read it back later, and a bare yes leaves whoever reads the record guessing which of the three it was.");
  ("A WORD HERE IS WHATEVER STANDS BETWEEN TWO SPACES, punctuation and all. Stripping the punctuation off first would throw away two of the three shapes, which are made of punctuation standing where it should not.");
  let joiners = [",", ":", ";"];
  let characters = text_split_empty(word);
  let previous = "";
  let previous_second = "";
  for (let character of characters) {
    let lettered = text_letters_is(character);
    let same_as_before = equal(character, previous);
    let same_again = equal(previous, previous_second);
    let running = and(same_as_before, same_again);
    let tripled = and(running, lettered);
    if (tripled) {
      let r =
        "the letter " +
        character +
        " stands three times running in " +
        word +
        ", and no English word does that";
      return r;
    }
    let joined = list_includes(joiners, previous);
    let welded_at_mark = and(joined, lettered);
    if (welded_at_mark) {
      let r2 =
        "a " +
        previous +
        " has a letter hard against it in " +
        word +
        ", so a space was lost and two words arrive as one";
      return r2;
    }
    let previous_lettered = text_letters_is(previous);
    let previous_small = text_lower_is(previous);
    let previous_small_letter = and(previous_lettered, previous_small);
    let b = text_lower_is(character);
    let right = not(b);
    let capital = and(lettered, right);
    let welded_at_capital = and(previous_small_letter, capital);
    if (welded_at_capital) {
      let r3 =
        "a capital " +
        character +
        " stands hard against a small letter in " +
        word +
        ", so a space was lost and two words arrive as one";
      return r3;
    }
    previous_second = previous;
    previous = character;
  }
  return null;
}
