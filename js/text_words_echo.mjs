import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function text_words_echo(first_words, second_words) {
  arguments_assert(arguments, 2);
  ("$plain first_words");
  ("$plain second_words");
  ("How much of one list of words is heard again in another, as the longest stretch the two hold the same one after the other, and how many of the first list's words turn up anywhere in the second.");
  ("THE LONGEST STRETCH IS THE ANSWER THAT MATTERS AND THE COUNT IS ONLY THE TIE-BREAK. Two sayings about one subject nearly always share a few words scattered about - God, love, life - and that is what any two sentences about that subject do. Holding four words in a row in the same order is not that: it is one of them quoting the other, which is the whole question.");
  ("IT IS HANDED WORDS ALREADY PREPARED RATHER THAN TEXT, so that the two ways of preparing them share this counting instead of each keeping a copy of it. One way lowercases, strips punctuation and drops the relations, leaving the endings on; the other folds the endings off as well. What counts as an echo must not differ between those two. Both readings ask it here. The plain one next door held a copy of this loop word for word until that copy was folded into this call, which is why the two can no longer answer differently.");
  ("It says nothing about which list came first, because it cannot: the words are the whole of the evidence and they are the same words either way.");
  let shared = 0;
  for (let word of first_words) {
    let both = list_includes(second_words, word);
    if (both) {
      shared = add(shared, 1);
    }
  }
  let run = 0;
  for (
    let start = 0;
    less_than(start, first_words.length);
    start = add(start, 1)
  ) {
    for (
      let against = 0;
      less_than(against, second_words.length);
      against = add(against, 1)
    ) {
      let length = 0;
      while (
        less_than(add(start, length), first_words.length) &&
        less_than(add(against, length), second_words.length) &&
        equal(
          first_words[add(start, length)],
          second_words[add(against, length)],
        )
      ) {
        length = add(length, 1);
      }
      let longer = greater_than(length, run);
      if (longer) {
        run = length;
      }
    }
  }
  let echo = {
    run,
    shared,
  };
  return echo;
}
