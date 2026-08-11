export function html_error_notice_button_style() {
  "how the try-again control on the could-not-start notice is drawn. it is styled here as plain data rather than reached for from the app's own button styling, because this notice stands in the page BEFORE the app's script runs and is wanted precisely when that script never ran.";
  let r = {
    font: "inherit",
    color: "black",
    background: "white",
    border: "none",
    "border-radius": "0.5rem",
    padding: "0.75rem 2rem",
    cursor: "pointer",
  };
  return r;
}
