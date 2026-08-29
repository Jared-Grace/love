import { html_clear } from "./html_clear.mjs";
import { lyric_timing_untimed_said } from "./lyric_timing_untimed_said.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { divide } from "./divide.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { each } from "./each.mjs";
export function lyric_timing_times_show(times, held) {
  "$plain times";
  "$plain held";
  "Writes out every line that has a time against it, the latest in the passage at the top, under a sentence saying which lines still have none.";
  "THE NEWEST IS FIRST BECAUSE IT IS THE ONE BEING CHECKED. Written the other way round the newest line arrives below the bottom of a box of a fixed height, so every tap would have to be followed by a scroll to the end - and a scroll to the end can only be asked for after the browser has laid the box out, which is a piece of timing to get wrong for no gain. Turning the list round answers it with no scrolling at all, and the older times are still there for anybody who goes looking.";
  "It is rebuilt from the tapping each time rather than added to, because stepping back and tapping again overwrites a time, and a list that only ever grows would go on showing the time that was just corrected.";
  "WHAT IS SHOWN IS EVERY LINE THAT HAS A TIME, NOT EVERY LINE THE TAPPING HAS REACHED. It used to be the second of those, cut off at the cursor. That was written for stepping back mid-song, where the line just stepped over keeps its old time and showing it could read as settled - but the cursor goes back to the first line whenever a passage is opened, so the same cut made a passage loaded with every one of its times recorded show none of them at all. Somebody who had timed a whole psalm, saved it, and come back to finish the last two lines was told by this box that nothing had ever been tapped, which is the plainest way there is to say work has been lost about work that is sitting safely on the disk.";
  "The old worry is answered better by the big button than by leaving the row out. That button already carries the line waiting to be tapped, so nothing here can be mistaken for settled while the button is still asking for it - and seeing the time about to be overwritten is worth more than not seeing it, because it is the thing the new tap is being judged against.";
  "A line nobody has heard yet has no row rather than a row saying nothing. It is left out by having no time at all, which is why an untimed line is held as nothing and not as a zero: zero is the first moment of the song and a real answer.";
  "WHAT IS MISSING IS SAID AT THE TOP, BECAUSE A LIST OF WHAT IS THERE CANNOT ANSWER IT. Every row here is a line that was tapped, so a passage with one line missing and a passage with none missing differ only by a row that is not there - and nobody counts thirty-one rows to find out. That is exactly how the closing Hallelujah of Psalm a hundred and forty-eight went out in a video with no time of its own: the screen had no way of mentioning it, and the first thing that did was the finished file.";
  "The sentence goes above the times rather than below them, and this is the one place in the room where a line may appear above something. Everything above the big button moves the button when it changes and the button is found by a thumb; this box is already below it, so a row arriving at the top of the box moves only older times, which are being read rather than pressed.";
  html_clear(times);
  let untimed_said = lyric_timing_untimed_said(held.starts);
  let all_timed = null_is(untimed_said);
  let some_untimed = not(all_timed);
  if (some_untimed) {
    html_div_text(times, untimed_said);
  }
  function line_text(start, index) {
    let untimed = null_is(start);
    if (untimed) {
      return null;
    }
    let hundredths = multiply_round(start, 100);
    let seconds = divide(hundredths, 100);
    let text = seconds + "  " + held.texts[index];
    return text;
  }
  function row_add(text) {
    html_div_text(times, text);
  }
  let mapped = list_map_index(held.starts, line_text);
  let rows = list_filter_null_not_is(mapped);
  let newest_first = list_copy_reverse(rows);
  each(newest_first, row_add);
}
