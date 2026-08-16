import { list_tally_ranked } from "./list_tally_ranked.mjs";
import { list_take } from "./list_take.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function list_tally_ranked_top(values, count) {
  "The most repeated so many of a list, counted and commonest first.";
  "A ranking of everything is not an answer anybody reads. What is asked of a count is nearly always its head - what turns up most - and the rest is there only to be cut off again, so the cut belongs with the count rather than beside it at every place that asks.";
  "How many is said as text as readily as as a number, because this is reached for from the command line, where every argument arrives as text and a count read straight would take none of them.";
  arguments_assert(arguments, 2);
  let ranked = list_tally_ranked(values);
  let many = Number(count);
  let top = list_take(ranked, many);
  return top;
}
