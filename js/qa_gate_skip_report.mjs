import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { json_from } from "./json_from.mjs";
import { qa_gate_inputs_log_path } from "./qa_gate_inputs_log_path.mjs";
import { qa_gate_said_log_path } from "./qa_gate_said_log_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { qa_gate_timings_path } from "./qa_gate_timings_path.mjs";
import { qa_gate_skip_compare } from "./qa_gate_skip_compare.mjs";
export async function qa_gate_skip_report() {
  "What skipping the traced gates would have decided over the runs logged so far, and whether it would have hidden anything";
  arguments_assert(arguments, 0);
  async function rows_read(f_path) {
    let exists = await file_exists(f_path);
    if (not(exists)) {
      let r = [];
      return r;
    }
    let lines = await file_read_lines(f_path);
    let rows = [];
    for (let line of lines) {
      let b = text_empty_is(line);
      if (not(b)) {
        let parsed = json_from(line);
        rows.push(parsed);
      }
    }
    return rows;
  }
  let f_path2 = qa_gate_inputs_log_path();
  let inputs = await rows_read(f_path2);
  let f_path3 = qa_gate_said_log_path();
  let said_rows = await rows_read(f_path3);
  let file_path = qa_gate_timings_path();
  let timings = await file_read_json(file_path);
  let r2 = qa_gate_skip_compare(inputs, said_rows, timings);
  return r2;
}
