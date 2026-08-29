import { html_error_notice_button_style } from "./html_error_notice_button_style.mjs";
export function html_error_notice_dismiss_style() {
  "how the close control on the could-not-start notice is drawn: the try-again button's shape, outlined rather than filled, so the two read as the answer and the way out rather than as two equal offers.";
  "it is styled here as plain data rather than reached for from the app's own button styling, for the same reason the button beside it is: this notice stands in the page BEFORE the app's script runs and is wanted precisely when that script never ran.";
  "there is a way out at all because a notice with only one control is a trap when the thing it is answering did not stop the app. an error thrown by a page that is otherwise working covers a usable app with a full screen layer, and reloading is no escape when the same error is thrown again on the next load. that was met, and the only way past it was opening the browser's own tools.";
  let button = html_error_notice_button_style();
  let r = {
    ...button,
    color: "white",
    background: "transparent",
    border: "1px solid white",
  };
  return r;
}
