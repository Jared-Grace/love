import { html_loading_backdrop_style } from "./html_loading_backdrop_style.mjs";
export function html_error_notice_style() {
  "how the could-not-start notice is drawn: the loading splash's own dim full-screen layer, with its words held in the middle of the viewport rather than below the middle, because there is no spinner above them to leave room for.";
  "the layer is ASKED FOR rather than spelled again here, so a change to how a covering layer looks reaches both of them and the notice can never come up a shade apart from the splash it replaces.";
  "it starts hidden, and it sits one step above the splash so that showing it covers what it is replacing. the notice is baked into the page before the app's own script runs - a handler installed by code that never got to run catches nothing - so it has to be standing there unseen until something goes wrong.";
  let backdrop = html_loading_backdrop_style();
  let r = {
    ...backdrop,
    display: "none",
    "z-index": "1001",
    color: "white",
    "font-family": "sans-serif",
    "font-size": "1.5rem",
    "text-align": "center",
    "align-items": "center",
    "justify-content": "center",
    "flex-direction": "column",
    gap: "1.5rem",
    padding: "1.5rem",
    "box-sizing": "border-box",
  };
  return r;
}
