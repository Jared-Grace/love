import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_caption_font_size() {
  "The size of a short line written under something to say where it came from or what it is, quieter than the thing it sits beneath.";
  "IT IS SMALLER BECAUSE IT IS NOT WHAT THE READER CAME FOR. A caption saying which translation a verse is quoted from has to be findable by anyone who wonders, and has to be steppable-over by everyone who does not. Printing it at the size of the verse would make the page read as though the name of the bible mattered as much as the words of it.";
  arguments_assert(arguments, 0);
  let v = "0.8em";
  return v;
}
