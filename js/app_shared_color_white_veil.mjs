import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_color_white_veil() {
  "Almost solid white, for a small control pinned over the top of whatever a page has drawn.";
  "It is not quite opaque so that what is underneath shows faintly through it, which is what tells a reader the control is sitting on top of the page rather than cut out of it. A solid patch in the corner of a drawing reads as a hole in the drawing.";
  "Almost rather than half: the words on it have to be read against anything at all behind them, including a photograph, so the veil has to carry the lettering by itself and only hint at what it covers.";
  arguments_assert(arguments, 0);
  let color = "rgba(255,255,255,0.9)";
  return color;
}
