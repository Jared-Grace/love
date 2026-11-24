import { reply_typo_moves } from "./reply_typo_moves.mjs";
import { reply_typo_tables } from "./reply_typo_tables.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function reply_typo_ends(word, tokens, start, allowed) {
  "Every place in a message where one written-out word could have finished, and what the cheapest reading ending there cost. Answers a map from a position to a cost; an empty map means the word is not there at all.";
  "★ IT ANSWERS SEVERAL PLACES AND NOT ONE, WHICH IS THE WHOLE DIFFICULTY. A word read with a letter missing finishes one step earlier than the same word read whole, so `kenya` typed as `keny` and `kenya` typed as `kenya` end in different places. Nothing later can choose between them without seeing both, so both are answered and the caller carries on from each.";
  "It walks the word and the message together, one letter of each, keeping a queue of part-done readings. A reading is thrown away when another reading has reached the same four things - the same place in the word, the same place in the message, the same number of mistakes, the same number of letters gained or lost - more cheaply. That test is the whole reason this finishes: without it the queue would grow forever on a long word.";
  "★ A LETTER MISSING AND A LETTER TOO MANY ARE ALLOWED ONCE PER WORD, whatever the word's length, which is what `dropped` counts. They are the only two mistakes that change how long the word is, and enough of them walk any word to any shorter word - at three, a message naming the Falkland Islands also read as naming the Aland Islands, and would have been answered as such. Every other mistake keeps the length, so no number of those can walk one word into another.";
  let tables = reply_typo_tables();
  let costs = tables.costs;
  let sounds = tables.sounds;
  let nearby = tables.nearby;
  let best = new Map();
  best.set("0:" + start + ":0:0", 0);
  let work = [
    {
      wi: 0,
      ti: start,
      edits: 0,
      dropped: 0,
      cost: 0,
    },
  ];
  let ends = new Map();
  while (greater_than(work.length, 0)) {
    let node = work.pop();
    let key = node.wi + ":" + node.ti + ":" + node.edits + ":" + node.dropped;
    let a = best.get(key);
    if (less_than(a, node.cost)) {
      continue;
    }
    if (equal(node.wi, word.length)) {
      let had = ends.get(node.ti);
      if (equal(had, undefined) || less_than(node.cost, had)) {
        ends.set(node.ti, node.cost);
      }
      continue;
    }
    let moves = reply_typo_moves(word, node, tokens, nearby, costs, sounds);
    for (let move of moves) {
      if (greater_than(move.edits, allowed)) {
        continue;
      }
      if (greater_than(move.dropped, 1)) {
        continue;
      }
      let moved =
        move.wi + ":" + move.ti + ":" + move.edits + ":" + move.dropped;
      let had = best.get(moved);
      if (not_equal(had, undefined) && less_than_equal(had, move.cost)) {
        continue;
      }
      best.set(moved, move.cost);
      work.push(move);
    }
  }
  return ends;
}
