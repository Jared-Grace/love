import { arguments_assert } from "./arguments_assert.mjs";
import { color_contrast_floor_text } from "./color_contrast_floor_text.mjs";
import { color_contrast_floor_shape } from "./color_contrast_floor_shape.mjs";
import { app_code_note_name_colors } from "./app_code_note_name_colors.mjs";
import { app_code_note_name_ink } from "./app_code_note_name_ink.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
export function app_code_note_name_contrast_ways() {
  arguments_assert(arguments, 0);
  ("every way a name standing in a lesson note gets drawn, each one as the colour in front, the colour behind, what that way is in words, and the floor that way has to clear - the list the contrast check walks, before anything has been measured");
  ("IT IS SPLIT OUT FROM THE CHECK SO THAT HOW MUCH WAS LOOKED AT CAN BE SAID WITHOUT LOOKING AT THE ANSWER. A gate that finds no faults and reports the number of faults reports nothing: the clean run and the run that swept an empty list say the same word. The honest count is the length of this list, and the only way to have it without working it back from the offenders is for the list to be a thing in its own right.");
  ("THE PAIRS ARE WORKED OUT FROM THE COLOUR FUNCTIONS RATHER THAN WRITTEN OUT HERE. A fourth name colour arriving is then checked the day it arrives, with nothing to remember to add; a list typed in here would go on passing while saying nothing about the colour that was actually added.");
  ("EACH WAY CARRIES ITS OWN FLOOR, BECAUSE THE WAYS ARE NOT ALL ASKING THE SAME QUESTION. The two per-colour ways are lettering that has to be read, and the rule for lettering asks four and a half. The remaining one is the black ground told apart from the pale card around it, which is a shape and not a word, and the rule for shapes asks three.");
  ("THE BLACK AGAINST THE CARD IS ASKED ONCE AND NOT ONCE PER COLOUR, BECAUSE NO NAME COLOUR APPEARS IN IT. Asked inside the loop it would answer the same thing three times over and report a single fault as three, which reads as a broad failure where there is one narrow one.");
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
  return ways;
}
