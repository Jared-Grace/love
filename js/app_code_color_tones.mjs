import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_lesson_chip_colors } from "./app_code_lesson_chip_colors.mjs";
import { app_code_highlight_colors } from "./app_code_highlight_colors.mjs";
import { app_code_note_name_colors } from "./app_code_note_name_colors.mjs";
export function app_code_color_tones() {
  arguments_assert(arguments, 0);
  ("every colour this app draws, sorted into the two tones it actually has - the dark ones, which carry white lettering, and the light ones, which carry near-black lettering");
  ("THE PALETTES ARE THREE BUT THE TONES ARE TWO, AND THAT IS THE WHOLE OF WHAT THIS EXISTS TO SAY. Measured 2026-09-20: the four chip colours stand at 0.500, 0.500, 0.509 and 0.580 of perceptual lightness, and the three pointing colours at 0.546, 0.549 and 0.551 - one band, 0.500 to 0.580, seven colours in it. The three name colours stand at 0.725, 0.780 and 0.880, which is the other band and nothing else is in it. So the app does not hold three sets of colours at three tones. It holds two tones, and the dark one is written down twice.");
  ("EVERY WAY A COLOUR IS DRAWN ASKS FOR ONE TONE OR THE OTHER, WHICH IS WHY TWO IS ENOUGH. A colour behind white lettering must be dark, or the white does not show on it. A colour behind near-black lettering must be light, for the same reason the other way round. A coloured word read on the black code line must be light. A coloured word read on the pale card must be dark. Those are four jobs and they ask two questions, and a colour that answers one of them answers the other in its pair - which is what makes a tone a real thing rather than a way of speaking.");
  ("A FIFTH JOB ASKS NEITHER, AND IT IS THE ONE THAT HURTS. A colour can also be a shape with no lettering on it at all - the black fill of a code chip told apart from the pale card around it, or a chip lifted off a black tile by a ring. A shape only has to be seen, so its rule asks three where lettering asks four and a half. But it asks to be far from what is behind it, and on the black code line that means far in the light direction - so it pulls a dark colour back up while its other two jobs pull it down. That squeeze is not a fault in any one colour; it is what a single tone serving two grounds costs.");
  "THE SPLIT IS BY TONE AND NOT BY GROUND, AND THE OTHER READING IS WRITTEN DOWN NEXT DOOR, SO THIS SAYS WHY IT LOST. " +
    fn_name("app_code_lesson_chip_colors") +
    " reasons that what separates a palette is the ground a colour is drawn on, pale card against black line. The chip colours and the pointing colours refute that between them: they share a ground, they share a tone, and they are still two lists. Ground is not what divides them - nothing does. Tone divides the name colours from both of the others, and it divides them cleanly, with a gap of 0.145 of lightness between the bands and not one colour standing in it.";
  ("WHAT STANDS BETWEEN THIS AND FOUR HUES AT TWO TONES EACH IS FOUR THINGS, AND ONLY ONE OF THEM IS A REASON. Eight colours would be a red, a green, a blue and an amber, each with a dark and a light. There are ten, because three darks are spare and one light is missing.");
  "The first spare dark is the pointing green against the chip green - hue 150.0 against 149.9, lightness 0.551 against 0.509. Those are one colour written twice, and the near-miss check already reports the pair as a fault, so nothing new is being claimed here. The second is the pointing red at hue 15 against the chip red at 25, moved on purpose so the three pointing colours stay clear of one another - a real choice, but one made for a set of three rather than for the palette. The third is the pointing blue, which is not an app colour at all: it is the blue the whole site leads with, reached through " +
    fn_name("app_shared_color_brand_blue") +
    ", and its chroma of 0.215 and hue of 262.9 were never a decision taken here. That one is the only genuine reason of the three, because it is not this app's to change.";
  ("The missing light is the amber. The red, the green and the blue each have both tones; the amber has a dark and nothing else. So a fourth name colour cannot be an amber today without one being invented, and the amber is also the colour every known contrast fault in the chip palette belongs to. Those two facts are probably one fact.");
  ("THE NUMBERS THE TWO TONES ACTUALLY REACH, measured the same day, so whoever revises them starts from readings rather than from this argument. Each light colour on the near-black ink it carries: 7.20 to one for the red, 9.48 for the blue, 13.91 for the green. Each dark colour under white lettering: 6.65 for the chip red, 6.07 for the chip blue, 5.40 for the chip green, 5.41 for the pointing red, 5.17 for the brand blue, and then 4.51 for the pointing green and 4.48 for the chip amber - the last of those being under the four and a half that lettering asks for, which is one of the amber's known faults.");
  "THE CHECK THIS WAS WRITTEN FOR NOW EXISTS AND ASKS IT. " +
    fn_name("app_code_color_hue_groups") +
    " stands the colours in order round the wheel and cuts them into hues, " +
    fn_name("app_code_color_tone_faults") +
    " asks each hue for exactly one dark and one light, and " +
    fn_name("app_code_color_tone_gate_run") +
    " holds the answer still against what is already known. The four faults it reports are the four written out in the paragraph above, arrived at independently - which is the only reason to believe either of them.";
  ("IT IS WORKED OUT FROM THE THREE PALETTE FUNCTIONS RATHER THAN WRITTEN OUT HERE, so a colour added to any of them arrives in the right band the day it is added, and this cannot drift from what is really drawn. That is also what makes the gate above worth having: it reads the palettes through this, so nobody has to remember to tell it about a new colour.");
  let chip = app_code_lesson_chip_colors();
  let pointing = app_code_highlight_colors();
  let dark = chip.concat(pointing);
  let light = app_code_note_name_colors();
  let tones = {
    dark,
    light,
  };
  return tones;
}
