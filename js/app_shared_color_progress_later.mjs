import { app_shared_container_blue_border_color } from "./app_shared_container_blue_border_color.mjs";
export function app_shared_color_progress_later() {
  "the colour of a row the learner has not reached yet - quiet, so that the one row being pointed at and the rows already done are what the eye finds first.";
  "the colour it holds is the one containers draw their border in. That is a coincidence of value and not a shared meaning, which is precisely why asking through this name matters: a row asking the border function directly reads as a row that is somehow a border, and moving one of the two later would silently move the other.";
  let c = app_shared_container_blue_border_color();
  return c;
}
