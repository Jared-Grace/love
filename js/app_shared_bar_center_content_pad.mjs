import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_centered } from "./html_centered.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bar_center_content_pad(frame) {
  "Lay out a bar and the body under it the way a screen holding one row of controls over a column of reading wants them: the bar's items gathered in the middle, the body given the shared reading column.";
  "The two go together and are easy to write apart. A bar left alone spreads its buttons across the whole width of a phone while the words underneath sit in a column half that wide, and the two rows then look like two pages.";
  "The frame is laid out where it is rather than handed back, because a caller wanting the bar or the body still has to ask the frame for them by name - so handing back a second frame holding the same two would only be one more thing to take apart.";
  "Which frame it is does not matter here, and that is the point: a screen whose bar stays at the top and a screen whose bar scrolls away both want their insides laid out the same way.";
  arguments_assert(arguments, 1);
  let bar = property_get(frame, "bar");
  let content = property_get(frame, "content");
  app_shared_content_column_pad(content);
  html_centered(bar);
}
