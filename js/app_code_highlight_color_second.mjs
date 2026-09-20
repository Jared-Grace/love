import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_green_pointer } from "./app_shared_color_green_pointer.mjs";
export function app_code_highlight_color_second() {
  "the second pointing colour: worn by a word and by the piece of code that word points at, on a screen where another word is pointing at a different piece of code at the same time";
  ("IT SAYS NOTHING ON ITS OWN. Where one thing is being pointed at, that thing wears ",
    fn_name("app_code_highlight_color"),
    " and this colour is never reached. It arrives only as the other half of a pair, and what it tells a learner is not green but not the blue one - so a screen reaching for it must have both colours on it at once, or the second colour is decoration wearing a pointer's clothes.");
  ("A GREEN, AND IT WAS AN AMBER UNTIL THE THIRD POINTER EXISTED. Two colours could sit anywhere as long as they were not each other, and the amber was fine. Adding ",
    fn_name("app_code_highlight_color_third"),
    " at 15 degrees left the amber 41 degrees from it and 152 from the blue - two warm colours crowded together with a wide gap opposite. Three pointers are three places to look and no two of them may be near neighbours, so the middle one moved to where the room actually was.");
  "WHERE THE HUE AND THE LIGHTNESS COME FROM IS WRITTEN WITH THE VALUE, IN " +
    fn_name("app_shared_color_green_pointer") +
    " - the spacing round the wheel, the contrast against a black line, and the near miss against the chip green. Those are facts about the colour. What stays here is why this app wanted a third place to look at all, and why green was free to be it.";
  ("GREEN LOOKED SPOKEN FOR AND IS NOT. This app paints a finished lesson light green and a finished milestone deep green, which reads as a rule that green means done. That colour is on the tiles of the lessons list, a screen away, and it says done about a whole lesson; it has never been what the app calls a correct answer, which is gold. Green is already one of the four colours a teaching card tells numbers apart with, so a green inside a card is what this app was doing anyway.");
  ("It is also, with the blue, the pair that survives a reader who cannot tell red from green - blue stays blue for such a reader and this goes yellowish, so the two ! that must never be confused stay two colours. The red of the third pointer is the one that may collapse into this, and that is survivable because the red is on brackets and this is on a !, so the character still tells them apart.");
  ("ASKED FOR RATHER THAN TAKEN FROM THE FOUR COLOURS THE APP TELLS NUMBERS APART WITH, and the reason for not taking it stands: that list's green asks for a lightness sRGB cannot actually reach at this hue and is quietly squashed to fit, where a pointer's whole job is to be the colour it says it is. What has changed is only that this file no longer spells the value, which is the palette rule.");
  arguments_assert(arguments, 0);
  let color = app_shared_color_green_pointer();
  return color;
}
