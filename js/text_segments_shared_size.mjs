import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export function text_segments_shared_size(segments) {
  "$plain segments";
  "How many characters two compared pieces of text hold in common, counted off a comparison that has already been made rather than worked out a second time.";
  "IT READS THE OLDER SIDE, AND EITHER SIDE WOULD DO. A shared stretch is by definition the same text in both, so the newer side gives the same number by a longer route; picking one and saying which is what stops a later reader wondering whether the two could disagree.";
  "THIS IS THE NUMBER A PAIRING NEEDS AND A DRAWING DOES NOT. Drawing a comparison walks the stretches and never has to add anything up, so the count was never taken - but deciding whether two lines are the same line reworded is a question about how much of them is shared, and that cannot be answered by a list.";
  arguments_assert(arguments, 1);
  let shared_size = 0;
  for (let segment of segments) {
    let shared = property_get(segment, "shared");
    if (not(shared)) {
      continue;
    }
    let before_text = property_get(segment, "before_text");
    shared_size = shared_size + before_text.length;
  }
  return shared_size;
}
