import { fn_name } from "./fn_name.mjs";
import { error } from "./error.mjs";
import { qa_gates } from "./qa_gates.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function qa_gates_read() {
  "The list of gates, with a readable failure when the list itself cannot be built";
  "The list is one array of names, so a single name nothing brings in throws while the array is still being built, before one gate has run - and the reader is handed a bare stack trace naming neither the file at fault nor the repair";
  "Nothing can be salvaged in that case, since the names are what would have been run, so the most a reader can be given is the cause and the one command that fixes it";
  try {
    let gates = qa_gates();
    return gates;
  } catch (error) {
    let cause = property_get(error, "message");
    let combined = text_combine_multiple([
      "the gate list itself could not be built, so no gate ran: ",
      cause,
      text_combine_multiple([
        " - repair it with ",
        fn_name("file_imports_repair"),
        " on js/",
        qa_gates.name,
        ".mjs, then run the gate again",
      ]),
    ]);
    throw new Error(combined);
  }
}
