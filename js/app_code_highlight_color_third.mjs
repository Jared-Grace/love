import { arguments_assert } from "./arguments_assert.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_code_highlight_color_third() {
  "the third pointing colour, for a screen where three different words are each pointing at a different piece of the same line of code";
  "CHOSEN HERE RATHER THAN TAKEN FROM THE FOUR THE APP TELLS NUMBERS APART WITH, because the two left in that set are both spoken for. This app says well done in green and says wrong in red, in those very colours, and a piece of a code line wearing either would be read as a verdict on the line rather than as a place to look. The other two of those four are already the first and second pointers.";
  "A magenta, and the hue is picked rather than liked: the first pointer sits near 264 degrees and the second near 56, and 340 is the one hue that is the same distance from both. Anything nearer the blue would be read as a second kind of blue, which is worse than no colour at all - it would say these two are related when the whole job is to say they are different.";
  "It measures 3.92 to 1 against the black of a code line and 5.36 against the white the line is written in, so it stands where the other two stand and none of the three is the faint one. A set where one is dimmer says that one matters less, and these three are three places to look, not a ranking.";
  "THREE COLOURS CANNOT ALL SURVIVE A READER WHO CANNOT TELL RED FROM GREEN. Blue against amber is the pair that does, and a third has to lean on the blue side of that, so a reader seeing this as another blue is a case that will happen. It is survivable here and only here: what this colour marks is a bracket, and a bracket is not shaped like the other things being pointed at, so such a reader still tells them apart by the character. A screen wanting a third pointer where all three are the same character has no business using this.";
  arguments_assert(arguments, 0);
  let color = color_oklch(0.55, 0.18, 340);
  return color;
}
