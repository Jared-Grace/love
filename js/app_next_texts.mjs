import { app_next_url_here } from "./app_next_url_here.mjs";
import { app_next_url_onward } from "./app_next_url_onward.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { list_add } from "./list_add.mjs";
export function app_next_texts(hash, list, run, mapped) {
  "The two links this page offers and the two texts that carry them: the reading with the link back to this passage, and the reading with the link on to the next one. Two are written because the reader chooses which to copy.";
  "The link here is written before the link onward, because writing the onward one moves the hash on.";
  let url_here = app_next_url_here(hash);
  let url_onward = app_next_url_onward(hash, list, run);
  let lines_here = list_concat(mapped, [url_here]);
  let text_here = list_join_newline_2(lines_here);
  ("The link is copied along with the reading, because carrying it is the whole point of this page. Somebody sending scripture a passage at a time pastes what they copied into a message and sends it; days later they open that message again, press the link sitting at the bottom of it, and are handed the passage that comes after the one they sent, ready to paste in turn. The link is what makes the message its own bookmark - drop it from the copy and the next day there is nothing to press, and they are back to finding their place by hand.");
  list_add(mapped, url_onward);
  let reading_text = list_join_newline_2(mapped);
  let r = {
    url_here,
    url_onward,
    text_here,
    reading_text,
  };
  return r;
}
