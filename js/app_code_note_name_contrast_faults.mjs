import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_name_contrast_ways } from "./app_code_note_name_contrast_ways.mjs";
import { color_contrast_or_null } from "./color_contrast_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
export function app_code_note_name_contrast_faults() {
  arguments_assert(arguments, 0);
  ("every way a name standing in a lesson note is drawn that a reader could not read, as a list of what was drawn on what and how far apart the two were - empty when every one of them can be read");
  ("A NAME IN A NOTE IS DRAWN SEVERAL WAYS AND EVERY ONE OF THEM HAS TO BE READABLE. On a run of code it is the lettering, coloured against the black the code sits on. On a cup it is the lettering again, ringed in that same black. On a filled patch the same colour is behind dark lettering instead. One colour doing all of those jobs is the whole design, so one colour going wrong breaks it in several places and a check of one way round would find only one of them.");
  ("★ THE CUP AND THE CODE CHIP ARE ONE PAIR HERE AND NOT TWO, WHICH IS A MERGE AND NOT A CHECK DROPPED. The ring round a name on a cup used to be that name's own colour scaled down dark, and so had to be measured on its own; it is now the code chip's background asked for by name, which is to say the identical colour. Two pairs spelling the same two colours would report one fault twice and would also state, wrongly, that there are two colours to keep in step. That the check collapsed when the drawing was unified is the evidence that the drawing really was unified.");
  ("WHAT THE WAYS ARE IS ASKED FOR BY NAME NEXT DOOR, AND WHAT IS LEFT HERE IS THE MEASURING. The two were one function until a gate asked how much this had walked and there was no honest answer: the only number in hand was the number of faults, which on every passing run is nothing. Splitting the list out gives the count a source that does not depend on the answer. The reasons the list is built the way it is - worked out from the colour functions so a fourth colour is checked the day it arrives, each way carrying its own floor because lettering and shapes are not the same question, the black against the card asked once rather than once per colour - are all written where the list is built. This has already bitten twice: a name drawn in the dark on the dark and read as nothing at all, and a name drawn red where red was the mark for something else entirely.");
  ("The floors are the web's own rule rather than this repo's opinion about what looks alright, and that is why they are worth having: an opinion drifts to fit whatever was drawn last, and a rule someone else wrote cannot.");
  ("A colour that cannot be read at all counts as a fault rather than as a pair passed over. Skipping it would let a misspelled colour, or a name nothing here knows, sit in the palette forever wearing the appearance of having been checked - and the whole point of asking is that every colour here must be one this can measure.");
  let ways = app_code_note_name_contrast_ways();
  let faults = [];
  for (let way of ways) {
    let front = way[0];
    let behind = way[1];
    let drawn = way[2];
    let floor_wanted = way[3];
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
    let short = less_than(apart, floor_wanted);
    if (short) {
      faults.push({
        drawn,
        front,
        behind,
        apart,
        floor: floor_wanted,
      });
    }
  }
  return faults;
}
