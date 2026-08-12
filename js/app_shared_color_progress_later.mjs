import { app_shared_color_blue_pale } from "./app_shared_color_blue_pale.mjs";
export function app_shared_color_progress_later() {
  "the colour of a row the learner has not reached yet - quiet, so that the one row being pointed at and the rows already done are what the eye finds first.";
  "it asks the palette for a pale blue rather than holding one. The palette says what a colour is; a name like this one says what it is for, and only that second kind belongs at a call site - so that the day a row not yet reached should look like something else, this is the one line that changes and every other user of that pale blue stays where it is.";
  let c = app_shared_color_blue_pale();
  return c;
}
