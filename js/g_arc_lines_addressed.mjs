import { property_path_get_2 } from "./property_path_get_2.mjs";
import { g_arc_line_address } from "./g_arc_line_address.mjs";
import { g_arc_answer_field_names } from "./g_arc_answer_field_names.mjs";
import { property_get } from "./property_get.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { g_arc_turns_numbered } from "./g_arc_turns_numbered.mjs";
export function g_arc_lines_addressed(arc) {
  "Every piece of writing in one arc that a note can be filed against, each carrying the turn number and the field name that say where it is.";
  "IT IS WHAT A CHECK WALKS. A check faults a line, and a fault with no address is a fault nobody can act on - so what a check needs is not the arc's shape but a flat run of writing that already knows where each piece came from. Given this, a check is a loop and a test, and it never has to know how an arc is put together.";
  "THE PERSON'S OWN FIELDS COME FIRST AND CARRY A TURN OF ZERO, because an occupation or a summary sits in no turn. Zero is the address for them everywhere a note is filed, so a check and a reader spell it the same way without either being told.";
  "A CATCH-UP TAKES THE NUMBER OF THE FIRST TURN BENEATH IT. It is not a turn and has no number of its own, and inventing a numbering for catch-ups would put a second kind of address into a store that holds one. The field name says which of the two is meant, so the pair together is still unambiguous.";
  "THE ADDRESS IS SPELT OUT AS WELL AS ITS TWO PARTS, so that a caller matching lines against notes never joins them itself. Three callers were doing that join by hand, and each of them had to agree with the other two about a separator - an agreement nothing enforces and nothing would report the breaking of.";
  "EMPTY WRITING IS LEFT OUT rather than passed on empty. A conversation with no catch-up is ordinary, and a check handed an empty string either faults it or has to remember not to - both of which are the lister's job and not the check's.";
  let lines = [];
  let names = g_arc_answer_field_names("person");
  for (let name of names) {
    let value = property_get(arc, name);
    let any = text_empty_not_is(value);
    if (any) {
      list_add(lines, {
        number: 0,
        field: name,
        address: g_arc_line_address(0, name),
        text: value,
      });
    }
  }
  let numbered = g_arc_turns_numbered(arc);
  for (let entry of numbered) {
    let number = property_get(entry, "number");
    let opening = property_get(entry, "conversation_first");
    if (opening) {
      let catch_up = property_path_get_2(entry, "conversation", "catch_up");
      let caught_up = text_empty_not_is(catch_up);
      if (caught_up) {
        list_add(lines, {
          number,
          field: "catch_up",
          address: g_arc_line_address(number, "catch_up"),
          text: catch_up,
        });
      }
    }
    let turn = property_get(entry, "turn");
    for (let field of ["before", "after"]) {
      let text = property_get(turn, field);
      let said = text_empty_not_is(text);
      if (said) {
        list_add(lines, {
          number,
          field,
          address: g_arc_line_address(number, field),
          text,
        });
      }
    }
  }
  return lines;
}
