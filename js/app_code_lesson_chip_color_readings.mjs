import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_chip_colors } from "./app_code_lesson_chip_colors.mjs";
import { app_shared_container_blue_background_color } from "./app_shared_container_blue_background_color.mjs";
import { color_contrast_floor_text } from "./color_contrast_floor_text.mjs";
import { color_contrast_floor_shape } from "./color_contrast_floor_shape.mjs";
import { color_reading_sentence } from "./color_reading_sentence.mjs";
import { color_contrast_or_null } from "./color_contrast_or_null.mjs";
import { color_readings_apart } from "./color_readings_apart.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_lesson_chip_color_readings() {
  arguments_assert(arguments, 0);
  ("every measurement that can be made of the categorical chip palette, each written out as one sentence carrying its own figure - what was measured, what it came to, and whether that clears the floor for the job or falls short of it");
  ("A RECORD OF WHAT IS, AND DELIBERATELY NOT A LIST OF FAULTS. Four things are known to be wrong with these colours and every fix for them is a judgment about colour that is waiting on somebody who has worked in colour. A gate that reported only the faults would be silent about a change that made a passing colour worse without pushing it under a floor, and silent about a change that moved a colour that was never in trouble - which is exactly the kind of quiet the waiting cannot afford.");
  ("So every figure is written down, passing ones included, and the ratchet these feed refuses a sentence it has not seen and refuses a sentence it has seen that has stopped being produced. Between them those two mean no reading can move in any direction without the gate saying so. Nothing here decides anything: a reading that moves is reported, never judged.");
  ("EACH COLOUR IS NAMED BY WHAT IT IS AND NOT BY WHERE IT SITS IN THE LIST. Calling one of them the red would fix the order of a list whose order was never meant to be a name, and would also go stale the moment somebody revised the red into something else while the sentence went on calling it red. Spelled out, the sentence changes when the colour changes, which is the whole behaviour wanted - and to anyone who works in colour the spelling says more than the word would.");
  ("THE SET IS ASKED FOR RATHER THAN WRITTEN DOWN, so a fifth colour is measured the day it is added, against every existing member, with nothing for anybody to remember to update. A list typed in here would go on passing while saying nothing at all about the colour that was actually added.");
  ("THREE JOBS PER COLOUR, AND THEY CARRY DIFFERENT FLOORS BECAUSE THEY ARE DIFFERENT QUESTIONS. A colour is the ground under the white lettering of a number chip; it is coloured lettering itself on the pale card; and it is a plain shape on that card, as a dot in the grid or a chip standing in a sentence. The first two are lettering somebody has to read and take the lettering floor. The third is a shape and takes the shape floor - held to the lettering floor it would refuse a dot a reader can see perfectly well, and a check that refuses what is provably fine teaches whoever meets it to raise the number rather than fix the drawing.");
  ("THE WHITE IS SPELLED HERE RATHER THAN ASKED FOR, WHICH IS A COPY, AND THE COPY IS SAFE FOR A REASON THAT DOES NOT GENERALISE. What a number chip letters in is the bare word white, set inside the shared code-chip drawing; it is the top of the scale rather than a shade anybody picked, so the drift a single spelling guards against - one person revising a chosen shade a little and the other spelling staying put - cannot happen to it. What WOULD break this is somebody changing chip lettering to a colour that is not white, at which point this goes on measuring white and says nothing. If that day comes, the repair is to give the chip's lettering its own name and ask for it here.");
  ("THE PALE RING THAT LIFTS A CHIP OFF A BLACK CODE TILE IS MEASURED NOWHERE, AND THAT IS A KNOWN HOLE RATHER THAN AN OVERSIGHT. Measured 2026-09-20 it stands at 2.98 against the amber where a shape needs 3, so on that one member it very nearly disappears. It is left out because the ring is spelled inside the drawing that draws it, and reading it from here would mean either a second spelling that can drift or moving the colour into the shared palette - and moving it lands a new blue a short step from an existing one, which is a colour decision, in a gate whose whole premise is that the colour decisions are waiting for somebody else.");
  ("THE DOTS' FADING IS ALSO LEFT OUT, AND FOR THE OPPOSITE REASON - IT IS FINE. Each dot in a row is drawn a step more see-through than the last, so the faintest sits at under half strength and clears no shape floor at all. Every member fails that identically, which is the tell: what would be measured there is the fading and not the palette. The fading is the design - it is what makes every dot in a row distinct - so a check of it would report the drawing working as intended as four faults.");
  let colors = app_code_lesson_chip_colors();
  let card = app_shared_container_blue_background_color();
  let white = "white";
  let text_floor = color_contrast_floor_text();
  let shape_floor = color_contrast_floor_shape();
  ("Two places, because a reading a ratchet holds has to drift a little without anybody hearing about it, and how little differs between the two scales. A readability figure runs from one to twenty-one and a tenth of it is well inside what nobody could see; a distance between two colours runs from nought to about two, where a tenth is the difference between a palette and a muddle, so it is held to a hundredth.");
  let contrast_places = 1;
  let apart_places = 2;
  let readings = [];
  function reading_add(subject, measured, floor) {
    "one job of one colour, added to the record.";
    let sentence = color_reading_sentence(
      subject,
      measured,
      floor,
      contrast_places,
    );
    readings.push(sentence);
  }
  for (let color of colors) {
    let ground = color_contrast_or_null(white, color);
    reading_add(
      color + " as the ground under the white lettering of a number chip",
      ground,
      text_floor,
    );
    let lettering = color_contrast_or_null(color, card);
    reading_add(
      color + " as coloured lettering on the pale card",
      lettering,
      text_floor,
    );
    reading_add(
      color + " as a dot or a chip on the pale card",
      lettering,
      shape_floor,
    );
  }
  ("How far apart the pairs look is asked of the shared helper, because the chips are no longer the only palette that has to answer it. What stays here is the list of JOBS, which is the half that genuinely differs between one palette and another - these colours letter a pale card, the pointing colours never do.");
  let apart = color_readings_apart(colors, apart_places);
  let all = list_concat(readings, apart);
  return all;
}
