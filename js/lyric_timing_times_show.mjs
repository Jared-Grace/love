import { html_clear } from "./html_clear.mjs";
import { lyric_timing_untimed_said } from "./lyric_timing_untimed_said.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_div } from "./html_div.mjs";
import { html_flex_row_gap } from "./html_flex_row_gap.mjs";
import { html_align_items_center } from "./html_align_items_center.mjs";
import { number_is } from "./number_is.mjs";
import { html_button } from "./html_button.mjs";
import { html_disabled_set } from "./html_disabled_set.mjs";
import { number_hundredths_rounded } from "./number_hundredths_rounded.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_flex_grow_1 } from "./html_flex_grow_1.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { each_index } from "./each_index.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { divide } from "./divide.mjs";
export function lyric_timing_times_show(cards, held) {
  "$plain cards";
  "$plain held";
  "Writes out every line of the passage with its time, the line waiting to be tapped marked and in view, under a sentence saying which lines still have none.";
  "It is rebuilt from the tapping each time rather than added to, because stepping back and tapping again overwrites a time, and a list that only ever grows would go on showing the time that was just corrected.";
  "EVERY TIME IS SHOWN, NOT ONLY THE TIMES OF THE LINES THE TAPPING HAS REACHED. It used to be the second of those, cut off at the cursor. That was written for stepping back mid-song, where the line just stepped over keeps its old time and showing it could read as settled - but the cursor goes back to the first line whenever a passage is opened, so the same cut made a passage loaded with every one of its times recorded show none of them at all. Somebody who had timed a whole psalm, saved it, and come back to finish the last two lines was told by this box that nothing had ever been tapped, which is the plainest way there is to say work has been lost about work that is sitting safely on the disk.";
  "The old worry is answered better by the big button than by leaving the row out. That button already carries the line waiting to be tapped, so nothing here can be mistaken for settled while the button is still asking for it - and seeing the time about to be overwritten is worth more than not seeing it, because it is the thing the new tap is being judged against.";
  "A line nobody has heard yet shows no number rather than a zero, and its step buttons are switched off. An untimed line is held as nothing and not as a zero because zero is the first moment of the song and a real answer.";
  "WHAT IS MISSING IS SAID AT THE TOP, BECAUSE A LIST OF WHAT IS THERE CANNOT ANSWER IT. Every row here is a line that was tapped, so a passage with one line missing and a passage with none missing differ only by a row that is not there - and nobody counts thirty-one rows to find out. That is exactly how the closing Hallelujah of Psalm a hundred and forty-eight went out in a video with no time of its own: the screen had no way of mentioning it, and the first thing that did was the finished file.";
  "The sentence goes above the times rather than below them, and this is the one place in the room where a line may appear above something. Everything above the big button moves the button when it changes and the button is found by a thumb; this box is already below it, so a row arriving at the top of the box moves only older times, which are being read rather than pressed.";
  "★ EVERY LINE OF THE PASSAGE HAS A ROW, IN THE ORDER IT IS SUNG, AND PRESSING A ROW PICKS THAT LINE. Getting to a later line used to mean dragging the player and hoping to land just before it, or tapping through every line on the way; a list of the lines is already a list of places to go, so it answers that with one press. That is also why the rows run in the order of the song rather than newest first - somebody looking for line twelve counts down, not up.";
  "★ THE LINE BEING SUNG IS MARKED IN YELLOW AND THE LINE THE BIG BUTTON IS WAITING FOR IN GREY. Marking only the waiting line put the yellow one line ahead of the singer, which reads as the list being wrong while a song plays over times already recorded - the eye matches the bright row to the voice, not to the button. The sung line is kept in the middle of the box, or the waiting line before anything has been sung, so the row that matters is in view without anybody scrolling to it.";
  "EACH TIMED ROW CARRIES A STEP EARLIER AND A STEP LATER. A line that is a tenth out is fixed there and then, beside the number being fixed, rather than by stepping back and trying to hit it better by hand.";
  let times = cards.times;
  html_clear(times);
  let untimed_said = lyric_timing_untimed_said(held.starts);
  let all_timed = null_is(untimed_said);
  let some_untimed = not(all_timed);
  if (some_untimed) {
    html_div_text(times, untimed_said);
  }
  let step = 0.1;
  let marked = null;
  function row_add(text, index) {
    let row = html_div(times);
    html_flex_row_gap(row, "0.4em");
    html_align_items_center(row);
    let start = held.starts[index];
    let timed = number_is(start);
    function on_earlier() {
      cards.on_nudge(index, -step);
    }
    function on_later() {
      cards.on_nudge(index, step);
    }
    let earlier = html_button(row, "-", on_earlier);
    let later = html_button(row, "+", on_later);
    let disabled = not(timed);
    html_disabled_set(earlier, disabled);
    let disabled2 = not(timed);
    html_disabled_set(later, disabled2);
    let seconds = timed ? number_hundredths_rounded(start) : "--";
    let said = html_span_text(row, seconds + "  " + text);
    html_flex_grow_1(said);
    function on_select() {
      cards.on_select(index);
    }
    html_on_click(said, on_select);
    let right2 = subtract(held.cursor, 1);
    let sounding = equal(index, right2);
    if (sounding) {
      html_style_background_color_set(row, "#fff0a0");
      marked = row;
    }
    let waiting = equal(index, held.cursor);
    if (waiting) {
      html_style_background_color_set(row, "#e8e8e8");
      if (null_is(marked)) {
        marked = row;
      }
    }
  }
  each_index(held.texts, row_add);
  let b = null_is(marked);
  let found = not(b);
  if (found) {
    let box = html_component_element_get(times);
    let row_element = html_component_element_get(marked);
    let right = divide(box.clientHeight, 2);
    box.scrollTop =
      subtract(row_element.offsetTop, right) +
      divide(row_element.offsetHeight, 2);
  }
}
