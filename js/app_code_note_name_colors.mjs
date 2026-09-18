import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_note_name_colors() {
  arguments_assert(arguments, 0);
  ("the colours a lesson's program lends to the names inside it, one per name, taken in the order the names are first marked in a note");
  ("EACH COLOUR IS A DIFFERENT BRIGHTNESS AS WELL AS A DIFFERENT HUE, AND THE BRIGHTNESS IS THE PART THAT MUST BE READ. A reader who cannot tell two hues apart still sees three different shades, so the pairing between a name in a note and the same name in the code reaches them too. A hue is not a slower copy of that: three shades have to be compared, three hues are known at a glance, so the reader who has both gets the faster signal and nobody is left with none.");
  ("THE HUE IS CHOSEN FIRST AND THE BRIGHTNESS SECOND, and it was the other way round once. Picking three lightnesses first and then looking for a hue at each one gave three colours a reader called almost white and light grey - the lightest of them had to be so pale to sit where it was told to that almost no colour was left in it. So each of these is a full colour first, and only then nudged until the three sit at different lightnesses. A colour nobody can see the colour of has already lost the layer it was added for.");
  ("The first was a gold and then a red before it was this, and it is the one between them: read as an orange, lighter than the red was and still nothing like the gold. A red deep enough to stay red sat level with the blue, and two names at one lightness is the brightness layer gone - so the hue that answered both was the one in the middle of the two that had been tried.");
  ("The three sit about eight and about eleven of lightness apart, where two is already tellable. They are not held above the note's grey: the darkest of them is about as light as that grey, and stays legible because its hue is nothing like grey and because the marks around it say what it is even to a reader who sees no colour here at all.");
  ("Three, because three is what the cup lessons hand out. A program naming more than three gives the rest no colour at all rather than starting the list again - a colour used twice would say two different names were the same name, which is the one thing this exists to say truthfully.");
  let orange = "#ffab5c";
  let green = "#7bf5a8";
  let blue = "#6cacff";
  let colors = [orange, green, blue];
  return colors;
}
