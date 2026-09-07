import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { color_oklch } from "./color_oklch.mjs";
export function app_code_highlight_color_third() {
  "the third pointing colour, for a screen where three different words are each pointing at a different piece of the same line of code";
  ("CHOSEN HERE, AND SO IS ",
    fn_name("app_code_highlight_color_second"),
    ". The four colours this app tells numbers apart with were the obvious place to shop, and they are the wrong shape for this: they only have to differ from each other, where these three have also to sit evenly round the wheel and to stand at the same distance off a black line. Two colours picked for one job rarely fit another without being moved.");
  ("A RED, AND RED LOOKED SPOKEN FOR. The reds that mean a wrong answer land on a whole button or a whole block after the learner has pressed something, and a colour covering that much of the page after a press reads as a verdict. This lands on two brackets inside a line nobody has pressed yet, so it has nothing to answer and is read as a place to look. It is also a crimson rather than either of those reds, which are a pure red.");
  ("THE HUE WAS PICKED BY REASONING FIRST AND THE REASONING WAS WRONG. The hue equally far from the first pointer near 264 degrees and the second as it then stood near 56 is 340, so 340 went in. Held in the hand it read as another kind of blue, which is worse than no colour at all - it says these two are related when the whole job is to say they are different. Equal degrees on the wheel are not equal to the eye, and the split the eye actually makes here is warm against cool: the first pointer is the cool one, so a third that must not join it has to be plainly warm.");
  ("So 15 degrees. It was 41 from the second pointer at the time, which was too near - two warm colours crowded together with a wide empty gap opposite them - and that crowding is what moved the second pointer to a green. From 150 degrees it is 135 away, and from the blue 111, which is about as evenly as three hues can be spread.");
  ("It measures 3.89 to 1 against the black of a code line and 5.40 against the white the line is written in, so it stands where the other two stand and none of the three is the faint one. A set where one is dimmer says that one matters less, and these three are three places to look, not a ranking.");
  ("THREE COLOURS CANNOT ALL SURVIVE A READER WHO CANNOT TELL RED FROM GREEN, and this is the one that gives way. Blue against green is the pair that survives, and it is the pair carrying the two ! that must never be confused. This red may collapse into that green for such a reader, and it is survivable here and only here: what this colour marks is a bracket, and a bracket is not shaped like a !, so the character still tells them apart. A screen wanting a third pointer where all three are the same character has no business using this.");
  arguments_assert(arguments, 0);
  let color = color_oklch(0.55, 0.2, 15);
  return color;
}
