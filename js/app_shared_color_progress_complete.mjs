import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
export function app_shared_color_progress_complete() {
  "the colour a row is painted once the learner has finished the thing it names. Green, today - but what it is is finished, and that is what a caller should ask for, so that changing what finished looks like is one edit here rather than a hunt for every place a green was written down.";
  let c = app_shared_color_green_light();
  return c;
}
