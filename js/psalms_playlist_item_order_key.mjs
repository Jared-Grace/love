import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { psalms_passage_order_key } from "./psalms_passage_order_key.mjs";
import { property_get } from "./property_get.mjs";
export function psalms_playlist_item_order_key(item) {
  "$plain item";
  "The number saying where one song sitting in a playlist belongs in the reading of its chapter.";
  "It is read off the name the song wears, because the name is the only thing about a sitting that says which verses it is of. Whoever calls this has already made sure every name in the playlist can be read, so a name that cannot be is a mistake rather than a case to handle - and it stops here loudly instead of sorting to some arbitrary place quietly.";
  arguments_assert(arguments, 1);
  let title = property_get(item, "title");
  let passage = psalms_title_passage(title);
  let r = psalms_passage_order_key(passage);
  return r;
}
