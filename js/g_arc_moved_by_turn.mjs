import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { g_arc_lines_addressed } from "./g_arc_lines_addressed.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { equal } from "./equal.mjs";
export function g_arc_moved_by_turn(after_arc, moved) {
  "Everything that moved in one arc, filed under the turn it moved in and then under the field, so a screen drawing a line can ask what that line used to say.";
  "IT IS KEYED THE WAY THE PAGE IS DRAWN AND NOT THE WAY THE COMPARISON ANSWERS. The comparison hands back flat lists addressed by a joined string, which is the right shape for a report read top to bottom and the wrong one for a screen, where every field of every turn would otherwise walk all of them looking for itself.";
  "THE ARC'S OWN LINES ARE WALKED RATHER THAN THE ADDRESSES TAKEN APART. An address is a number and a field joined, so a map keyed by turn could be built by splitting it - but splitting is a second opinion about a spelling that one function owns, and it goes wrong quietly the day that spelling changes. The lines already carry the number and the field beside the address, so the pair is read rather than recovered.";
  "A LINE THAT APPEARED CARRIES NO BEFORE, and is marked with nothing rather than with an empty string. Empty is what an unwritten after says, so a line that did not exist and a line that said nothing would read alike on the page, and the second is ordinary while the first is the revision rules being broken.";
  "A LINE THAT VANISHED IS NOT IN HERE AT ALL, because there is no card left on the page to hang it on. It is counted where the reader is told how much moved, which is the only place it can be said.";
  arguments_assert(arguments, 2);
  let changed = property_get(moved, "changed");
  let appeared = property_get(moved, "appeared");
  let by_address = {};
  for (let one of changed) {
    let address = property_get(one, "address");
    let before = property_get(one, "before");
    let gone = property_get(one, "gone");
    let come = property_get(one, "come");
    property_set(by_address, address, {
      before,
      gone,
      come,
    });
  }
  for (let one of appeared) {
    let address = property_get(one, "address");
    property_set(by_address, address, {
      before: null,
      gone: [],
      come: [],
    });
  }
  let lines = g_arc_lines_addressed(after_arc);
  let by_turn = {};
  for (let line of lines) {
    let address = property_get(line, "address");
    let change = property_or_null(by_address, address);
    let unmoved = equal(change, null);
    if (unmoved) {
      continue;
    }
    let number = property_get(line, "number");
    let key = String(number);
    let fields = property_or_null(by_turn, key);
    let first = equal(fields, null);
    if (first) {
      fields = {};
      property_set(by_turn, key, fields);
    }
    let field = property_get(line, "field");
    property_set(fields, field, change);
  }
  return by_turn;
}
