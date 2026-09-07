import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_code_highlight_color_second() {
  "the second pointing colour: worn by a word and by the piece of code that word points at, on a screen where another word is pointing at a different piece of code at the same time";
  ("IT SAYS NOTHING ON ITS OWN. Where one thing is being pointed at, that thing wears ",
    fn_name("app_code_highlight_color"),
    " and this colour is never reached. It arrives only as the other half of a pair, and what it tells a learner is not green but not the blue one - so a screen reaching for it must have both colours on it at once, or the second colour is decoration wearing a pointer's clothes.");
  ("A GREEN, AND IT WAS AN AMBER UNTIL THE THIRD POINTER EXISTED. Two colours could sit anywhere as long as they were not each other, and the amber was fine. Adding ",
    fn_name("app_code_highlight_color_third"),
    " at 15 degrees left the amber 41 degrees from it and 152 from the blue - two warm colours crowded together with a wide gap opposite. Three pointers are three places to look and no two of them may be near neighbours, so the middle one moved to where the room actually was.");
  ("At 150 degrees it is 114 from the blue and 135 from the red, which is about as even as three hues get. That evenness is the whole reason for the value; it was not picked because green is pleasant.");
  ("GREEN LOOKED SPOKEN FOR AND IS NOT. This app paints a finished lesson light green and a finished milestone deep green, which reads as a rule that green means done. That colour is on the tiles of the lessons list, a screen away, and it says done about a whole lesson; it has never been what the app calls a correct answer, which is gold. Green is already one of the four colours a teaching card tells numbers apart with, so a green inside a card is what this app was doing anyway.");
  ("Against black it measures 4.63 to 1 where the blue measures 4.06, so the pair is told apart by hue and not by lightness. That is on purpose. A pair split by lightness reads as one colour and a faded copy of it, which says one of these matters more; blue against green says these are two different things, which is what it has to say.");
  ("It is also, with the blue, the pair that survives a reader who cannot tell red from green - blue stays blue for such a reader and this goes yellowish, so the two ! that must never be confused stay two colours. The red of the third pointer is the one that may collapse into this, and that is survivable because the red is on brackets and this is on a !, so the character still tells them apart.");
  ("Written out here rather than taken from the four colours the app tells numbers apart with, because that list's green asks for a lightness sRGB cannot actually reach at this hue and is quietly squashed to fit. A pointer's whole job is to be the colour it says it is.");
  arguments_assert(arguments, 0);
  let color = color_oklch(0.55, 0.15, 150);
  return color;
}
