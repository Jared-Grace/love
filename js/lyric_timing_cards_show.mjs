import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { equal } from "./equal.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function lyric_timing_cards_show(cards, held) {
  arguments_assert(arguments, 2);
  ("$plain cards");
  ("$plain held");
  ("Puts the state of the tapping onto the screen: how far through, the line sounding now, and the line the button is waiting for.");
  ("WHEN THERE IS NOTHING LEFT TO TAP THE BUTTON SAYS SO INSTEAD OF GOING BLANK. A button with no words on it looks broken, and somebody who has just finished a song is the last person who should have to wonder whether it worked. The end of the passage is a result, so it is written out as one.");
  ("Everything shown here is worked out from the tapping afresh each time rather than nudged along. There is a back button, so the count can go down as well as up, and a number kept in step by hand is a number that goes out of step the one time a step is missed.");
  let total = held.texts.length;
  let done = held.cursor;
  html_text_content_set(cards.said, "Line " + (done + 1) + " of " + total);
  let sounding = held.texts[subtract(done, 1)];
  let started_not = equal(sounding, undefined);
  html_text_content_set(cards.now_card, started_not ? "" : sounding);
  let coming = held.texts[done];
  let ended = equal(coming, undefined);
  html_text_set(cards.tap_button, ended ? "All lines timed" : coming);
}
