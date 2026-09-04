import { list_map_filter } from "./list_map_filter.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { song_image_kept_url } from "./song_image_kept_url.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_unique } from "./list_unique.mjs";
export function song_images_kept_urls() {
  "Every picture this hymn actually has, as the addresses a browser fetches them from.";
  "A COUPLET NOBODY HAS SETTLED A PICTURE ON IS LEFT OUT rather than carried along as an empty address, because the one thing a list of addresses is asked for is how many pictures there are and where they are - and an entry that is neither is a wrong answer to both.";
  "THE SAME ADDRESS APPEARS ONCE. A line the song sings twice shares one picture file unless a second was drawn for it, so walking the couplets names some files twice; counting a file twice would tell a reader waiting on a download that there is more to wait for than there is.";
  arguments_assert(arguments, 0);
  let couplets = song_image_couplets();
  function to_url(couplet) {
    let url = song_image_kept_url(couplet.n);
    return url;
  }
  let chosen = list_map_filter(couplets, to_url, text_empty_not_is);
  let urls = list_unique(chosen);
  return urls;
}
