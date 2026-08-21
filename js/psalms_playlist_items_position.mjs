import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { psalms_passage_order_key } from "./psalms_passage_order_key.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_size } from "./list_size.mjs";
export function psalms_playlist_items_position(items, passage) {
  "$plain items";
  "$plain passage";
  "Where in a chapter's playlist a passage belongs, counted as the number of songs that should be read before it.";
  "It is worked out by walking the playlist as it actually stands and stopping at the first song that ought to come after this one, rather than by counting how many songs ought to come before it. The two give the same answer only while the playlist is already in order, and the first gives a sensible answer either way - a song put where this says will read correctly against its neighbours even in a playlist that is otherwise a mess.";
  "A song whose name says nothing about a passage is walked past rather than stopped at. Something is sitting in the playlist that this cannot read, and the honest thing is to make no claim about where it belongs rather than to guess an order from a name that does not carry one.";
  "Nothing to stop at means the end. A passage later than everything in the playlist, and an empty playlist, both come out as the number of songs there are, which is the place after the last of them.";
  arguments_assert(arguments, 2);
  let key = psalms_passage_order_key(passage);
  let position = 0;
  for (let item of items) {
    let title = property_get(item, "title");
    let held = psalms_title_passage(title);
    let unreadable = null_is(held);
    if (not(unreadable)) {
      let key_held = psalms_passage_order_key(held);
      let after = greater_than(key_held, key);
      if (after) {
        return position;
      }
    }
    position = position + 1;
  }
  let r = list_size(items);
  return r;
}
