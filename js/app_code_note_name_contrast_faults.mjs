import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_name_colors } from "./app_code_note_name_colors.mjs";
import { app_code_note_name_ink } from "./app_code_note_name_ink.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { color_contrast_or_null } from "./color_contrast_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
export function app_code_note_name_contrast_faults() {
  arguments_assert(arguments, 0);
  ("every way a name standing in a lesson note is drawn that a reader could not read, as a list of what was drawn on what and how far apart the two were - empty when every one of them can be read");
  ("A NAME IN A NOTE IS DRAWN TWO WAYS ROUND AND BOTH HAVE TO BE READABLE. On a run of code it is the lettering, coloured against the dark the code sits on; on the pale card it is a filled patch, and there the same colour is behind dark lettering instead. One colour doing both jobs is the whole design, so one colour going wrong breaks it in two places and a check of only one way round would find only one of them.");
  ("THE PAIRS ARE WORKED OUT FROM THE COLOUR FUNCTIONS RATHER THAN WRITTEN OUT HERE. A fourth name colour arriving is then checked the day it arrives, with nothing to remember to add; a list typed in here would go on passing while saying nothing about the colour that was actually added. This has already bitten twice - a name drawn in the dark on the dark and read as nothing at all, and a name drawn red where red was the mark for something else entirely.");
  ("The floor is the web's own rule for ordinary lettering, which asks for four and a half. It is not this repo's opinion about what looks alright, and that is why it is worth having: an opinion drifts to fit whatever was drawn last, and a rule someone else wrote cannot.");
  ("A colour that cannot be read at all counts as a fault rather than as a pair passed over. Skipping it would let a misspelled colour, or a name nothing here knows, sit in the palette forever wearing the appearance of having been checked - and the whole point of asking is that every colour here must be one this can measure.");
  let floor = 4.5;
  let faults = [];
  let colors = app_code_note_name_colors();
  let ink = app_code_note_name_ink();
  let dark = app_shared_color_code_background();
  for (let color of colors) {
    let lettering = [color, dark, "the name as lettering on a run of code"];
    let patch = [ink, color, "the name as lettering on its filled patch"];
    let ways = [lettering, patch];
    for (let way of ways) {
      let front = way[0];
      let behind = way[1];
      let drawn = way[2];
      let apart = color_contrast_or_null(front, behind);
      let unreadable = null_is(apart);
      if (unreadable) {
        faults.push({
          drawn,
          front,
          behind,
          apart: "unreadable",
        });
        continue;
      }
      let short = less_than(apart, floor);
      if (short) {
        faults.push({
          drawn,
          front,
          behind,
          apart,
          floor,
        });
      }
    }
  }
  return faults;
}
