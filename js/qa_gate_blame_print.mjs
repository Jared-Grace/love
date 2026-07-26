import { qa_gate_blame_told } from "./qa_gate_blame_told.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function qa_gate_blame_print(message, known) {
  "Prints, under a gate's complaint, the last commit to touch each function it named";
  "Under the complaint rather than instead of it: what is wrong and who last touched it are two different questions, and the reader needs both to know whether to fix it or to leave it to whoever is mid-way through it.";
  "Saying nothing when nothing is known is the point - a gate whose complaint names no function should read exactly as it did before.";
  let blamed = await qa_gate_blame_told(message, known);
  let none = list_empty_is(blamed);
  if (none) {
    return;
  }
  for (let last of blamed) {
    let f_name = property_get(last, "f_name");
    let commit = property_get(last, "commit");
    let when = property_get(last, "when");
    let subject = property_get(last, "subject");
    let line = text_combine_multiple([
      "  LAST TOUCHED  ",
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
}
