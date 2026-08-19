import { property_exists } from "./property_exists.mjs";
import { song_image_commons_url } from "./song_image_commons_url.mjs";
export function song_image_candidate_src(candidate, width) {
  "where to fetch a candidate's picture from - a drawn one carries its own address, and a found one is named on Wikimedia Commons and is asked for at the width wanted";
  let own = property_exists(candidate, "src");
  if (own) {
    return candidate.src;
  }
  let url = song_image_commons_url(candidate.title, width);
  return url;
}
