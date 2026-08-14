import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { property_get } from "./property_get.mjs";
export async function baseline_names_gate_walked_generic(
  walked,
  offenders,
  path,
  hint,
  name_write,
) {
  "Measure a sweep's offenders against its record and hand back the verdict with how much the sweep reached still attached.";
  "A gate that ratchets says only how many names were newly wrong and how many have gone away, and on a good day both of those are nothing. That is also what it says when its sweep has stopped visiting anything, so the two runs are written the same way and the second one goes unnoticed for as long as nobody happens to open the file. How much was walked is the one part of the answer that falls when the sweep goes blind, so it travels out beside the verdict rather than being printed and thrown away.";
  "The count is asked for rather than worked out here, because only the sweep knows what it walked. Anything this could count for itself - the size of the record, the length of the offender list - is a number that stays the same on exactly the run where the sweep has gone quiet, which is the run it is meant to expose.";
  "The sweep that finds gates saying nothing about how much they reached cannot see through this. It follows a gate into whatever it hands its answer to, and what it finds here is a count arriving as something asked for, which it reads as counted and asks no further. So a gate handing a nought in here would pass a sweep meant to catch exactly that - the number has to be one the sweep actually walked, and nothing but the writer can hold that.";
  "It exists because three gates had grown the same ending on the same afternoon, and the ending is what every remaining blind gate will grow as it is given its count. Writing it once means the shape is settled before the other ninety are converted rather than after.";
  let told = await baseline_names_gate_generic(
    offenders,
    path,
    hint,
    name_write,
  );
  let added = property_get(told, "added");
  let stale = property_get(told, "stale");
  let r = {
    walked,
    added,
    stale,
  };
  return r;
}
