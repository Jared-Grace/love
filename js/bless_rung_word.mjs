import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function bless_rung_word(rung) {
  arguments_assert(arguments, 1);
  ("The word the player SAYS for a rung, which is not always the word the ladder files it");
  ("under.");
  ("The ladder needs one name per rung and needs it to hold a village and a capital city");
  ("alike, so it calls that rung a settlement. Nobody prays for everyone in their");
  ("settlement. Almost every rung is already an ordinary spoken word and comes straight");
  ("back out; this exists for the ones that are not.");
  ("A settlement is said as a town here, and that is a placeholder rather than an answer:");
  ("once the world holds real units, the word should be the unit's OWN - their village,");
  ("their town, their city. That is content, not a rung, so it does not belong in the");
  ("ladder and cannot be settled before there is a world to read it from.");
  let settlement = equal(rung, "settlement");
  if (settlement) {
    let town = "town";
    return town;
  }
  return rung;
}
