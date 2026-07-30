import { less_than_equal } from "./less_than_equal.mjs";
export function app_bible_picker_button_size(count) {
  "choose a tap-target size from how many choices there are: a set small enough to fit on one screen has no scrolling cost, so make every target big and easy to tap; past that cutoff fall back to the PLAIN button size — the same 1em font and 0.3em padding as the verse-mode reader's own buttons — so a long list like the 66-book picker or Psalms' 150 chapters reads as ordinary buttons that match the rest of the app, rather than oversized ones that force endless scrolling";
  let fits_on_one_screen = 30;
  let roomy = less_than_equal(count, fits_on_one_screen);
  ("margin_x is kept small so buttons sit close side-to-side; margin_y stays larger to separate wrapped rows");
  if (roomy) {
    let large = {
      font: "1.7em",
      pad_x: "1.1em",
      pad_y: "0.6em",
      margin_x: "0.2em",
      margin_y: "0.4em",
    };
    return large;
  }
  let standard = {
    font: "1em",
    pad_x: "0.3em",
    pad_y: "0.3em",
    margin_x: "0.12em",
    margin_y: "0.28em",
  };
  return standard;
}
