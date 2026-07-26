import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
export async function qa_gate_result(gate) {
  "Runs one gate and reports how it went rather than throwing, so that one red";
  "gate never stops the others from being asked. What comes back is a plain";
  "record: which gate, how long, and the complaint if it had one.";
  let name = gate.name;
  let started = date_now_milliseconds();
  let error_message = "";
  try {
    await gate();
  } catch (e) {
    error_message = e.message;
  }
  let milliseconds = date_milliseconds_since(started);
  let result = {
    name,
    milliseconds,
    error_message,
  };
  return result;
}
