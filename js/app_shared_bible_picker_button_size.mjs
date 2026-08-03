import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function app_shared_bible_picker_button_size(count) {
  "choose a tap-target size from how many choices there are: a set small enough to fit on one screen has no scrolling cost, so make every target big and easy to tap; past that cutoff fall back to the PLAIN button size — the same 1em font and 0.3em padding as the verse-mode reader's own buttons — so a long list like the 66-book picker or Psalms' 150 chapters reads as ordinary buttons that match the rest of the app, rather than oversized ones that force endless scrolling";
  let fits_on_one_screen = 30;
  let roomy = less_than_equal(count, fits_on_one_screen);
  ("both margins are kept small so buttons sit close side-to-side and row under row: a long list like the whole canon is read by scrolling, so every gap between rows is height the reader pays for, and the buttons already tell themselves apart by their own borders. only the roomy set leaves rows further apart, where there is height to spare");
  if (roomy) {
    ("1.3em text with 0.55em of padding above and below makes a target about 44 pixels tall at the default text size, which is the size a finger needs; the earlier 1.7em/0.6em was about 60 pixels, bigger than a finger and so only spending screen without buying accuracy");
    let large = {
      font: "1.3em",
      pad_x: app_shared_font_size_label(),
      pad_y: "0.55em",
      margin_x: "0.2em",
      margin_y: app_shared_content_edge_gap(),
    };
    return large;
  }
  let standard = {
    font: "1em",
    pad_x: "0.3em",
    pad_y: "0.3em",
    margin_x: "0.12em",
    margin_y: "0.12em",
  };
  return standard;
}
