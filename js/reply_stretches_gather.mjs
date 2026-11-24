import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { list_last } from "./list_last.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
export function reply_stretches_gather(kinds, words, foreign_is) {
  "The stretches of foreign words in a message, gathered from the kind of each word: a run of words that are foreign or names, kept only when it holds at least one word that is not a name, with where it starts and ends and the words it holds.";
  arguments_assert(arguments, 3);
  let stretches = [];
  let run = [];
  function name_not_is(i) {
    let neq = not_equal(kinds[i], "name");
    return neq;
  }
  function word_at(i) {
    let word = words[i].word;
    return word;
  }
  function run_close() {
    let has_foreign = run.some(name_not_is);
    if (greater_than(run.length, 0) && has_foreign) {
      let index = list_first(run);
      let first = list_get(words, index);
      let index2 = list_last(run);
      let last = list_get(words, index2);
      let held = run.map(word_at);
      stretches.push({
        start: first.start,
        end: last.end,
        words: held,
      });
    }
    run = [];
  }
  for (let i = 0; less_than(i, words.length); i++) {
    let joins_run = foreign_is(i) || equal(kinds[i], "name");
    if (joins_run) {
      run.push(i);
    } else {
      run_close();
    }
  }
  run_close();
  return stretches;
}
