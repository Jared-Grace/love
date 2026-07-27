import { list_map_property } from "./list_map_property.mjs";
import { qa_gate_names_in_flight } from "./qa_gate_names_in_flight.mjs";
import { list_includes } from "./list_includes.mjs";
import { qa_gate_blame_told } from "./qa_gate_blame_told.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function qa_gate_blame_print(message, known) {
  "Prints, under a gate's complaint, the last commit to touch each function it named";
  "Under the complaint rather than instead of it: what is wrong and who last touched it are two different questions, and the reader needs both to know whether to fix it or to leave it to whoever is mid-way through it.";
  "Saying nothing when nothing is known is the point - a gate whose complaint names no function should read exactly as it did before.";
  "Whether somebody is editing the file right now is said on the same line, because that is the question the reader actually has. A complaint about a file with nothing uncommitted in it has been true since before anybody sat down today and is nobody's half-finished edit; a complaint about a file being edited is where the fault nearly always is. Which of the two it is decides whether to fix it or to leave it alone, and the names are handed back so the run can say, once at the end, that none of them was in flight";
  let blamed = await qa_gate_blame_told(message, known);
  let none = list_empty_is(blamed);
  if (none) {
    let nothing = [];
    return nothing;
  }
  let named = list_map_property(blamed, "f_name");
  let flying = await qa_gate_names_in_flight(named);
  for (let last of blamed) {
    let f_name = property_get(last, "f_name");
    let commit = property_get(last, "commit");
    let when = property_get(last, "when");
    let subject = property_get(last, "subject");
    let editing = list_includes(flying, f_name);
    let tier = "INHERITED";
    if (editing) {
      tier = "IN FLIGHT";
    }
    let line = text_combine_multiple([
      "  ",
      tier,
      "  ",
      f_name,
      "  ",
      commit,
      "  ",
      when,
      "  ",
      subject,
    ]);
    console.log(line);
  }
  return flying;
}
