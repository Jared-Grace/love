import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_code_operator_rank } from "./app_code_operator_rank.mjs";
import { list_map } from "./list_map.mjs";
import { list_max } from "./list_max.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_first } from "./list_first.mjs";
export function app_code_expression_step_reason(symbol, others) {
  arguments_assert(arguments, 2);
  ("The one sentence saying why this operator is the one that may be worked out next, as the pieces of a row: the operators it outranks, or the one it shares a rank with and stands to the left of, or nothing left to outrank at all.");
  ("A rule the learner can carry to the next line, rather than a fact about this one. Saying that only this part has a value on each side is true of the shape underneath the line and is not something a reader can see: shown 5 - 2 + 4, both the minus and the plus look like they have a number on each side, and the reason the minus goes first is that the two are read left to right. A telling that names what is invisible asks to be taken on trust and leaves the learner nothing to use on the next line.");
  ("Three cases and no more, whatever the line holds: something ranked below this operator still on it means the rank decides; nothing below means the two are equals and the position decides; nothing left at all means there was never a choice.");
  ("RANK DECIDES, not membership of one class. The strength test used to ask whether this operator is one of the two the repo calls strong, which is a question only about times and divide - so asked about && against ||, both fall outside that class and the answer came back that the two are equals read left to right. That is wrong, and it is the sentence the boolean lessons printed. The ranking the code printer already leans on knows the whole order, so asking it answers for every operator these lessons use. On an arithmetic line it answers exactly what the class test answered: times ranks 4 and plus ranks 3, and 4 standing above 3 is the same verdict as strong standing against not strong.");
  ("Nothing here reads the parentheses, and nothing here can: this is asked two operators at a time and a pair of marks is a fact about the line. A caller with a line in hand asks through the one that reads the marks first.");
  ("The weaker operators are named in the order the line writes them, all of them, because the rule is about this operator against every one of them - naming only the first would read as a fact about that pair.");
  ("THE EQUAL IS THE ONE NAMED, not whichever operator the line writes first. On 6 + 2 * 4 / 4 the times may go and the plus may not, and what settles it is the divide - the times and the divide are equals and the times is the leftmost of the two. Named by position instead, the row came out as the times and the plus being read left to right, which is the one pairing on that line where the rule does not hold.");
  let none_left = list_empty_is(others);
  if (none_left) {
    let alone = ["The ", symbol, " is the only operator left"];
    return alone;
  }
  let rank = app_code_operator_rank(symbol);
  let other_ranks = list_map(others, app_code_operator_rank);
  let top = list_max(other_ranks);
  let outranks = greater_than(rank, top);
  if (outranks) {
    let parts = ["The ", symbol, " is solved before the "];
    let first = true;
    for (let weaker of others) {
      let later = not(first);
      if (later) {
        list_add(parts, " and the ");
      }
      list_add(parts, weaker);
      first = false;
    }
    return parts;
  }
  function rank_same_is(candidate) {
    "whether one of the other operators is of this one's own strength";
    let candidate_rank = app_code_operator_rank(candidate);
    let level = equal(candidate_rank, rank);
    return level;
  }
  let level_others = list_filter(others, rank_same_is);
  ("the equals are put in front of the rest and the head taken, so a line with no equal on it still names something rather than nothing");
  let preferred = list_concat(level_others, others);
  let other = list_first(preferred);
  let same = equal(other, symbol);
  if (same) {
    ("a line carrying the same operator twice has no second symbol to name, and naming the one it has twice would read as two different operators");
    let repeated = ["The ", symbol, " operators are solved left to right"];
    return repeated;
  }
  let equals = [
    "The ",
    symbol,
    " and the ",
    other,
    " are solved left to right",
  ];
  return equals;
}
