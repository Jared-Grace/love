import { arguments_assert } from "./arguments_assert.mjs";
import { random_seed_from_text } from "./random_seed_from_text.mjs";
import { random_seed_generator } from "./random_seed_generator.mjs";
export function random_seed_generator_from_text(text) {
  arguments_assert(arguments, 1);
  ("A run of random numbers keyed to a word, so the same word always gives back");
  ("the same run.");
  ("A game built for one chapter, a set of arcs, a pool of people - each is keyed");
  ("to a name it already carries, so asking for it twice gives the same world");
  ("rather than a new one. Turning the word into a number and starting the run");
  ("from that number always arrive together, and the number in between is never");
  ("wanted on its own.");
  let seed = random_seed_from_text(text);
  let next = random_seed_generator(seed);
  return next;
}
