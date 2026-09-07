import { arguments_assert } from "./arguments_assert.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_code_highlight_color_third() {
  "the third pointing colour, for a screen where three different words are each pointing at a different piece of the same line of code";
  "CHOSEN HERE RATHER THAN TAKEN FROM THE FOUR THE APP TELLS NUMBERS APART WITH, because two of those four are the first and second pointers already and the other two are green and red, which this app spends elsewhere - it says well done in green and marks a wrong choice in red.";
  "A RED IN SPITE OF THAT, and the difference is where the colour lands. The reds that mean wrong land on a whole button or a whole block after the learner has pressed something, and a colour covering that much of the page after a press reads as a verdict. This lands on two brackets inside a line nobody has pressed yet, so it has nothing to answer and is read as a place to look. It is also a crimson rather than either of those reds, which are a pure red.";
  "THE HUE WAS PICKED THE OTHER WAY FIRST AND IT WAS WRONG. Reasoning from the wheel, the hue equally far from the first pointer near 264 degrees and the second near 56 is 340, so 340 went in. Held in the hand it read as another kind of blue, which is worse than no colour at all - it says these two are related when the whole job is to say they are different. Equal degrees on the wheel are not equal to the eye, and the split the eye actually makes here is warm against cool: the first pointer is the cool one, so a third that must not join it has to be plainly warm.";
  "So 15 degrees, which is 41 from the amber and about 111 from the blue - lopsided on the wheel and even to look at, because red against burnt orange is a difference this eye makes easily and red against blue is one it cannot miss.";
  "It measures 3.89 to 1 against the black of a code line and 5.40 against the white the line is written in, so it stands where the other two stand and none of the three is the faint one. A set where one is dimmer says that one matters less, and these three are three places to look, not a ranking.";
  "THREE COLOURS CANNOT ALL SURVIVE A READER WHO CANNOT TELL RED FROM GREEN. Blue against amber is the pair that does, and a third has to lean on one side of it; this one leans warm, so such a reader may read it as a second amber. It is survivable here and only here: what this colour marks is a bracket, and a bracket is not shaped like the other things being pointed at, so the character still tells them apart. A screen wanting a third pointer where all three are the same character has no business using this.";
  arguments_assert(arguments, 0);
  let color = color_oklch(0.55, 0.2, 15);
  return color;
}
