import { add } from "./add.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function list_order_moves_to_end(held, wanted) {
  "Which things, and in what order, would have to be taken out and put back at the end for a list that is already holding them to come out in the order wanted.";
  "Putting a thing at the end is sometimes the only move there is - a playlist lets a song be added or removed and nothing else, so the end is where anything added lands. Everything answerable about that is answerable here, without asking anybody, which is what lets the answer be looked over before the playlist is touched.";
  "The fewest moves is the whole point, because every move is a song leaving a playlist and coming back and somebody may be listening. So the longest run from the front of the wanted order that already stands in that order is left where it is, and only what follows it is moved. A list already in the right order asks for no moves at all.";
  "Both lists are taken as holding the same things; the caller drops whatever belongs to only one of them before asking. Anything wanted that is not held would otherwise read as out of order and be moved to the end of a list it was never in.";
  arguments_assert(arguments, 2);
  let at = 0;
  let settled = 0;
  for (let one of wanted) {
    let found = held.indexOf(one, at);
    if (less_than(found, 0)) {
      break;
    }
    at = add(found, 1);
    settled = add(settled, 1);
  }
  let moves = wanted.slice(settled);
  return moves;
}
