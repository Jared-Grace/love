import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_set_back_cycle } from "./bless_building_set_back_cycle.mjs";
import { list_get } from "./list_get.mjs";
import { bless_building_shape } from "./bless_building_shape.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
export function bless_building_set_back(index, storeys) {
  arguments_assert(arguments, 2);
  ("How many squares back from the pavement the building at this place in the row actually");
  ("stands - what the street asks for, cut down to what this particular house has room to");
  ("do.");
  ("THE ASKING AND THE ROOM ARE TWO DIFFERENT FACTS AND THIS IS WHERE THEY MEET. The run of");
  ("set-backs is a fact about the street and says nothing about how tall any building is;");
  ("how much spare ground a building has is a fact about that building and says nothing");
  ("about where in the row it stands. Multiplied out anywhere else, either one would have");
  ("to know the other, and the run could no longer be read as a plain list of numbers.");
  ("Room is the slot MINUS the house. Every building stands in the same three rows of");
  ("ground, and a house is one row of roof with one row of wall under it for each floor -");
  ("two rows for a one-storey house and three for a two-storey one. So a low house has a");
  ("row to spare and a tall one has none, and a tall house asked to step back is left");
  ("standing where it was rather than pushed out through the back of its slot.");
  ("Cut down rather than refused, because a set-back is decoration and a slot is a rule.");
  ("Nothing about the street is wrong if a house cannot step back - it simply does not - and");
  ("stopping the game over it would be stopping it over the arrangement of a row of");
  ("windows. The rule that may not bend is the one that keeps every building inside its own");
  ("three rows, and that is exactly the rule this enforces.");
  let cycle = bless_building_set_back_cycle();
  let wanted = list_get(cycle, index);
  let shape = bless_building_shape();
  let depth = property_get(shape, "depth");
  let rows = add(storeys, 1);
  let spare = subtract(depth, rows);
  function back_get() {
    if (less_than(spare, wanted)) {
      return spare;
    }
    return wanted;
  }
  let back = back_get();
  return back;
}
