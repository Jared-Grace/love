import { arguments_assert } from "./arguments_assert.mjs";
import { text_is } from "./text_is.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
export function reply_typo_moves(word, node, tokens, nearby, costs, sounds) {
  arguments_assert(arguments, 6);
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
  return moves;
}
