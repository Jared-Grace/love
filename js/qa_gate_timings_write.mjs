import { json_from_property_get } from "./json_from_property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { less_than } from "./less_than.mjs";
import { qa_snapshot_timed_solo_told } from "./qa_snapshot_timed_solo_told.mjs";
import { qa_gate_timings_path } from "./qa_gate_timings_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { property_get } from "./property_get.mjs";
import { error_json } from "./error_json.mjs";
export async function qa_gate_timings_write() {
  "Times every gate on its own inside the frozen copy and writes down what each one took, so the shares handed out afterwards can be made even";
  "It is timed inside the copy rather than out here because that is where the suite runs. The copy is in memory and nobody may write to it, so a name's file is found once and kept, and a gate timed in the living folder is timed against a slower repo - by a different amount for each gate, which is the amount that would go into the shares as an error";
  "One gate at a time is the whole point, so this wants a machine with nothing else on it. Taken while several of us were working, the numbers are of gates waiting for processors rather than of gates, and the shares made from them would be even in waiting rather than even in work";
  "Nothing watches this for going out of date, and nothing should. A gate that has grown slower since it was timed makes the shares less even, which is the state the repo lived in before any of this - so a stale record is merely worth less, never wrong, and a gate policing it would fail on every ordinary afternoon";
  "The reading is checked for being suspiciously short before anything is written, because the timing comes back as the words a second run printed, and a run that died early prints something that still parses. A record naming a handful of gates would look like a successful measurement and would quietly hand every unmeasured gate the same average, which is the shape the dealing already falls back to and would report as though it had measured";
  let told = await qa_snapshot_timed_solo_told();
  let said = property_get(told, "said");
  let began = said.lastIndexOf("\n{");
  if (less_than(began, 0)) {
    error_json({
      hint: "the timing run printed nothing that reads as a result - it was probably stopped before it finished, and there is nothing here worth writing down",
      f_name: qa_gate_timings_write.name,
      folder: property_get(told, "folder"),
    });
  }
  ("The result is read from where it opens to where it closes rather than to the end of what was said, because the run keeps talking afterwards. The dispatcher inside the copy prints a line of its own once the run is over, and reading to the end handed a parser a whole result followed by that line, which it refused - a measurement that had taken nine minutes and had already finished, thrown away over three words printed after it.");
  ("A result of this shape opens and closes hard against the left margin and everything inside it is indented, so the first close after the opening is the one belonging to it, and no counting of braces is needed.");
  let ended = said.indexOf("\n}", began);
  if (less_than(ended, 0)) {
    error_json({
      hint: "the timing run began printing its result and never finished it, so what is here is half a measurement - it was stopped while it was talking",
      f_name: qa_gate_timings_write.name,
      folder: property_get(told, "folder"),
    });
  }
  let closed = add(ended, 2);
  let json = said.slice(began, closed);
  let timings = json_from_property_get(json, "timings");
  let taken = {};
  for (let timing of timings) {
    let f_name = property_get(timing, "name");
    let milliseconds = property_get(timing, "milliseconds");
    taken[f_name] = milliseconds;
  }
  let gates = object_property_names(taken).length;
  if (less_than(gates, 100)) {
    error_json({
      hint: "far fewer gates were timed than this repo has, so the run ended early - writing this would look like a measurement and would be one of a few gates only",
      f_name: qa_gate_timings_write.name,
      gates,
    });
  }
  let path = qa_gate_timings_path();
  await file_overwrite_json(path, taken);
  let r = {
    path,
    gates,
  };
  return r;
}
