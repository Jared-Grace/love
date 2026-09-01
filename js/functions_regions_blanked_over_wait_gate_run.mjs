import { arguments_assert } from "./arguments_assert.mjs";
import { functions_regions_blanked_over_wait } from "./functions_regions_blanked_over_wait.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_regions_blanked_over_wait_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: no function may empty a part of the screen, wait, and only then write into it again. Throws so the dispatcher seam exits nonzero.");
  ("IT RATCHETS AGAINST ZERO RATHER THAN AGAINST A RECORD OF WHAT WAS ALREADY HERE. The whole repo was swept on the day this was written and stood at none, so there is nothing to grandfather, and a record would only be somewhere for the next one to be added quietly.");
  ("The remedy is one line, which is the other reason there is no record: write the word into the region before the wait instead of after it. A person who is told something is coming waits; a person shown nothing at all taps again.");
  ("What it guards is a fault that leaves nothing behind to find it by. Nothing throws, no gate goes red, and on a machine standing beside the server the wait is too short to see - so it is found by somebody on a phone deciding the control is dead, which is the most expensive way there is to be told.");
  ("Proved on the fault that prompted it rather than only on a clean repo. The chapter list of the reader, as it stood before it was repaired, empties the panel and then asks the server which chapters the book has; the reading this stands on names that copy and names nothing in the repo as it is now.");
  let swept = await functions_regions_blanked_over_wait();
  let walked = property_get(swept, "walked");
  let offenders = property_get(swept, "offenders");
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let regions = property_get(offender, "regions");
    console.log(
      "BLANK OVER A WAIT  " + f_name + "  -> " + list_join_comma(regions),
    );
  }
  let size = list_size(offenders);
  let any = greater_than(size, 0);
  if (any) {
    throw new Error(
      "regions blanked over wait gate: " +
        size +
        " functions empty a part of the screen and leave it empty for the whole of a wait - write a word into it before the wait saying what is coming, so the tap does not read as having done nothing",
    );
  }
  let r = {
    walked,
    blanked: 0,
  };
  return r;
}
