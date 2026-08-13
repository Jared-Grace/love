export function html_error_banner_copy_button_style() {
  "How the copy control on the development error band is drawn - the band's own dark red on white, sitting on its own line above the message.";
  "Held as plain data here rather than reached for from the app's own button styling, for the same reason the band around it is: this stands in the page before the app's script runs, and is wanted exactly when that script never ran.";
  let r = {
    display: "block",
    font: "inherit",
    color: "#900",
    background: "white",
    border: "0.0625rem solid #900",
    "border-radius": "0.5rem",
    padding: "0.5rem 1rem",
    "margin-bottom": "0.5rem",
    cursor: "pointer",
  };
  return r;
}
