import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_picture_fade_seconds() {
  arguments_assert(arguments, 0);
  ("How long one picture of a lyric video takes to come up over the picture before it.");
  ("★ IT IS A FADE OF THE ARRIVING PICTURE, NOT A FADE OF THE ONE LEAVING, AND THAT IS WHY ONE NUMBER IS ENOUGH. The pictures are already laid one over the next in the order they are given, so the one before is still underneath at full strength - bringing the new one up from nothing therefore shows both at once, less of the old and more of the new, and ends on the new one alone. Fading the old one out as well would take it down to nothing in the middle of the crossing and show black through the gap.");
  ("★ IT IS LONGER THAN THE OVERLAP THE LEAD ALREADY GAVE, SO THE PICTURE BEFORE IT HAS TO BE HELD. Each picture is put up early by the lead, which leaves the two neighbours on the screen together for exactly that long and no longer; a fade asked to last longer than that would find nothing underneath for the rest of it and come up out of black. Holding the earlier picture on by the difference is what keeps something to cross from, and it costs nothing, because whatever is held is wholly covered by the time the fade is done.");
  ("Somebody watching is meant to notice the picture has changed and not to notice it changing, which is what puts this close to a second rather than at either end.");
  let seconds = 0.8;
  return seconds;
}
