import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function bless_rung_word(rung) {
  arguments_assert(arguments, 1);
  ("The word the player SAYS for a rung, which is not always the word the ladder files it under.");
  ("The ladder needs one name per rung and needs it to hold a village and a capital city alike, so it calls that rung a settlement. Nobody prays for everyone in their settlement. Almost every rung is already an ordinary spoken word and comes straight back out; this exists for the ones that are not.");
  ("A settlement is said as a town here, and that is a placeholder rather than an answer: once the world holds real units, the word should be the unit's OWN - their village, their town, their city. That is content, not a rung, so it does not belong in the ladder and cannot be settled before there is a world to read it from.");
  ("THE HOUSEHOLD RUNG WAS THE OTHER ONE AND IS NOT ANY MORE, because the rung itself is now called a family. It was filed as a household on the argument that the rung is a PLACE - the people at one address, which is what a building is divided into and what the ground lights up in - and said as a family because family is the word for the people and the player prays for people. The split was real and it cost more than it bought: everything a reader met said household while everything the player read said family, so the code and the game disagreed about the name of the same thing and every reading of one had to be translated into the other. One word is worth more than the distinction was.");
  let settlement = equal(rung, "settlement");
  if (settlement) {
    let town = "town";
    return town;
  }
  return rung;
}
