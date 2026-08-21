import { greater_than } from "./greater_than.mjs";
import { bible_dream_stroke_nearest_sample } from "./bible_dream_stroke_nearest_sample.mjs";
export function bible_dream_stroke_land_again(state, point, tolerance_squared) {
  "Put a trace that had left its corridor back down wherever on the stroke the hand has returned to, anywhere along it, and leave it there ready to carry on.";
  "★ A HAND THAT COMES BACK ON THE FAR SIDE OF A STROKE USED TO FIND THE STROKE CLOSED AGAINST IT. Advancing searches a window of samples around where the trace stands, so once the hand had gone the window sat frozen at the place of departure, and coming back down anywhere further away than that window reaches was not seen at all - the corridor was ten units under the pointer and the trace never noticed. Everything from there on was drawn for nothing. Searching the whole stroke at the one moment the trace has already admitted it is lost costs a scan that only happens while lost, and gives back the plain thing a player expects: put your hand on the line and it draws again.";
  "★ NOTHING BETWEEN THE TWO PLACES IS MARKED, AND THAT IS THE POINT OF DOING IT HERE RATHER THAN IN THE ADVANCING. Advancing marks everything it passed over, because a hand sweeping fast really did cross all of it. A hand that left the shape and came back somewhere else crossed none of it, and marking that span would hand the player ink for a part of the dream they never drew. So this moves the trace and colours nothing; what gets filled in is only what the hand goes on to cover from here.";
  "It marks not even the sample it lands on, for the same reason a press alone marks nothing: arriving somewhere is not drawing, and the first movement afterwards covers it anyway.";
  let found = bible_dream_stroke_nearest_sample(state, point);
  let gap_squared = found.gap_squared;
  if (greater_than(gap_squared, tolerance_squared)) {
    return;
  }
  state.off = false;
  state.index = found.index;
}
