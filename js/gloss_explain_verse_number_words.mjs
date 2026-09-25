import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_clause_marks } from "./gloss_explain_clause_marks.mjs";
import { text_split_multiple } from "./text_split_multiple.mjs";
import { gloss_explain_verse_numbers } from "./gloss_explain_verse_numbers.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_apostrophe_quoted_runs } from "./text_apostrophe_quoted_runs.mjs";
import { gloss_explain_clause_claim_word_or_null } from "./gloss_explain_clause_claim_word_or_null.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_unique } from "./list_unique.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
export function gloss_explain_verse_number_words(explain, verse_numbers) {
  "Every verse of its own chapter that one word explanation names, beside the word that explanation is claiming stands there: the empty text where the claim is about the word being explained, and nothing at all where the reading cannot tell.";
  "THE READING NEXT DOOR ANSWERS WHERE AND THIS ONE ANSWERS WHAT, AND THE CHECK NEEDS BOTH OR IT ASKS THE WRONG VERSE THE WRONG QUESTION. A number by itself cannot carry a word with it, which is written down as owed in the reading that finds the numbers; this is the paying of it. Measured on 2026-09-25 over the Urdu store's seven hundred and two standing wrong claims, four hundred and ninety-three were about the word being explained, a hundred and thirty-three were about some other word the sentence quoted, and seventy-six could not be told - four of those because the thing quoted was a piece of a word rather than a word.";
  "THE EXPLANATION IS CUT INTO THOUGHTS AND EACH THOUGHT IS READ ON ITS OWN, WHICH COSTS NOTHING AND IS WHAT MAKES THE ANSWER RIGHT. It costs nothing because every mark that ends a thought already ends a verse number's run in the reading being called: a full stop is not a number, not a comma and not the joining word, so the run stops there whether or not anybody cut the text first. So the numbers found thought by thought are exactly the numbers found over the whole, and the cut only decides which quoted words stand beside which number.";
  "A NUMBER NAMED TWICE WITH TWO DIFFERENT ANSWERS IS ANSWERED WITH NOTHING, RATHER THAN WITH WHICHEVER THOUGHT CAME LAST. An explanation may say the same verse twice, once about its own word and once about another, and a store built by writing each answer over the one before it would keep whichever the writer happened to put second - a difference no reader could see and no one would think to look for. Where the two thoughts agree the answer is what they agree on, and where they do not the number is dropped unchecked.";
  "What comes back is keyed by the verse number, so the caller who already has a list of named verses can ask about each one without walking anything.";
  "$plain explain";
  "$plain verse_numbers";
  "the first is the sentence somebody wrote about a word, the second is the numbers that chapter's verses actually carry, and neither names anything that runs.";
  arguments_assert(arguments, 2);
  let marks = gloss_explain_clause_marks();
  let clauses = text_split_multiple(explain, marks);
  let answers = {};
  function clause_read(clause) {
    let numbers = gloss_explain_verse_numbers(clause, verse_numbers);
    let none = list_empty_is(numbers);
    if (none) {
      return;
    }
    let quoted = text_apostrophe_quoted_runs(clause);
    let said = gloss_explain_clause_claim_word_or_null(quoted);
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
  let numbers = object_property_names(answers);
  function number_settle(number) {
    let given = property_get_or_null(answers, number);
    let once = list_unique(given);
    let left = list_size(once);
    let agreed = equal(left, 1);
    if (agreed) {
      let only = list_first(once);
      property_set(about, number, only);
      return;
    }
    property_set(about, number, null);
  }
  each(numbers, number_settle);
  return about;
}
