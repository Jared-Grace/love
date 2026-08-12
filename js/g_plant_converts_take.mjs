import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { property_get } from "./property_get.mjs";
import { numbers_apart } from "./numbers_apart.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
export function g_plant_converts_take(held, cursor, pool, wanted) {
  arguments_assert(arguments, 4);
  ("Takes people out of the pool in the order they were written, from wherever the last plant stopped, until their turns come to about what this plant wanted.");
  ("The last one is only taken if taking it lands nearer the wanted number than stopping would, so a plant does not overspend by most of an arc rather than be a few turns short. At least one is always taken, because a plant with nobody in it is not a plant.");
  ("The place it stopped comes back out beside what it took, and a caller that does not put it back where it got it from has changed what this does. The pool is walked once across the whole game - that is what makes a face met in the first plant unable to turn up again in the fourth - so the mark is the only thing carrying that promise from one plant to the next. It arrives here as an ordinary number, which is to say a copy, and a copy moved is a copy thrown away.");
  let converts = [];
  let convert_turns = 0;
  for (let step = 0; less_than(step, held); step++) {
    let spare = subtract(held, cursor);
    let none = less_than(spare, 1);
    if (none) {
      break;
    }
    let npc = pool[cursor];
    let turns = property_get(npc, "turns");
    let with_it = convert_turns + turns;
    let gap_stopping = numbers_apart(convert_turns, wanted);
    let gap_taking = numbers_apart(with_it, wanted);
    let nearer_stopping = less_than(gap_stopping, gap_taking);
    let started_is = greater_than(converts.length, 0);
    let full = nearer_stopping && started_is;
    if (full) {
      break;
    }
    list_add(converts, npc);
    convert_turns = with_it;
    cursor = cursor + 1;
  }
  let r = {
    converts,
    convert_turns,
    cursor,
  };
  return r;
}
