import { round } from "./round.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function qa_gate_skip_compare(inputs, said_rows, timings) {
  "$plain inputs";
  "$plain said_rows";
  "$plain timings";
  "What skipping the traced gates would have decided over the rows handed in, and whether it would have hidden anything";
  "Each neighbouring pair of runs is one decision per gate: the word for what it read is the same, so it would have been skipped. Every gate really ran both times, so what a skip would have hidden is simply read off - a gate that turned red or green is a hidden verdict, and a gate that stayed red saying something else is a hidden complaint. Those two are kept apart, because the first would make a green false and the second only makes a list of complaints out of date";
  "A changed complaint is not always a real one: a gate that opens by counting what it looked at says something new whenever that count moves. So the sizes travel with it, and whoever reads this reads the hidden ones";
  "Minutes saved are per run and only over the traced gates. They are from a timing taken on a quiet machine, so they say which is bigger rather than how long anybody will actually wait";
  "Apart from the reading of the logs because the branches that matter here are the ones a calm day never reaches: a real run has to flip for them to fire, and a check whose wrong branch has never run looks exactly like a clean one. Given its rows, this can be handed a flip";
  arguments_assert(arguments, 3);
  let said_by_commit = {};
  for (let row of said_rows) {
    said_by_commit[row.commit] = row;
  }
  function lambda(row) {
    let exists = property_exists(said_by_commit, row.commit);
    let r3 = exists && property_exists(row, "inputs");
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
