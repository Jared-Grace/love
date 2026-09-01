import { arguments_assert } from "./arguments_assert.mjs";
export function html_click_sound_maker() {
  arguments_assert(arguments, 0);
  ("Somewhere for a page to make short sounds of its own, without a recording of one.");
  ("A PAGE IS ONLY ALLOWED TO OPEN THIS WHILE SOMEBODY IS PRESSING SOMETHING. Browsers refuse a page that starts making noise on its own, and the refusal is silent - the sounds are made, nothing comes out, and the page has no way of telling. So this is opened from inside the press that asked for the sounds and kept afterwards, rather than made when the screen is drawn.");
  ("It is kept rather than opened again for each sound because a page is allowed only a handful of these at once, and one opened per sound would run out partway through a run and take the rest of the run with it.");
  let context = new AudioContext();
  let maker = {
    context,
  };
  return maker;
}
