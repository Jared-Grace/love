import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_description_letters_most } from "./youtube_description_letters_most.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { list_concat } from "./list_concat.mjs";
import { song_image_couplets_description } from "./song_image_couplets_description.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export async function song_image_couplets_descriptions_sizes() {
  "How long the description of each song of the hymn comes out, against the most letters youtube will keep - the whole hymn first and then each verse.";
  "YOUTUBE REFUSES A LONGER DESCRIPTION OUTRIGHT rather than shortening it, so this is the question to ask before writing and not after. Writing the passages out under the references is what makes the answer close: the references alone are short whatever the song, and the words they hold are not.";
  "It builds the very descriptions that would be written rather than guessing at their size from the number of couplets, because a guess is wrong exactly when a passage is long, which is the case the number is being asked about.";
  arguments_assert(arguments, 0);
  let most = youtube_description_letters_most();
  let couplets = song_image_couplets();
  let verses = list_map_property_unique(couplets, "verse");
  let whole = 0;
  let numbers = list_concat([whole], verses);
  async function lambda$size(verse_number) {
    let description = await song_image_couplets_description(verse_number);
    let letters = description.length;
    let fits = less_than_equal(letters, most);
    let size = {
      verse: verse_number,
      letters: letters,
      fits: fits,
    };
    return size;
  }
  let sizes = await list_map_limited_async(numbers, lambda$size, 2);
  let r = {
    most: most,
    sizes: sizes,
  };
  return r;
}
