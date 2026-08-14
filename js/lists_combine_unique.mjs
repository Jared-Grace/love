import { lists_combine } from "./lists_combine.mjs";
import { list_unique } from "./list_unique.mjs";
export function lists_combine_unique(lists) {
  "Several lists read end to end as one, then each different item kept once however many of them held it.";
  "This is the ending a function grows when it asks the same question of many places and wants one answer back - every chapter of a bible, every file of a store. Each place answers with a list, the lists mean nothing apart, and what was wanted all along is the set they make together.";
  "Combining first and thinning afterwards is what makes the answer independent of how the work was split. Thinning each list on its own would still leave a word standing once for every place that holds it, which is the number of places rather than the number of words.";
  let combined = lists_combine(lists);
  let distinct = list_unique(combined);
  return distinct;
}
