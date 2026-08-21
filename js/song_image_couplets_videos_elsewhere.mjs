import { property_get_curried_right } from "./property_get_curried_right.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { youtube_video_address } from "./youtube_video_address.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function song_image_couplets_videos_elsewhere(hymn_videos) {
  "$plain hymn_videos";
  "The lines that tell a reader where the passages are actually written out - the hymn's verse songs, each named and with its address under it, in the order they are sung.";
  "THIS IS WHAT MAKES A NAMED REFERENCE REACHABLE. A song of the whole hymn cannot carry the passages themselves, so under it they are named only; that alone hands the reader a list of places to go and no way of getting there, and nearly nobody goes. The verse songs do carry them, so pointing at those turns the naming back into something a person can reach with one tap.";
  "It is handed the songs rather than reading the channel itself, because whoever is writing has just read the channel and a second reading could disagree with the first.";
  "A song of the whole hymn is left out of the pointing - it is the one being read, and it has nothing more to give.";
  arguments_assert(arguments, 1);
  function lambda$of_verse(hymn_video) {
    let one_verse = greater_than_equal(hymn_video.verse, 1);
    return one_verse;
  }
  let verse_videos = list_filter(hymn_videos, lambda$of_verse);
  let none = list_empty_is(verse_videos);
  if (none) {
    let nothing = "";
    return nothing;
  }
  let verse_of = property_get_curried_right("verse");
  let ordered = list_sort_number_mapper(verse_videos, verse_of);
  function lambda$said(hymn_video) {
    let address = youtube_video_address(hymn_video.video_id);
    let said = list_join_newline([hymn_video.title, address]);
    return said;
  }
  let saids = list_map(ordered, lambda$said);
  let heading =
    "Every passage named above is written out in full under the verse videos:";
  let parts = list_concat([heading], saids);
  let r = list_join_newline_2(parts);
  return r;
}
