import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { folder_history_is } from "./folder_history_is.mjs";
import { not } from "./not.mjs";
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
  "Asked where there is no history, it says nothing and stops before asking anything of git. This runs inside the frozen copy as well as out here, and that copy is made without the history on purpose - so every ask of git in there fails, and the failure was not caught: it killed the whole re-run partway, so the SECOND red gate onward printed no reason at all while its name still appeared in the list of failures. That is the worst shape a report can take, since a gate known to be red with nothing said about it reads as a gate nobody can explain";
  let folder = folder_current_absolute();
  let recorded = await folder_history_is(folder);
  if (not(recorded)) {
    let silent = [];
    return silent;
  }
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
