import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { json_from } from "./json_from.mjs";
import { qa_gate_inputs_log_path } from "./qa_gate_inputs_log_path.mjs";
import { qa_gate_said_log_path } from "./qa_gate_said_log_path.mjs";
import { qa_gate_timings_path } from "./qa_gate_timings_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_exists } from "./property_exists.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { divide } from "./divide.mjs";
import { round } from "./round.mjs";
export async function qa_gate_skip_report() {
  "What skipping the traced gates would have decided over the runs logged so far, and whether it would have hidden anything";
  "Each neighbouring pair of runs is one decision per gate: the word for what it read is the same, so it would have been skipped. Every gate really ran both times, so what a skip would have hidden is simply read off - a gate that turned red or green is a hidden verdict, and a gate that stayed red saying something else is a hidden complaint. Those two are kept apart, because the first would make a green false and the second only makes a list of complaints out of date";
  "A changed complaint is not always a real one: a gate that opens by counting what it looked at says something new whenever that count moves. So the sizes travel with it, and whoever reads this reads the hidden ones";
  "Minutes saved are per run and only over the traced gates. They are from a timing taken on a quiet machine, so they say which is bigger rather than how long anybody will actually wait";
  arguments_assert(arguments, 0);
  async function rows_read(f_path) {
    let exists = await file_exists(f_path);
    if (not(exists)) {
      let r2 = [];
      return r2;
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
  let said_by_commit = {};
  for (let row of said_rows) {
    said_by_commit[row.commit] = row;
  }
  let file_path = qa_gate_timings_path();
  let timings = await file_read_json(file_path);
  function lambda(row) {
    let exists2 = property_exists(said_by_commit, row.commit);
    let r3 = exists2 && property_exists(row, "inputs");
    return r3;
  }
  let joined = inputs.filter(lambda);
  function lambda4(row) {
    let exists3 = property_exists(row, "failed");
    return exists3;
  }
  let failures = inputs.filter(lambda4);
  let gates = {};
  let hidden = [];
  let saved_ms = 0;
  let pairs = 0;
  for (let i = 1; less_than(i, joined.length); i++) {
    pairs += 1;
    let from = joined[subtract(i, 1)];
    let to = joined[i];
    let said_from = said_by_commit[from.commit];
    let said_to = said_by_commit[to.commit];
    for (let gate of object_property_names(to.inputs)) {
      let row =
        gates[gate] ??
        (gates[gate] = {
          skipped: 0,
          ran: 0,
          unskippable: 0,
        });
      let word = to.inputs[gate];
      if (equal(word, null)) {
        row.unskippable += 1;
        continue;
      }
      if (not_equal(word, from.inputs[gate])) {
        row.ran += 1;
        continue;
      }
      row.skipped += 1;
      saved_ms += timings[gate] ?? 0;
      let red_from = said_from.failed.includes(gate);
      let red_to = said_to.failed.includes(gate);
      let at = {
        gate,
        from: from.commit,
        to: to.commit,
      };
      if (not_equal(red_from, red_to)) {
        hidden.push({
          ...at,
          kind: "verdict",
          red_to,
        });
        continue;
      }
      let text_from = said_from.gates[gate];
      let text_to = said_to.gates[gate];
      if (
        red_to &&
        text_from &&
        text_to &&
        not_equal(text_from.hash, text_to.hash)
      ) {
        hidden.push({
          ...at,
          kind: "complaint",
          size_from: text_from.size,
          size_to: text_to.size,
        });
      }
    }
  }
  let top = divide(saved_ms, pairs);
  let n = divide(top, 6000);
  let top2 = round(n);
  let minutes_saved_per_run = equal(pairs, 0) ? 0 : divide(top2, 10);
  function lambda2(h) {
    let eq = equal(h.kind, "verdict");
    return eq;
  }
  function lambda3(h) {
    let eq2 = equal(h.kind, "complaint");
    return eq2;
  }
  let r = {
    runs: joined.length,
    runs_that_failed_to_note: failures.length,
    newest_failure: equal(failures.length, 0)
      ? null
      : failures[subtract(failures.length, 1)].failed,
    pairs,
    minutes_saved_per_run,
    hidden_verdicts: hidden.filter(lambda2).length,
    hidden_complaints: hidden.filter(lambda3).length,
    hidden,
    gates,
  };
  return r;
}
