import { app_code_note_name_contrast_ways } from "./app_code_note_name_contrast_ways.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_note_name_contrast_faults } from "./app_code_note_name_contrast_faults.mjs";
import { property_get } from "./property_get.mjs";
import { json_to } from "./json_to.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function app_code_note_name_contrast_gate_run() {
  "Gate: no name standing in a lesson note may be drawn in a colour a reader cannot read it in, either as lettering on a run of code or as dark lettering on its own filled patch. Throws so the dispatcher seam exits nonzero.";
  "IT IS HELD AT NOUGHT RATHER THAN AT WHATEVER IS THERE TODAY, BECAUSE THERE IS NOTHING HERE TO FORGIVE. The palette is four colours and a piece of ink, all of them chosen; a colour that cannot be read was never a colour anyone meant to keep, so writing one down as allowed would only be recording a mistake as a fixture.";
  "The number is printed for each fault and not only the fact of it, because the repair is almost always a nudge rather than a new colour, and the distance from the floor is what says how far to nudge.";
  "HOW MANY WAYS WERE WALKED GOES OUT WITH THE VERDICT, and it is the length of the list of ways rather than the count of faults. Those two were the same word on every run that passed - nought - so a reader could not tell a clean sweep from one pointed at nothing. The ways are worked out from the colour functions, so the number falling is exactly what a colour list gone missing looks like, and that is the failure a green verdict would otherwise hide.";
  let ways = app_code_note_name_contrast_ways();
  let walked = list_size(ways);
  let faults = app_code_note_name_contrast_faults();
  for (let fault of faults) {
    let drawn = property_get(fault, "drawn");
    let text = json_to(fault);
    console.log("too close  " + drawn + "  " + text);
  }
  console.log("note name contrast faults: " + faults.length);
  if (list_empty_not_is(faults)) {
    throw new Error(
      "app code note name contrast gate: " +
        faults.length +
        " of the ways a name is drawn in a note cannot be read - which colour changed?",
    );
  }
  let r = {
    walked,
    faults: 0,
  };
  return r;
}
