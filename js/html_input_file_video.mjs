import { arguments_assert } from "./arguments_assert.mjs";
import { html_input_file_accept } from "./html_input_file_accept.mjs";
export function html_input_file_video(parent, on_file) {
  "$plain parent";
  "$plain on_file";
  "A box for choosing one video off the machine the page is being read on, which hands the chosen video straight to whoever asked for it.";
  "NOTHING IS SENT ANYWHERE, and here that is not only a convenience. A rendered psalm is a few hundred megabytes, so a page that uploaded one before it could be watched would put minutes between pressing the button and seeing the first line.";
  "Only video is offered, because a picker showing every file on a phone is a picker somebody has to search, and the answer is always the render just made.";
  arguments_assert(arguments, 2);
  let component = html_input_file_accept(parent, "video/*", on_file);
  return component;
}
