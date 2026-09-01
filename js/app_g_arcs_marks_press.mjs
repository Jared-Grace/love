import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { modulo } from "./modulo.mjs";
import { property_set } from "./property_set.mjs";
import { html_scroll_center_container_settled } from "./html_scroll_center_container_settled.mjs";
import { html_button } from "./html_button.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_g_arcs_moved_color } from "./app_g_arcs_moved_color.mjs";
export function app_g_arcs_marks_press(parent, panel, marks) {
  "A press standing in the corner of the arcs bench that carries the reader to the next line which has moved, one change per press, coming back round to the first once it has been through them all.";
  "IT EXISTS BECAUSE THE MARKS ARE RARE AND THE SHEET IS LONG. One arc read here carried fifty-one moved lines spread over hundreds of turns, so the only way to see what had been rewritten was to scroll the whole arc watching for a coloured bar - and the reader who scrolls past one is told nothing at all, because a missed mark looks exactly like a stretch of arc where nothing moved.";
  "IT IS FIXED TO THE CORNER RATHER THAN SET AT THE TOP OF THE SHEET. A press that scrolls away is gone from the second screen onwards, which is every screen where the scrolling was the problem in the first place.";
  "IT IS NOT DRAWN AT ALL WHERE NOTHING MOVED, because a press with nowhere to carry anybody does nothing when it is pressed - and a reader on an arc nobody has read before would press it once, get no answer, and stop believing it on the arcs where it works.";
  "IT COUNTS OUT LOUD, and that is the half that makes it worth trusting. Pressed silently it would say nothing about whether the tour had finished; saying which change this is out of how many means the reader knows they have come round to the beginning rather than working it out from the words.";
  "IT COMES ROUND RATHER THAN STOPPING AT THE LAST ONE. Reviewing is not one pass down the page - a fault noticed at the fortieth change is often about something seen at the third - and a press that stops dead at the end sends the reader back to scrolling for exactly the case a tour is most useful in.";
  "THE ROWS ARE COLLECTED AS THEY ARE DRAWN AND NEVER LOOKED FOR AFTERWARDS. Whether a line has moved is known at the moment its row is made, so gathering them there costs nothing; hunting the finished page for rows that look marked would be reading a drawing back to find out what had been drawn into it.";
  "IT CARRIES THE READER TO THE OLDER HALF OF A PAIR, which is the top of the two lines rather than the one that is live now. The pair is read downwards - what it said, then what it says - so landing on the second half would mean arriving in the middle of the comparison and having to look up.";
  "IT ARRIVES AT ONCE RATHER THAN GLIDING. The smooth form of the same scroll was tried first and measured doing nothing at all on this bench - the press was asked for a place, asked the browser for it, and the panel stayed exactly where it stood - so what shipped is the form that was watched to work. It is also the better of the two on its own merits here: two changes can be ten thousand pixels apart, and gliding that distance is seconds of blur between the only two things the reader wanted to see.";
  "THE WHOLE PRESS HAPPENS IN ONE BREATH, which is what keeps what it says and where it stands in agreement. Where the going was waited on, six quick presses finished in the wrong order and left the panel at the fiftieth change under a press reading the second - and the press is the only thing on screen claiming to know where the reader is, so a press that can lie about it is worse than no press.";
  arguments_assert(arguments, 3);
  let none = list_empty_is(marks);
  if (none) {
    return null;
  }
  let count = marks.length;
  let counted = String(count);
  let opening = text_combine_multiple(["next change  ·  ", counted]);
  let at = {
    number: 0,
  };
  function press_next() {
    let number = property_get(at, "number");
    let row = marks[number];
    let shown = add(number, 1);
    let v = String(shown);
    let said = text_combine_multiple(["change ", v, " of ", counted]);
    html_text_set(press, said);
    let after = modulo(shown, count);
    property_set(at, "number", after);
    html_scroll_center_container_settled(row, panel);
  }
  let press = html_button(parent, opening, press_next);
  html_style_assign(press, {
    position: "fixed",
    right: "1rem",
    bottom: "1rem",
    "z-index": "40",
    padding: "0.55rem 0.9rem",
    "border-radius": "0.4rem",
    border: "none",
    "font-size": "0.95rem",
    "font-weight": "bold",
    color: "#ffffff",
    "background-color": app_g_arcs_moved_color(),
    "box-shadow": "0 1px 6px rgba(0,0,0,0.35)",
  });
  return press;
}
