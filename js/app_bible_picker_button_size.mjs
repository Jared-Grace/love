import { less_than_equal } from "./less_than_equal.mjs";
export function app_bible_picker_button_size(count) {
  "choose a tap-target size from how many choices there are: a set small enough to fit on one screen has no scrolling cost, so make every target big and easy to tap; past that cutoff fall back to the standard size so a long list like Psalms' 150 chapters does not force endless scrolling";
  let fits_on_one_screen = 30;
  let roomy = less_than_equal(count, fits_on_one_screen);
  if (roomy) {
    let large = {
      font: "1.7em",
      pad_x: "1.1em",
      pad_y: "0.6em",
      margin: "0.4em",
    };
    return large;
  }
  let standard = {
    font: "1.15em",
    pad_x: "0.85em",
    pad_y: "0.4em",
    margin: "0.28em",
  };
  return standard;
}
