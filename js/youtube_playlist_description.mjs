import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_values_named } from "./object_property_values_named.mjs";
import { youtube_innertube_browse } from "./youtube_innertube_browse.mjs";
export async function youtube_playlist_description(playlist_id) {
  "The words written under one public youtube playlist, as a stranger would read them.";
  "Nobody is signed in for this, so a description read here is one that really did reach the people the playlist was made for. Reading it back through a door that never had the power to write it is what makes the reading worth anything.";
  arguments_assert(arguments, 1);
  let answer = await youtube_innertube_browse({
    browseId: "VL" + playlist_id,
  });
  let held = object_property_values_named(answer, "description");
  let texts = [];
  for (let item of held) {
    if (equal(typeof item, "string")) {
      texts.push(item);
      continue;
    }
    let inner = object_property_values_named(item, "content");
    for (let one of inner) {
      if (equal(typeof one, "string")) {
        texts.push(one);
      }
    }
  }
  let longest = "";
  for (let text of texts) {
    if (greater_than(text.length, longest.length)) {
      longest = text;
    }
  }
  return longest;
}
