import { property_not } from "./property_not.mjs";
import { app_shared_color_white } from "./app_shared_color_white.mjs";
import { app_g_arcs_marks_press_mark_listen } from "./app_g_arcs_marks_press_mark_listen.mjs";
import { app_g_arcs_marks_press_strip_show } from "./app_g_arcs_marks_press_strip_show.mjs";
import { app_g_arcs_marks_press_go } from "./app_g_arcs_marks_press_go.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_g_arcs_marks_chips } from "./app_g_arcs_marks_chips.mjs";
import { each_index } from "./each_index.mjs";
import { html_button } from "./html_button.mjs";
import { app_g_arcs_moved_color } from "./app_g_arcs_moved_color.mjs";
import { app_g_arcs_marks_place_number } from "./app_g_arcs_marks_place_number.mjs";
export function app_g_arcs_marks_press(parent, panel, marks, sheet_code) {
  "$plain sheet_code";
  "A tour of the moved lines standing in the corner of the arcs bench: a press that carries the reader to the next change and counts it out, a list of every change to jump straight into, a ring around both halves of whichever change is being read, and every change on the sheet answering to being tapped.";
  "IT EXISTS BECAUSE THE MARKS ARE RARE AND THE SHEET IS LONG. One arc read here carried fifty-one moved lines spread over hundreds of turns, so the only way to see what had been rewritten was to scroll the whole arc watching for a coloured bar - and the reader who scrolls past one is told nothing at all, because a missed mark looks exactly like a stretch of arc where nothing moved.";
  "IT IS FIXED TO THE CORNER RATHER THAN SET AT THE TOP OF THE SHEET. A press that scrolls away is gone from the second screen onwards, which is every screen where the scrolling was the problem in the first place.";
  "IT IS NOT DRAWN AT ALL WHERE NOTHING MOVED, because a press with nowhere to carry anybody does nothing when it is pressed - and a reader on an arc nobody has read before would press it once, get no answer, and stop believing it on the arcs where it works.";
  "IT COUNTS OUT LOUD, and that is the half that makes it worth trusting. Pressed silently it would say nothing about whether the tour had finished; saying which change this is out of how many means the reader knows they have come round to the beginning rather than working it out from the words.";
  "IT COMES ROUND RATHER THAN STOPPING AT THE LAST ONE. Reviewing is not one pass down the page - a fault noticed at the fortieth change is often about something seen at the third - and a press that stops dead at the end sends the reader back to scrolling for exactly the case a tour is most useful in.";
  "THE CHANGES ARE COLLECTED AS THEY ARE DRAWN AND NEVER LOOKED FOR AFTERWARDS. Whether a line has moved is known at the moment its rows are made, so gathering them there costs nothing; hunting the finished page for rows that look marked would be reading a drawing back to find out what had been drawn into it.";
  "IT CARRIES THE READER TO THE OLDER HALF OF A PAIR, which is the top of the two lines rather than the one that is live now. The pair is read downwards - what it said, then what it says - so centring the second half would push the first one up towards the edge of the panel.";
  "IT ARRIVES AT ONCE RATHER THAN GLIDING. The smooth form of the same scroll was tried first and measured doing nothing at all on this bench - the press was asked for a place, asked the browser for it, and the panel stayed exactly where it stood - so what shipped is the form that was watched to work. It is also the better of the two on its own merits here: two changes can be ten thousand pixels apart, and gliding that distance is seconds of blur between the only two things the reader wanted to see.";
  "THE WHOLE PRESS HAPPENS IN ONE BREATH, which is what keeps what it says and where it stands in agreement. Where the going was waited on, six quick presses finished in the wrong order and left the panel at the fiftieth change under a press reading the second - and the press is the only thing on screen claiming to know where the reader is, so a press that can lie about it is worse than no press.";
  "BOTH HALVES OF THE CHANGE ARE RINGED, because being carried somewhere is not the same as being told what to look at, and what there is to look at is a comparison. A change is centred on a screen holding several other rows, some of them moved as well, and a ring around one line of the pair would point at the half that cannot be read on its own.";
  "EXACTLY ONE CHANGE IS EVER RINGED, and the old ring is taken off before the new one is put on rather than at the moment the reader leaves it. Two rings would say two places are the current one, which is worse than none - and a ring cleared on the way out cannot be cleared at all when the tour is joined by jumping.";
  "THE CHANGES ANSWER TO BEING TAPPED, so the tour can be joined from the page as well as from the corner. A reader scrolling normally meets a change with their eyes before the press has any idea they are there, and without this the only way to make it the current one was to walk the press round to it.";
  "TAPPING A CHANGE DOES NOT MOVE THE PAGE. Everything else that selects one is done from the corner and has to fetch the reader, but a tap is proof they are already looking at it - and centring what somebody is reading pulls the words out from under their eyes to put them a few lines lower.";
  "THE LIST IS FOLDED AWAY UNTIL IT IS ASKED FOR. Fifty numbers standing open in the corner of a phone cover the words the tour exists to show, so the thing that is always there is the small pair of presses, and the numbers come out over the page only while somebody is choosing from them.";
  "CHOOSING A NUMBER FOLDS THE LIST BACK, because choosing is the whole reason it was opened. Left standing it would be covering the very change it had just carried the reader to, and every jump would end with the reader closing the list before they could read anything.";
  "THE LIST FOLLOWS THE TOUR AS WELL AS DRIVING IT. Ten plain next presses with the numbers open would otherwise leave the filled chip somewhere off the top of a list that had not moved, so the list is scrolled to whichever chip is current - but only while it is open, because a folded list has no size and asking a thing with no size where it sits gives a place that means nothing.";
  "THE TOUR IS PUT BACK WHERE IT WAS WHEN THE SHEET IS DRAWN AGAIN, and filing a note is what draws it again. The press is made fresh with the sheet, so a reviewer who said something about the fortieth change was handed back a press reading next change - and pressing it carried them to the first, which is the one place they were certainly not. It is filed under the sheet and read back under the sheet, so changing person still starts at the beginning.";
  "COMING BACK RINGS THE CHANGE WITHOUT FETCHING THE READER. The scroll distance is put back by the bench in the same breath, so the reader is already looking at the place they were looking at, and scrolling to it as well would move the page out from under a reader who had not moved.";
  arguments_assert(arguments, 4);
  let none = list_empty_is(marks);
  if (none) {
    return null;
  }
  let count = marks.length;
  let counted = String(count);
  let opening = text_combine_multiple(["next change  ·  ", counted]);
  let at = {
    number: 0,
    current: null,
    open: false,
  };
  let holder = html_div(parent);
  html_style_assign(holder, {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    "z-index": "40",
    display: "flex",
    "flex-direction": "column",
    "align-items": "flex-end",
    gap: "0.4rem",
  });
  let strip = html_div(holder);
  html_style_assign(strip, {
    display: "none",
    "flex-wrap": "wrap",
    "justify-content": "flex-end",
    gap: "0.25rem",
    "max-width": "min(22rem, 86vw)",
    "max-height": "40vh",
    "overflow-y": "auto",
    padding: "0.4rem",
    "border-radius": "0.4rem",
    "background-color": "rgba(0,0,0,0.85)",
    "box-shadow": "0 1px 6px rgba(0,0,0,0.35)",
  });
  function go_chosen(number) {
    app_g_arcs_marks_press_strip_show(false, at, strip, lister);
    app_g_arcs_marks_press_go({
      number,
      carry: true,
      marks,
      counted,
      press,
      at,
      chips,
      sheet_code,
      count,
      panel,
      strip,
    });
  }
  let chips = app_g_arcs_marks_chips(strip, count, go_chosen);
  function mark_listen(mark, number) {
    let r = app_g_arcs_marks_press_mark_listen({
      mark,
      number,
      marks,
      counted,
      press,
      at,
      chips,
      sheet_code,
      count,
      panel,
      strip,
    });
    return r;
  }
  each_index(marks, mark_listen);
  let bar = html_div(holder);
  html_style_assign(bar, {
    display: "flex",
    gap: "0.4rem",
  });
  function lister_press() {
    let after_open = property_not(at, "open");
    app_g_arcs_marks_press_strip_show(after_open, at, strip, lister);
  }
  let lister = html_button(bar, "list", lister_press);
  function press_next() {
    let number = property_get(at, "number");
    app_g_arcs_marks_press_go({
      number,
      carry: true,
      marks,
      counted,
      press,
      at,
      chips,
      sheet_code,
      count,
      panel,
      strip,
    });
  }
  let press = html_button(bar, opening, press_next);
  let dressing = {
    padding: "0.55rem 0.9rem",
    "border-radius": "0.4rem",
    border: "none",
    "font-size": "0.95rem",
    "font-weight": "bold",
    color: app_shared_color_white(),
    "background-color": app_g_arcs_moved_color(),
    "box-shadow": "0 1px 6px rgba(0,0,0,0.35)",
    cursor: "pointer",
  };
  html_style_assign(lister, dressing);
  html_style_assign(press, dressing);
  let start = app_g_arcs_marks_place_number(sheet_code, count);
  let resumed = not_equal(start, null);
  if (resumed) {
    app_g_arcs_marks_press_go({
      number: start,
      carry: false,
      marks,
      counted,
      press,
      at,
      chips,
      sheet_code,
      count,
      panel,
      strip,
    });
  }
  return press;
}
