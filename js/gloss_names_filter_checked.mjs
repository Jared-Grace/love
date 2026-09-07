import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_offenders_names_declared } from "./gloss_offenders_names_declared.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { set_includes } from "./set_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { list_size } from "./list_size.mjs";
export function gloss_names_filter_checked(offenders, names_taken) {
  "The rows a vocabulary test took off the queue as names, split by whether the app's own sentence proves the word a name - and beside them the words the sentence proves that the test left on the queue.";
  "The vocabulary test asks one thing: is this word ever met in small letters anywhere in the sixty-six books. That is a claim about a body of text and not about a word, so it fails in both directions at once. An ordinary verb that only ever opened a sentence is taken off somebody's work list as a name; a real name spelled once in small letters anywhere is put back on it forever. Neither failure announces itself, because the test has nothing to check itself against.";
  "The app's explanation is that check, and it is a different kind of evidence rather than a second helping of the same kind. It is authored: somebody looked at the word and wrote that it is a name, and the sentence names which word, so nothing else can have been meant. Where the two agree the row is settled. Where they disagree the disagreement is the finding.";
  "Only one side of this is proof. A word the sentence proves is a name; a word no sentence proves is not thereby an ordinary word, because most explanations of a name never use the word name at all. So read the unproven list as the rows resting on the vocabulary test alone, never as a list of mistakes.";
  "$plain offenders";
  "$plain names_taken";
  "the first names the gathered findings, the second the rows the vocabulary test removed. Neither names anything that runs.";
  arguments_assert(arguments, 2);
  let declared = gloss_offenders_names_declared(offenders);
  function row_word(row) {
    let word = property_get(row, "word");
    return word;
  }
  let declared_words = list_map(declared, row_word);
  let declared_set = list_unique_set(declared_words);
  let taken_words = list_map(names_taken, row_word);
  let taken_set = list_unique_set(taken_words);
  function proven_is(row) {
    let word = property_get(row, "word");
    let said = set_includes(declared_set, word);
    return said;
  }
  function taken_is(row) {
    let word = property_get(row, "word");
    let took = set_includes(taken_set, word);
    return took;
  }
  let proven = list_filter(names_taken, proven_is);
  let unproven = list_filter_not(names_taken, proven_is);
  let missed = list_filter_not(declared, taken_is);
  let taken_total = list_size(names_taken);
  let declared_total = list_size(declared);
  let proven_total = list_size(proven);
  let unproven_total = list_size(unproven);
  let missed_total = list_size(missed);
  let r = {
    taken_total,
    declared_total,
    proven_total,
    unproven_total,
    missed_total,
    proven,
    unproven,
    missed,
  };
  return r;
}
