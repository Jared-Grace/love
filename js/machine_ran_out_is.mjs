import { machine_ran_out_texts } from "./machine_ran_out_texts.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
export function machine_ran_out_is(t) {
  "Whether this text is the machine saying it ran out of something.";
  "Asked of whatever an attempt said when it failed. Yes means the attempt never got to look at what it was sent to look at, so its answer is about the moment it ran and not about the thing it was asked about - and a record of it is a record of the machine being full.";
  "Any one of the words is enough, because a single one of them ends the looking. A run that met two has not gone more wrong than a run that met one.";
  let parts = machine_ran_out_texts();
  let r = text_includes_multiple_is(t, parts);
  return r;
}
