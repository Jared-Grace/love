export function html_img_lazy_full_block(picture) {
  "Settle one picture the way a page that is scrolled slowly through wants every picture on it: fetched only when the reader is nearly at it, turned back into an image in its own time, and drawn as wide as the page allows on a line of its own.";
  "FETCHING LATE IS WHY A LONG PAGE ARRIVES AT ALL. Thirty-six pictures asked for at once share the one connection and fill in downwards a line at a time; asked for one at a time as the page moves, the first is alone and arrives at once and every later one has the whole time the reader spends above it.";
  "DECODING IS LEFT TO ITS OWN TIME for the same reason. Turning a picture back into an image is work, and done in the middle of everything else it stops the page moving while it happens - which on a page meant to be scrolled slowly is felt as the scroll catching rather than as a picture appearing.";
  "AS WIDE AS THE PAGE ALLOWS, ON ITS OWN LINE. These are single shapes made large on purpose so somebody whose eyes no longer read small things can see what they are, and shrinking one to sit politely beside words would undo the one thing the drawing was for.";
  "What the picture is of, and what shape its corners are, are left to the caller - they differ picture by picture, and these four do not.";
  arguments_assert(arguments, 1);
  html_attribute_set(picture, "loading", "lazy");
  html_attribute_set(picture, "decoding", "async");
  html_width_full(picture);
  html_display_block(picture);
}
