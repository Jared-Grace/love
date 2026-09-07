import { arguments_assert } from "./arguments_assert.mjs";
import { html_input_file_accept } from "./html_input_file_accept.mjs";
export function html_input_file_audio(parent, on_file) {
  "$plain parent";
  "$plain on_file";
  "A box for choosing one sound file off the machine the page is being read on, which hands the chosen file straight to whoever asked for it.";
  "NOTHING IS SENT ANYWHERE. A file chosen this way is read by the page itself, so a song can be listened to without being copied into the repo first, and a person timing one keeps it wherever they already keep it.";
  "Only sound is offered, because a picker showing every file on a phone is a picker somebody has to search, and the answer is always a song.";
  "WHAT IT IS MADE OF IS SHARED WITH THE VIDEO PICKER, and the only thing left here is the kind of file to ask for. The two were the same twenty lines with one word different, and the word is the whole of what a caller is choosing between.";
  arguments_assert(arguments, 2);
  let component = html_input_file_accept(parent, "audio/*", on_file);
  return component;
}
