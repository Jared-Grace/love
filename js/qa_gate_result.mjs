import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
export async function qa_gate_result(gate) {
  "Runs one gate and reports how it went rather than throwing, so that one red";
  "gate never stops the others from being asked. What comes back is a plain";
  "record: which gate, how long, whether it went red, and the complaint if it";
  "had one.";
  "Whether it went red is written down separately from the complaint, because a gate that throws with nothing to say leaves a record letter for letter identical to a gate that passed. Every reader of these records told the two apart by asking whether the complaint was empty, so such a gate read as green everywhere at once - and it is the gate least able to argue for itself that is silently believed. Which of the two branches was taken is a thing this function knows for certain and nothing downstream can recover, so it is said here rather than inferred there.";
  "It was not a hypothetical. Two gates were sorted as broken-and-silent off a record that meant they had passed on the second ask, and the sort was wrong in the direction that costs most: a green read as a fault wastes a reading, a fault read as green ships.";
  "How long is counted from just before this gate is asked to just after it answers, and every gate of a share is asked at once inside one process - so the number written down is how long the gate was outstanding while a hundred and sixty others were outstanding beside it. That is not what the gate would cost on its own, and it is wrong in one direction only, by however much the machine was carrying at the time. Measured on the fifth of September, one run's numbers added up to thirty seven hours inside a run that took twenty eight minutes.";
  "Whoever wants what a gate costs alone times the gates one at a time on a quiet machine, which is a different reading and is kept in a different file. Reading this one against that one, or adding these up and calling the total the work, gives an answer that is out by more than it is worth.";
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
