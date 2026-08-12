import { app_shared_bible_verses_count_hash_key } from "./app_shared_bible_verses_count_hash_key.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_hash_transform_reload } from "./html_hash_transform_reload.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
export function app_next_passage_more_button(parent, run) {
  "The way onward for somebody who wants more than the page opened with: one more sentence's worth of verses, added to what is already there.";
  "It asks for one verse past the ones on the screen, and the page does the rest - what it opens on is always carried to the end of a sentence, so asking for the first verse of the next thought asks for the whole of it.";
  "The asking is written into the address rather than kept on the page, so what somebody is looking at after pressing this is what somebody else sees if they are sent the link, and the browser's own back button steps back a passage.";
  let text = "Another passage";
  function lambda() {
    function transform(hash) {
      let size = list_size(run);
      let count = add(size, 1);
      let key = app_shared_bible_verses_count_hash_key();
      property_set(hash, key, count);
    }
    html_hash_transform_reload(transform);
  }
  let component = app_shared_button(parent, text, lambda);
  return component;
}
