import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
export async function qa_gate_result(gate) {
  "Runs one gate and reports how it went rather than throwing, so that one red";
  "gate never stops the others from being asked. What comes back is a plain";
  "record: which gate, how long, whether it went red, and the complaint if it";
  "had one.";
  "Whether it went red is written down separately from the complaint, because a gate that throws with nothing to say leaves a record letter for letter identical to a gate that passed. Every reader of these records told the two apart by asking whether the complaint was empty, so such a gate read as green everywhere at once - and it is the gate least able to argue for itself that is silently believed. Which of the two branches was taken is a thing this function knows for certain and nothing downstream can recover, so it is said here rather than inferred there.";
  "It was not a hypothetical. Two gates were sorted as broken-and-silent off a record that meant they had passed on the second ask, and the sort was wrong in the direction that costs most: a green read as a fault wastes a reading, a fault read as green ships.";
  let name = gate.name;
  let started = date_now_milliseconds();
  let error_message = "";
  let red = 0;
  try {
    await gate();
  } catch (e) {
    red = 1;
    error_message = e.message;
  }
  let milliseconds = date_milliseconds_since(started);
  let result = {
    name,
    milliseconds,
    red,
    error_message,
  };
  return result;
}
