import { app_bible_picker_standard_pad_x } from "./app_bible_picker_standard_pad_x.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function app_bible_picker_button_size(count) {
  "choose a tap-target size from how many choices there are: a set small enough to fit on one screen has no scrolling cost, so make every target big and easy to tap; past that cutoff fall back to the standard size so a long list like Psalms' 150 chapters does not force endless scrolling";
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
    font: "1.15em",
    pad_x: app_bible_picker_standard_pad_x(),
    pad_y: "0.4em",
    margin_x: "0.12em",
    margin_y: "0.28em",
  };
  return standard;
}
