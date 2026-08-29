import { list_empty_is } from "./list_empty_is.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { lyric_timing_times_show } from "./lyric_timing_times_show.mjs";
export function lyric_timing_cards_show(cards, held) {
  "$plain cards";
  "$plain held";
  "Puts the state of the tapping onto the screen: how far through, the line sounding now, the line the button is waiting for, and every time recorded so far.";
  "WHEN THERE IS NOTHING LEFT TO TAP THE BUTTON SAYS SO INSTEAD OF GOING BLANK. A button with no words on it looks broken, and somebody who has just finished a song is the last person who should have to wonder whether it worked. The end of the passage is a result, so it is written out as one.";
  "HOLDING NO PASSAGE IS NOT THE SAME AS HOLDING ONE WITH NOTHING IN IT, and this is the one place that difference can be told. Counting the lines of a passage that was never loaded said Line 1 of 0, which reads as a passage that came back empty - the exact wrong answer to give somebody whose passage really did come back empty, because it is also what a screen waiting for a passage would say. Nothing loaded is said in words instead, and the button carrying the next line stays blank rather than announcing that every line is timed.";
  "Everything shown here is worked out from the tapping afresh each time rather than nudged along. There is a back button, so the count can go down as well as up, and a number kept in step by hand is a number that goes out of step the one time a step is missed.";
  "The times are redrawn from here rather than from the tap, so that everything that moves the cursor - a tap, a step back, a jump to wherever the player was dragged - shows the right list without each of them having to remember to say so.";
  let total = held.texts.length;
  let done = held.cursor;
  let none = list_empty_is(held.texts);
  let counted = "Line " + (done + 1) + " of " + total;
  html_text_content_set(cards.said, none ? "No passage loaded." : counted);
  let sounding = held.texts[subtract(done, 1)];
  let started_not = equal(sounding, undefined);
  html_text_content_set(cards.now_card, started_not ? "" : sounding);
  let coming = held.texts[done];
  let ended = equal(coming, undefined);
  let ended_said = none ? "" : "All lines timed";
  html_text_set(cards.tap_button, ended ? ended_said : coming);
  lyric_timing_times_show(cards.times, held);
}
