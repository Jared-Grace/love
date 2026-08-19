import { arguments_assert } from "./arguments_assert.mjs";
import { list_any } from "./list_any.mjs";
import { bless_rungs } from "./bless_rungs.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { bless_blessed_is } from "./bless_blessed_is.mjs";
export function bless_person_blessed_is(blessed, person) {
  arguments_assert(arguments, 2);
  ("Whether this person has been prayed for - by name, or by anything they belong to.");
  ("This is what the mark over somebody's head is asking. A prayer over one neighbour that");
  ("reached their whole block covered this person too, and they should light up for it, so");
  ("the question walks the person's whole address rather than looking for them alone.");
  ("The mark is therefore also the map. Standing on a blessed block, everybody in sight is");
  ("lit; walking one street further and finding the crowd dark is how the player sees where");
  ("the work stops, without any list of what is left ever being shown to them.");
  let rungs = bless_rungs();
  function rung_covered(rung) {
    let place = bless_person_place(person, rung);
    let covered = bless_blessed_is(blessed, rung, place);
    return covered;
  }
  let any = list_any(rungs, rung_covered);
  return any;
}
