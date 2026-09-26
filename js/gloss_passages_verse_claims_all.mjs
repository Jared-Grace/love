import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_explain_verse_number_words } from "./gloss_explain_verse_number_words.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { object_property_names_numbers_sorted } from "./object_property_names_numbers_sorted.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { gloss_passages_entries_collect_generic } from "./gloss_passages_entries_collect_generic.mjs";
export function gloss_passages_verse_claims_all(
  passages,
  text_index,
  word_key_read,
) {
  "Every verse a word explanation in a chapter names, the word that explanation says stands there, whether or not the verse holds it, and beside each one every verse of the chapter that does.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "The reading beside this one keeps only the claims that come back wrong, which is the half worth mending. This one keeps them all, and that is what gives the wrong ones a denominator. Six wrong claims is a store in good order if two hundred were made and a detector that has quietly stopped firing if seven were.";
  "Each row says whether the named verse held a related word rather than being sorted into two lists here. A caller wanting one half asks for that half in one line, and a caller wanting the proportion needs both halves side by side and would otherwise have to walk twice.";
  "A claim that comes back not held is a report and not a verdict, for the same reason it is there: an explanation may name a verse to say what happens in it rather than to say the word stands in it. The wording that made the row travels with it so a reader can tell the two apart.";
  "Nothing is written. The passages are read as they were handed over.";
  "★ WHICH WORD THE CLAIM IS ABOUT IS ASKED BEFORE ANY VERSE IS ASKED ANYTHING, BECAUSE THE VERSE IS ONLY EVER ASKED ABOUT ONE WORD AND IT WAS THE WRONG ONE. An explanation names a verse for three different reasons and only one of them is a claim about the word being explained. In verse one came 'no' is a claim about a different word, quoted right there. The start 'under-' stood alone in verse nineteen is a claim about a piece of a word, which no whole-word check can be asked. And in verse thirty-nine people came having heard her is a claim about what happened, not about any word at all. Measured on 2026-09-25 over the Urdu store, of seven hundred and two rows standing accused, a hundred and thirty-three named another word and seventy-six could not be told apart - two hundred and nine accusations, every one of them made against a sentence that had said something else.";
  "A CLAIM THE READING CANNOT PIN TO A WORD IS DROPPED RATHER THAN CHECKED AGAINST A GUESS, and that is the one place this loses power on purpose. A thought quoting two words says something about each and the number belongs to one of them; picking the nearer would be right about half the time and would never say which half. So the number leaves without a row, and nobody is accused over a sentence nobody has read.";
  "★ A QUOTED WORD THAT STANDS NOWHERE IN THE WHOLE CHAPTER WAS NEVER A POINTER AT THE TEXT, SO IT IS DROPPED RATHER THAN REPORTED. The explanations are written in the reader's own language and quote words in it constantly - an Urdu rendering, an English gloss beside a Greek word. Those quotes wear exactly the same apostrophes as a real pointer, and nothing in their shape tells them apart. What does tell them apart is that a pointer names a word the chapter actually contains. Measured over the Urdu store, reading every quote as a pointer manufactured a hundred and twenty-six accusations, and the first one read was against a sentence that was simply correct.";
  "THE PRICE OF THAT IS A FAULT THIS CAN NO LONGER SEE: a sentence claiming some word stood in verse four when that word is absent from the chapter altogether is wrong, and goes unreported. It is the same trade as the one above and made for the same reason - a check that cannot tell a gloss from a pointer reports mostly noise, and a queue of mostly noise is not read at all.";
  "★ WHERE THE WORD ACTUALLY STANDS TRAVELS WITH EVERY ROW, BECAUSE A WRONG CLAIM IS ONLY HALF A FINDING WITHOUT IT. Told that verse five does not hold the word, a person mending has learnt nothing about what to write instead, and has to open the chapter and read all of it. Told as well that the word stands in verse six and nowhere else, the mend is the one thing it can be. Measured on 2026-09-25 over the Urdu store: eleven thousand eight hundred verse claims, seven hundred and two of them wrong - a queue that is unreadable one file at a time and short enough to settle in an afternoon with the answer beside the question.";
  "WHERE THE WORD STANDS IS NOW WORKED OUT PER CLAIM RATHER THAN ONCE PER EXPLANATION, WHICH IS WHAT THE CLAIMED WORD COSTS. A sentence explaining one word and claiming another needs the other word's verses beside it, or the mend it suggests is the mend for a word nobody is arguing about. The key each claim is checked with is read off the claimed word the same way the entry's own key was read off the entry's own word, so a claim about the word being explained comes out exactly where it always did.";
  "The list of holding verses is never empty on a row that comes back, because an empty one is now what makes the claim leave. It used to be the loudest row of the lot - the explanation naming a verse for a word the chapter never uses - and it stopped being readable the moment claims could be about a word other than the one being explained, since a quoted gloss in the reader's own language is absent from the chapter for an innocent reason and a wrong word is absent for a guilty one, and the list alone cannot say which.";
  "The verses come back as numbers in counting order rather than in the order the record happened to fill, because a reader is going to say the word moved one verse along, and that is a thing you can only see when they are counted.";
  "★ THE VERSES NAMED ARE THE ONES THE WORD READING ITSELF FOUND, RATHER THAN A SECOND READING OF THE SAME SENTENCE. Both answers are the same set - the word reading cuts the explanation at its punctuation and every mark it cuts on already ended a number's run in the reading underneath, so cutting cannot join two numbers or split one. Being the same set is exactly why only one of them should be asked. Two spellings of one question do not break when they part company; they disagree quietly, and the loop then walks a number the word reading never pinned or skips one it did.";
  arguments_assert(arguments, 3);
  function entry_read(context) {
    let explain = property_get(context, "explain");
    let verse_numbers = property_get(context, "verse_numbers");
    let verse_keys = property_get(context, "verse_keys");
    let verses_key = property_get(context, "verses_key");
    let word = property_get(context, "word");
    let about = gloss_explain_verse_number_words(explain, verse_numbers);
    let named = object_property_names(about);
    let chapter_verses = object_property_names_numbers_sorted(verse_keys);
    let claims = [];
    function named_read(verse_named) {
      let claimed = property_get_or_null(about, verse_named);
      let untold = null_is(claimed);
      if (untold) {
        return;
      }
      let own = text_empty_is(claimed);
      let claimed_word = claimed;
      if (own) {
        claimed_word = word;
      }
      let claimed_key = word_key_read(claimed_word);
      function verse_holds_is(verse_number) {
        let keys = property_get_or_null(verse_keys, verse_number);
        let holds = list_includes(keys, claimed_key);
        return holds;
      }
      let verses_held = list_filter(chapter_verses, verse_holds_is);
      let nowhere = list_empty_is(verses_held);
      if (nowhere) {
        return;
      }
      let keys = property_get_or_null(verse_keys, verse_named);
      let held = list_includes(keys, claimed_key);
      let claim = {
        verses_key,
        word,
        claimed_word,
        verse_named,
        held,
        verses_held,
        explain,
      };
      list_add(claims, claim);
    }
    each(named, named_read);
    return claims;
  }
  let found = gloss_passages_entries_collect_generic(
    passages,
    text_index,
    word_key_read,
    entry_read,
  );
  return found;
}
