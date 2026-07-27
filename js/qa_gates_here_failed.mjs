import { text_split_comma } from "./text_split_comma.mjs";
import { qa_gates_named } from "./qa_gates_named.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { qa_gate_result } from "./qa_gate_result.mjs";
import { property_get } from "./property_get.mjs";
import { text_and_empty_not_is } from "./text_and_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_gates_here_failed(names_comma) {
  "Of the gates that went red in a frozen run, the ones still red in the folder as it stands right now.";
  "The run freezes the folder first, and the second ask it already makes is put to that same frozen copy - so a gate that went red because the copy itself was taken mid-write answers exactly the same way when asked again, and reads as a real fault. Several of us write to this one folder continuously, so the copy is torn often enough that a red naming a different gate each time is the ordinary case rather than a strange one. Asking here is the only ask that can tell the two apart.";
  "A gate still red here is yours to fix. A gate quiet here was either a tear in the copy or a fault somebody has since fixed, and either way there is nothing left to do about it.";
  "This says nothing about the gates that were green. A green from a torn copy is worth no more than a red from one, and confirming a red is the cheap half; confirming a green means running everything again, which is the run you already did.";
  let names = text_split_comma(names_comma);
  let gates = qa_gates_named(names);
  let results = await list_map_async(gates, qa_gate_result);
  let failed = [];
  for (let result of results) {
    let name = property_get(result, "name");
    let error_message = property_get(result, "error_message");
    let complained = text_and_empty_not_is(error_message);
    if (complained) {
      console.log("STILL RED HERE  " + name + ": " + error_message);
      list_add(failed, name);
      continue;
    }
    console.log(
      "QUIET HERE  " +
        name +
        ": red in the frozen copy and quiet in the folder as it stands, so the copy was torn or somebody has fixed it since",
    );
  }
  let r = {
    asked: names.length,
    failed,
  };
  return r;
}
