import { color_oklch } from "./color_oklch.mjs";
import { list_get } from "./list_get.mjs";
export function app_code_lesson_chip_color(index) {
  "one of four categorical chip colors - magenta, green, blue, amber - hand-picked to be as distinct and familiar as possible (NOT an even-hue formula) so a learner tells one number from another at a glance; each is kept dark enough for the white chip text";
  "All four are spelled here because nothing outside asks for one of them by itself. The amber was lifted out under its own name for a while, when the second of the colours that point at a piece of code was taken from this list; that pointer is a green of its own now and the name went back where it came from. Lift one out again the moment a second reader wants exactly one of these - never by its place in the list, because the order these happen to be written in is not a name for what sits there.";
  "THE FIRST OF THE FOUR IS A MAGENTA AND NOT A RED, AND THAT IS THE ONE THING HERE A NORMAL EYE CANNOT SEE THE REASON FOR. A reader with no green cone, about one man in twelve, sees hue collapse onto a single blue-yellow line, and a true red at hue 25 lands on that line beside the amber at 56. Measured as a distance in the perceptual space, the pair stood at 0.070 - against 0.135 for the same pair to a normal eye, and against 0.2 or better for every other pair here. So the grid whose whole promise is that the eye can follow any single row was handing that reader two colours where it says four.";
  "Moving the first colour round to 345 is what buys the separation back, and the four were chosen against the measurement rather than by spacing: hues spread evenly were tried long ago and revised away as not distinct enough, so an even formula is a rejected answer and not an unconsidered one. The alternative that looks obvious is to keep the red and make the FOURTH a magenta - that was measured too and is worse than doing nothing, 0.032, because a magenta lands on top of the blue for the same reader. True red, amber, green and blue cannot all be told apart on that one line; one of the red and the amber has to leave, and the red is the one with somewhere to go.";
  "The amber sits lower and paler than it was for two faults of its own that had never been asked about. At 0.58 lightness and 0.16 chroma it asks for a colour sRGB cannot show and is quietly squashed to fit, and as lettering on the pale blue card it measured 3.91 where reading needs 4.5. Pulled to 0.54 and 0.14 it fits, and it clears the card at 4.64. That pull costs a little of what the move above bought - the worst pair over all four lands at 0.138 rather than 0.186 - which is the honest price of a member that is legal rather than one that is not.";
  let magenta = color_oklch(0.5, 0.2, 345);
  let green = color_oklch(0.51, 0.15, 150);
  let blue = color_oklch(0.5, 0.15, 255);
  let amber = color_oklch(0.54, 0.14, 56.38);
  let colors = [magenta, green, blue, amber];
  let color = list_get(colors, index);
  return color;
}
