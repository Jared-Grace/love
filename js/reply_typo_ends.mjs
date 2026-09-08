import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { reply_typo_costs } from "./reply_typo_costs.mjs";
import { reply_typo_sounds } from "./reply_typo_sounds.mjs";
import { reply_keys_nearby } from "./reply_keys_nearby.mjs";
import { text_is } from "./text_is.mjs";
export function reply_typo_ends(word, tokens, start, allowed) {
  "Every place in a message where one written-out word could have finished, and what the cheapest reading ending there cost. Answers a map from a position to a cost; an empty map means the word is not there at all.";
  "★ IT ANSWERS SEVERAL PLACES AND NOT ONE, WHICH IS THE WHOLE DIFFICULTY. A word read with a letter missing finishes one step earlier than the same word read whole, so `kenya` typed as `keny` and `kenya` typed as `kenya` end in different places. Nothing later can choose between them without seeing both, so both are answered and the caller carries on from each.";
  "It walks the word and the message together, one letter of each, keeping a queue of part-done readings. A reading is thrown away when another reading has reached the same four things - the same place in the word, the same place in the message, the same number of mistakes, the same number of letters gained or lost - more cheaply. That test is the whole reason this finishes: without it the queue would grow forever on a long word.";
  "★ A LETTER MISSING AND A LETTER TOO MANY ARE ALLOWED ONCE PER WORD, whatever the word's length, which is what `dropped` counts. They are the only two mistakes that change how long the word is, and enough of them walk any word to any shorter word - at three, a message naming the Falkland Islands also read as naming the Aland Islands, and would have been answered as such. Every other mistake keeps the length, so no number of those can walk one word into another.";
  let costs = reply_typo_costs();
  let sounds = reply_typo_sounds();
  let nearby = reply_keys_nearby();
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
    let want = word[node.wi];
    let got = tokens[node.ti];
    let got_is_letter = text_is(got);
    let moves = [];
    ("The letter is simply the letter it should be.");
    if (got_is_letter && equal(got, want)) {
      moves.push({
        wi: node.wi + 1,
        ti: node.ti + 1,
        edits: node.edits,
        dropped: node.dropped,
        cost: node.cost,
      });
    }
    ("The letter is one the finger could have hit instead.");
    if (got_is_letter && not_equal(got, want)) {
      let touching = nearby.get(want);
      if (not_equal(touching, undefined) && touching.has(got)) {
        moves.push({
          wi: node.wi + 1,
          ti: node.ti + 1,
          edits: node.edits + 1,
          dropped: node.dropped,
          cost: node.cost + costs.nearby,
        });
      }
    }
    ("The letter was never typed.");
    moves.push({
      wi: node.wi + 1,
      ti: node.ti,
      edits: node.edits + 1,
      dropped: node.dropped + 1,
      cost: node.cost + costs.omitted,
    });
    ("A letter was typed that belongs to no part of the word.");
    if (got_is_letter) {
      moves.push({
        wi: node.wi,
        ti: node.ti + 1,
        edits: node.edits + 1,
        dropped: node.dropped + 1,
        cost: node.cost + costs.extra,
      });
    }
    ("The right letter was typed twice. This is kept apart from a letter too many because it is the commonest mistake there is and much likelier than a stray letter, and because it cannot walk the word anywhere - the letter it repeats is the letter that was wanted.");
    if (got_is_letter && equal(got, want) && equal(tokens[node.ti + 1], want)) {
      moves.push({
        wi: node.wi + 1,
        ti: node.ti + 2,
        edits: node.edits + 1,
        dropped: node.dropped,
        cost: node.cost + costs.doubled,
      });
    }
    ("Two letters were typed the wrong way round.");
    let next_want = word[node.wi + 1];
    if (
      not_equal(next_want, undefined) &&
      got_is_letter &&
      equal(got, next_want) &&
      equal(tokens[node.ti + 1], want)
    ) {
      moves.push({
        wi: node.wi + 2,
        ti: node.ti + 2,
        edits: node.edits + 1,
        dropped: node.dropped,
        cost: node.cost + costs.swapped,
      });
    }
    ("The word was spelled the way it sounds.");
    for (let pair of sounds) {
      let expect = pair[0];
      let actual = pair[1];
      let left = word.slice(node.wi, node.wi + expect.length);
      if (not_equal(left, expect)) {
        continue;
      }
      let taken = tokens.slice(node.ti, node.ti + actual.length);
      if (not_equal(taken.length, actual.length)) {
        continue;
      }
      let left2 = taken.join("");
      if (not_equal(left2, actual)) {
        continue;
      }
      moves.push({
        wi: node.wi + expect.length,
        ti: node.ti + actual.length,
        edits: node.edits + 1,
        dropped: node.dropped,
        cost: node.cost + costs.sounded,
      });
    }
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
