import { arguments_assert } from "./arguments_assert.mjs";
import { color_contrast_floor_text } from "./color_contrast_floor_text.mjs";
import { color_contrast_floor_shape } from "./color_contrast_floor_shape.mjs";
import { app_code_note_name_colors } from "./app_code_note_name_colors.mjs";
import { app_code_note_name_ink } from "./app_code_note_name_ink.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
import { app_code_note_name_tag_darkness } from "./app_code_note_name_tag_darkness.mjs";
import { color_darkened } from "./color_darkened.mjs";
import { color_contrast_or_null } from "./color_contrast_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { less_than } from "./less_than.mjs";
export function app_code_note_name_contrast_faults() {
  arguments_assert(arguments, 0);
  ("every way a name standing in a lesson note is drawn that a reader could not read, as a list of what was drawn on what and how far apart the two were - empty when every one of them can be read");
  ("A NAME IN A NOTE IS DRAWN SEVERAL WAYS AND EVERY ONE OF THEM HAS TO BE READABLE. On a run of code it is the lettering, coloured against the dark the code sits on. On a filled patch the same colour is behind dark lettering instead. On a cup it is the lettering again, over a ground made by darkening that same colour, and that ground has itself to be told from the pale card it stands on. One colour doing all of those jobs is the whole design, so one colour going wrong breaks it in several places and a check of one way round would find only one of them.");
  ("THE PAIRS ARE WORKED OUT FROM THE COLOUR FUNCTIONS RATHER THAN WRITTEN OUT HERE. A fourth name colour arriving is then checked the day it arrives, with nothing to remember to add; a list typed in here would go on passing while saying nothing about the colour that was actually added. This has already bitten twice - a name drawn in the dark on the dark and read as nothing at all, and a name drawn red where red was the mark for something else entirely.");
  ("The floors are the web's own rule rather than this repo's opinion about what looks alright, and that is why they are worth having: an opinion drifts to fit whatever was drawn last, and a rule someone else wrote cannot.");
  ("EACH WAY CARRIES ITS OWN FLOOR, BECAUSE THE WAYS ARE NOT ALL ASKING THE SAME QUESTION. Three of them are lettering that has to be read, and the rule for lettering asks four and a half. The last one is a tinted ground told apart from the card behind it, which is a shape and not a word, and the rule for shapes asks three. Held to the lettering floor that one would refuse a drawing a reader can see perfectly well - and a check that refuses what is provably fine teaches whoever meets it to raise the number rather than fix the drawing, which costs the whole gate its authority.");
  ("The darkened ground is worked out here the way the cup works it out, from the colour and the one darkening amount, rather than being written down again. Written down, this would go on passing after the amount was changed - it would be checking a colour nothing draws.");
  ("A colour that cannot be read at all counts as a fault rather than as a pair passed over. Skipping it would let a misspelled colour, or a name nothing here knows, sit in the palette forever wearing the appearance of having been checked - and the whole point of asking is that every colour here must be one this can measure.");
  let text_floor = color_contrast_floor_text();
  let shape_floor = color_contrast_floor_shape();
  let faults = [];
  let colors = app_code_note_name_colors();
  let ink = app_code_note_name_ink();
  let dark = app_shared_color_code_background();
  let card = app_shared_container_blue_background_color();
  let darkness = app_code_note_name_tag_darkness();
  for (let color of colors) {
    let ground = color_darkened(color, darkness);
    let lettering = [
      color,
      dark,
      "the name as lettering on a run of code",
      text_floor,
    ];
    let patch = [
      ink,
      color,
      "the name as lettering on its filled patch",
      text_floor,
    ];
    let tag = [
      color,
      ground,
      "the name as lettering on its darkened tag",
      text_floor,
    ];
    let tag_seen = [
      ground,
      card,
      "the name's darkened tag against the pale card it stands on",
      shape_floor,
    ];
    let ways = [lettering, patch, tag, tag_seen];
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
  }
  return faults;
}
