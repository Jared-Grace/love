import { html_style_set } from "./html_style_set.mjs";
export function html_click_none(ci) {
  "Say that this thing may not be TOUCHED - taps and clicks aimed at it go through to";
  "whatever is behind it instead.";
  "It carries DOWN. The property is an inherited one, so everything drawn inside a thing";
  "that may not be touched may not be touched either, and saying it again on a child buys";
  "nothing. Said on a child anyway it reads as though that child were the one making the";
  "decision, and the next person to want a tap back takes it off there and finds nothing";
  "changes, because the answer was never coming from that line.";
  "So say it ONCE, on the outermost thing it is true of. A child that genuinely wants taps";
  "back inside such a thing has to ask for them by name rather than by staying silent,";
  "which is the right way round: the exception is the part worth writing down.";
  html_style_set(ci, "pointerEvents", "none");
}
