export function html_error_notice_style() {
  "how the could-not-start notice is drawn: the same dim full-screen layer the loading splash uses, with its words held in the middle of the viewport rather than below the middle, because there is no spinner above them to leave room for.";
  "it starts hidden. the notice is baked into the page before the app's own script runs - a handler installed by code that never got to run catches nothing - so it has to be standing there unseen until something goes wrong.";
  let r = {
    display: "none",
    position: "fixed",
    top: "0",
    left: "0",
    width: html_viewport_width_full(),
    height: html_viewport_height_full(),
    background: "rgba(0, 0, 0, 0.8)",
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
