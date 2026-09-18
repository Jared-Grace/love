import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_note_name_colors() {
  arguments_assert(arguments, 0);
  ("the colours a lesson's program lends to the names inside it, one per name, taken in the order the names are first marked in a note");
  ("EACH COLOUR IS A DIFFERENT BRIGHTNESS AS WELL AS A DIFFERENT HUE, AND THE BRIGHTNESS IS THE PART THAT MUST BE READ. A reader who cannot tell two hues apart still sees three different shades, so the pairing between a name in a note and the same name in the code reaches them too. A hue is not a slower copy of that: three shades have to be compared, three hues are known at a glance, so the reader who has both gets the faster signal and nobody is left with none.");
  ("THE HUE IS CHOSEN FIRST AND THE BRIGHTNESS SECOND, and it was the other way round once. Picking three lightnesses first and then looking for a hue at each one gave three colours a reader called almost white and light grey - the lightest of them had to be so pale to sit where it was told to that almost no colour was left in it. So each of these is a full colour first, and only then nudged until the three sit at different lightnesses. A colour nobody can see the colour of has already lost the layer it was added for.");
  ("The three sit about fourteen and about nineteen of lightness apart, where two is already tellable. They are not held above the note's grey: the darkest of them sits a little under that grey and the middle one about level with it, and both stay legible because their hues are nothing like grey and because the marks around them say what they are even to a reader who sees no colour here at all.");
  ("THE LIST IS NOT IN ORDER OF LIGHTNESS AND CANNOT BE. The first name is red because a reader asked for red there, and a red light enough to be the brightest of three is a pink - the hue goes as the lightness climbs, which is the whole reason the hue is picked first here. So the three lightnesses are spread apart without being sorted, which is all the brightness layer ever needed: it has to tell the names apart, not rank them.");
  ("Red already means a wrong answer elsewhere in this app, but only ever as the colour behind a choice somebody has pressed. Here it is the colour of the letters, inside a black chip, before anything has been asked - a different surface at a different moment, and no screen shows both at once.");
  ("Three, because three is what the cup lessons hand out. A program naming more than three gives the rest no colour at all rather than starting the list again - a colour used twice would say two different names were the same name, which is the one thing this exists to say truthfully.");
  let red = "#f43f2e";
  let green = "#7bf5a8";
  let blue = "#6cacff";
  let colors = [red, green, blue];
  return colors;
}
