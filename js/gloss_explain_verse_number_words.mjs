import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_clause_cuts } from "./gloss_explain_clause_cuts.mjs";
import { text_split_multiple } from "./text_split_multiple.mjs";
import { gloss_explain_verse_numbers } from "./gloss_explain_verse_numbers.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_apostrophe_quoted_runs } from "./text_apostrophe_quoted_runs.mjs";
import { gloss_explain_clause_claim_word_or_null } from "./gloss_explain_clause_claim_word_or_null.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { gloss_explain_clause_mention_only_is } from "./gloss_explain_clause_mention_only_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_first } from "./list_first.mjs";
export function gloss_explain_verse_number_words(explain, verse_numbers) {
  "Every verse of its own chapter that one word explanation names, beside the word that explanation is claiming stands there: the empty text where the claim is about the word being explained, and nothing at all where the reading cannot tell.";
  "THE READING NEXT DOOR ANSWERS WHERE AND THIS ONE ANSWERS WHAT, AND THE CHECK NEEDS BOTH OR IT ASKS THE WRONG VERSE THE WRONG QUESTION. A number by itself cannot carry a word with it, which is written down as owed in the reading that finds the numbers; this is the paying of it. Measured on 2026-09-25 over the Urdu store's seven hundred and two standing wrong claims, four hundred and ninety-three were about the word being explained, a hundred and thirty-three were about some other word the sentence quoted, and seventy-six could not be told - four of those because the thing quoted was a piece of a word rather than a word.";
  "THE EXPLANATION IS CUT INTO THOUGHTS AND EACH THOUGHT IS READ ON ITS OWN, WHICH COSTS NOTHING AND IS WHAT MAKES THE ANSWER RIGHT. It costs nothing because every mark that ends a thought already ends a verse number's run in the reading being called: a full stop is not a number, not a comma and not the joining word, so the run stops there whether or not anybody cut the text first. So the numbers found thought by thought are exactly the numbers found over the whole, and the cut only decides which quoted words stand beside which number.";
  "★ A THOUGHT IS ENDED BY WHAT A WRITER SAYS AS WELL AS BY WHAT A WRITER TYPES, AND ONLY ASKING FOR THE TYPED HALF LEFT THE SAID HALF UNCUT. The word for here is the sentence turning back from the verse it named to the word in front of the reader, so every quote after it belongs to this verse and none of it to that one. The cut is now asked for whole, marks and words together, and the door that answers holds the test any new entry has to pass. Measured on 2026-09-28 in first Peter four: the word have in verse five is explained as the same verb that came in verse three, but here with 'to', and verse three stood accused of not holding a word the sentence had not claimed for it.";
  "★ A THOUGHT THAT NAMES A VERSE TO SAY WHAT HAPPENS IN IT IS NOT CLAIMING A WORD STANDS THERE, AND IT IS ONLY ASKED ABOUT WHERE NOTHING WAS QUOTED. Quoting a word is an explicit claim and is passed on whatever verb the thought uses. Quoting nothing is the reading guessing that the claim is about the word being explained, and that guess is what a sentence about the named verse falsifies - آیت ۷ میں فرشتوں کو ہَوا کہا گیا تھا، in verse seven the angels were called wind, which is true and holds no word of the entry at all. So where the guess is being made the thought is asked whether it is only a mention, and a mention contributes nothing for that number. Another thought may still answer for the same number, because the answer is settled across the whole explanation rather than here.";
  "★ MEASURED ON 2026-10-02 OVER THE FOUR HUNDRED AND FIFTY-NINE ROWS THE URDU STORE STILL STOOD ACCUSED OF, TWO HUNDRED AND TWENTY WERE OF THAT SHAPE - ROUGHLY HALF THE QUEUE, AND NOT ONE OF THEM A FAULT. Twelve were read by hand and all twelve were true sentences. The reading downstream had written the class down as known and uncaught, which is honest and still leaves a reader to sort real faults out of noise row by row forever; a recorded baseline of them looks exactly like work waiting to be done. What the cut cannot do is find a fault it never had: the thought must name its verse in a language whose claiming verbs are written down, so a store nobody has read for this shape loses nothing.";
  "A NUMBER NAMED TWICE WITH TWO DIFFERENT ANSWERS IS ANSWERED WITH NOTHING, RATHER THAN WITH WHICHEVER THOUGHT CAME LAST. An explanation may say the same verse twice, once about its own word and once about another, and a store built by writing each answer over the one before it would keep whichever the writer happened to put second - a difference no reader could see and no one would think to look for. Where the two thoughts agree the answer is what they agree on, and where they do not the number is dropped unchecked.";
  "What comes back is keyed by the verse number, so the caller who already has a list of named verses can ask about each one without walking anything.";
  "$plain explain";
  "$plain verse_numbers";
  "the first is the sentence somebody wrote about a word, the second is the numbers that chapter's verses actually carry, and neither names anything that runs.";
  arguments_assert(arguments, 2);
  let cuts = gloss_explain_clause_cuts();
  let clauses = text_split_multiple(explain, cuts);
  let answers = {};
  function clause_read(clause) {
    let numbers = gloss_explain_verse_numbers(clause, verse_numbers);
    let none = list_empty_is(numbers);
    if (none) {
      return;
    }
    let quoted = text_apostrophe_quoted_runs(clause);
    let said = gloss_explain_clause_claim_word_or_null(quoted);
    let guessed = text_empty_is(said);
    if (guessed) {
      let mention = gloss_explain_clause_mention_only_is(clause, verse_numbers);
      if (mention) {
        return;
      }
    }
    function number_read(number) {
      let already = property_get_or_null(answers, number);
      let first_is = null_is(already);
      if (first_is) {
        let started = [said];
        property_set(answers, number, started);
        return;
      }
      list_add(already, said);
    }
    each(numbers, number_read);
  }
  each(clauses, clause_read);
  let about = {};
  let settled = object_property_names(answers);
  function number_settle(number) {
    let given = property_get_or_null(answers, number);
    let once = list_unique(given);
    let agreed = list_size_equal(once, 1);
    if (agreed) {
      let only = list_first(once);
      property_set(about, number, only);
      return;
    }
    property_set(about, number, null);
  }
  each(settled, number_settle);
  return about;
}
