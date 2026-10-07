import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
import { youtube_video_address } from "./youtube_video_address.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
export function app_music_youtube_link(parent, video_id, text) {
  "$plain video_id";
  "$plain text";
  "A line on a song's page that opens one of its YouTube films in a new tab, so leaving to watch does not lose the place on the page.";
  arguments_assert(arguments, 3);
  let div = html_div_centered(parent);
  let address = youtube_video_address(video_id);
  let a = html_a_href_text_new_tab(div, address, text);
  return a;
}
