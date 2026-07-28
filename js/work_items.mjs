import { work_items_measured } from "./work_items_measured.mjs";
export async function work_items() {
  "Work a read-only check has proved is there right now, each entry carrying the count that proves it.";
  "It used to carry the always-open directions too - a new transform, a new gate, a DRY refactor - and those are gone from here rather than lost. They were a second hand-written copy of what the instructions already say in full, with nothing keeping the two in step, so the copy could only ever drift from the original and did. The split that replaced it: prose holds what is always true, and a function holds what has to be measured. This is the measuring half, and it is the only half that could not have been written down in advance.";
  "So this list CAN be empty, and that is the change worth knowing about. It used to be built never to run out, which reads as reassurance and is really a guarantee that something will always be offered whether or not anything is there. An empty answer here is now a real answer: nothing measurable is outstanding.";
  let measured = await work_items_measured();
  return measured;
}
