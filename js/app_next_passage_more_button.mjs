import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_verses_shown_hash_key } from "./app_shared_bible_verses_shown_hash_key.mjs";
import { html_hash_transform } from "./html_hash_transform.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { emoji_add } from "./emoji_add.mjs";
import { text_combine_middle_space } from "./text_combine_middle_space.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
import { add } from "./add.mjs";
export function app_next_passage_more_button(parent, context, run) {
  "The way onward for somebody who wants more than the page opened with: one more sentence's worth of verses, added to what is already there.";
  "It asks for one verse past the ones on the screen, and the page does the rest - what it opens on is always carried to the end of a sentence, so asking for the first verse of the next thought asks for the whole of it.";
  "The asking is written into the address rather than kept on the page, so what somebody is looking at after pressing this is what somebody else sees if they are sent the link.";
  "It says how much is on the screen in a word of its own, not in the word holding how many verses a reader asked each message to have. Those were one word once, and pressing this wrote its answer over the reader's setting - somebody who had chosen four verses a message and pressed twice for more came back to a page that believed they wanted eleven, with the four gone from everywhere it had been written down.";
  "The page is drawn again where it stands rather than opened again from the top. Reloading is what put the reading on the clipboard out of reach: this page copies as it finishes drawing, a browser only allows that copying just after something was pressed, and a reload throws away the pressing along with everything else. So somebody who pressed for more got the longer passage on the screen and the shorter one still on their clipboard, and found out by pasting it into a message. Drawing again keeps the press alive, and the passage they can see is the passage they are carrying.";
  "A plus in front of it, because what it does is add to what is on the screen rather than replace it - the word says so and the sign says so at a glance.";
  arguments_assert(arguments, 3);
  let sign = emoji_add();
  let text = text_combine_middle_space(sign, "Add next passage");
  async function lambda() {
    function transform(hash) {
      let size = list_size(run);
      let shown = add(size, 1);
      let key = app_shared_bible_verses_shown_hash_key();
      property_set(hash, key, shown);
    }
    html_hash_transform(transform);
    await app_shared_refresh(context);
  }
  let component = app_shared_button(parent, text, lambda);
  return component;
}
