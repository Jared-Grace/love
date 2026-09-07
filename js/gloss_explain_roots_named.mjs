import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_explain_roots_claimed } from "./gloss_explain_roots_claimed.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { gloss_explain_roots_built_named } from "./gloss_explain_roots_built_named.mjs";
import { gloss_explain_roots_self_named } from "./gloss_explain_roots_self_named.mjs";
import { gloss_explain_roots_from_named } from "./gloss_explain_roots_from_named.mjs";
export function gloss_explain_roots_named(explain) {
  "Every root a gloss explanation names, read in any of the four wordings that can be read from the explanation alone.";
  "$plain explain";
  "the explanation is the sentence a reader sees under a word. Nothing here runs it or writes it.";
  "★ THE STRICT READER BESIDE THIS ONE ANSWERS ABOUT ONE WORDING AND WAS BEING READ AS ANSWERING ABOUT THE STORE. It matches the word root followed by a quoted word, and its own prose says so and tells a caller to fall back to a weaker test on an empty answer. Four readings built on it did not fall back, so an explanation writing it is built on 'buhat', to do names exactly the same root and was counted as naming none, and the word it named was counted there as one the store had left unexplained.";
  "The store has no one way of saying it, and that is the finding rather than a detail of this function. Measured on 2026-09-07 over its 258651 entries: 42484 say the root is 'buhat', a further 13184 say built on 'buhat', a further 10378 say 'Gibuhat' is 'buhat', and a further 2490 say means was done, from 'buhat'. That is 68536 entries naming a root, of which the strict reader saw 42484, which is under two in three.";
  "Each wording after the first was found by reading what the ones before it still called bare, and each round of that found exactly one more. Four rounds each finding one is not a list that has finished.";
  "★ THE WIDENING BOUGHT A WRONG ANSWER THE STRICT READER COULD NOT HAVE GIVEN, AND THE THREE SHAPES ARE FILTERED BECAUSE OF IT. A sentence of the shape word is X quotes X whether X is the root or the English meaning, so 'Kaniya' is 'to him' handed back to him as a root. The strict wording is immune only because a person writing a meaning does not first write the word root, and no shape carries that protection. Measured before the filter: 101 of the 26024 sightings only this widening sees held a space, and every one read was English of that kind. The space filter is a third of a percent of the widening and it is not the size of the fault. Asking which named roots are in neither the Cebuano bible nor the dictionary found 3541 sightings over 522 roots, and the top fifteen alone hold he 275 times, they 179, you 118 and we 32 - so at least 604 one-word English meanings are still being read as roots here. The rest of that list is genuine bound roots the vocabularies had simply never met, so it is a class to read rather than a filter to add.";
  "The strict wording is deliberately left unfiltered. Where somebody wrote the word root outright they said what they meant, so a spaced answer there is theirs to correct rather than this reader's to hide, and three of them stand in the store where a reading beside this one already names them.";
  "★ A FIFTH IS KNOWN AND IS DELIBERATELY NOT READ, BECAUSE IT CANNOT BE READ FROM THE EXPLANATION ALONE. It opens with the root instead of the word - 'Buhat' is to do. 'Gi-' tells it from the side of the deed - so the first quoted word is the root rather than the headword, and the only thing that tells the two apart is the headword, which this is not given. Reading it needs a function taking the word as well, and inventing one here by guessing which quoted word is which would turn a wrong guess into a claimed root. The strict reader counted 409 sightings of the reversed shape, so the size of what is left unread is known and small beside the 68536.";
  "The wordings are asked strictest first and the first answer is handed back whole, so nothing that was already read changes and no explanation turns one claim into two.";
  "A shape whose only answers are filtered away is passed over rather than returned empty, so the shapes after it are still asked. That is what a wrongly matched meaning should cost - the sentence goes on being read - and not a silent empty answer.";
  "Each of the four wordings has its own function rather than a pattern written out here, and the reason is a reader that needs to know which one answered. Given the word as well as the sentence, the third wording can have its one wrong answer settled and the other three must not be touched; a reader telling them apart by how many roots came back would filter the wrong sentences the moment two wordings returned the same number. An address cannot be confused with a count.";
  arguments_assert(arguments, 1);
  let claimed = gloss_explain_roots_claimed(explain);
  let claimed_count = list_size(claimed);
  let claimed_empty = equal(claimed_count, 0);
  if (not(claimed_empty)) {
    return claimed;
  }
  let built = gloss_explain_roots_built_named(explain);
  let built_count = list_size(built);
  let built_empty = equal(built_count, 0);
  if (not(built_empty)) {
    return built;
  }
  let self_named = gloss_explain_roots_self_named(explain);
  let self_count = list_size(self_named);
  let self_empty = equal(self_count, 0);
  if (not(self_empty)) {
    return self_named;
  }
  let from_named = gloss_explain_roots_from_named(explain);
  return from_named;
}
