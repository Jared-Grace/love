import { arguments_assert } from "./arguments_assert.mjs";
import { color_contrast_floor_text } from "./color_contrast_floor_text.mjs";
import { color_contrast_floor_shape } from "./color_contrast_floor_shape.mjs";
import { app_code_note_name_colors } from "./app_code_note_name_colors.mjs";
import { app_code_note_name_ink } from "./app_code_note_name_ink.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
import { color_contrast_or_null } from "./color_contrast_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
export function app_code_note_name_contrast_faults() {
  arguments_assert(arguments, 0);
  ("every way a name standing in a lesson note is drawn that a reader could not read, as a list of what was drawn on what and how far apart the two were - empty when every one of them can be read");
  ("A NAME IN A NOTE IS DRAWN SEVERAL WAYS AND EVERY ONE OF THEM HAS TO BE READABLE. On a run of code it is the lettering, coloured against the black the code sits on. On a cup it is the lettering again, ringed in that same black. On a filled patch the same colour is behind dark lettering instead. One colour doing all of those jobs is the whole design, so one colour going wrong breaks it in several places and a check of one way round would find only one of them.");
  ("★ THE CUP AND THE CODE CHIP ARE ONE PAIR HERE AND NOT TWO, WHICH IS A MERGE AND NOT A CHECK DROPPED. The ring round a name on a cup used to be that name's own colour scaled down dark, and so had to be measured on its own; it is now the code chip's background asked for by name, which is to say the identical colour. Two pairs spelling the same two colours would report one fault twice and would also state, wrongly, that there are two colours to keep in step. That the check collapsed when the drawing was unified is the evidence that the drawing really was unified.");
  ("THE PAIRS ARE WORKED OUT FROM THE COLOUR FUNCTIONS RATHER THAN WRITTEN OUT HERE. A fourth name colour arriving is then checked the day it arrives, with nothing to remember to add; a list typed in here would go on passing while saying nothing about the colour that was actually added. This has already bitten twice - a name drawn in the dark on the dark and read as nothing at all, and a name drawn red where red was the mark for something else entirely.");
  ("The floors are the web's own rule rather than this repo's opinion about what looks alright, and that is why they are worth having: an opinion drifts to fit whatever was drawn last, and a rule someone else wrote cannot.");
  ("EACH WAY CARRIES ITS OWN FLOOR, BECAUSE THE WAYS ARE NOT ALL ASKING THE SAME QUESTION. The two per-colour ways are lettering that has to be read, and the rule for lettering asks four and a half. The remaining one is the black ground told apart from the pale card around it, which is a shape and not a word, and the rule for shapes asks three. Held to the lettering floor that one would refuse a drawing a reader can see perfectly well - and a check that refuses what is provably fine teaches whoever meets it to raise the number rather than fix the drawing, which costs the whole gate its authority.");
  ("THE BLACK AGAINST THE CARD IS ASKED ONCE AND NOT ONCE PER COLOUR, BECAUSE NO NAME COLOUR APPEARS IN IT. Asked inside the loop it would answer the same thing three times over and report a single fault as three, which reads as a broad failure where there is one narrow one. It is still a live question and not a formality: the card is a colour somebody may change, and a dark card would leave both the chip and the ring invisible on it.");
  ("A colour that cannot be read at all counts as a fault rather than as a pair passed over. Skipping it would let a misspelled colour, or a name nothing here knows, sit in the palette forever wearing the appearance of having been checked - and the whole point of asking is that every colour here must be one this can measure.");
  let text_floor = color_contrast_floor_text();
  let shape_floor = color_contrast_floor_shape();
  let colors = app_code_note_name_colors();
  let ink = app_code_note_name_ink();
  let dark = app_shared_color_code_background();
  let card = app_shared_container_blue_background_color();
  let ways = [
    [
      dark,
      card,
      "the black a name is read against - the code chip's fill, and the ring round a name on a cup - against the pale card both are drawn on",
      shape_floor,
    ],
  ];
  for (let color of colors) {
    let lettering = [
      color,
      dark,
      "the name as lettering on the black, both on a run of code and inside its ring on a cup",
      text_floor,
    ];
    let patch = [
      ink,
      color,
      "the name as lettering on its filled patch",
      text_floor,
    ];
    ways.push(lettering);
    ways.push(patch);
  }
  let faults = [];
  for (let way of ways) {
    let front = way[0];
    let behind = way[1];
    let drawn = way[2];
    let floor = way[3];
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
  return faults;
}
