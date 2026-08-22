import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_title } from "./song_image_couplets_title.mjs";
import { song_page_address } from "./song_page_address.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function song_image_couplets_page_elsewhere() {
  "The lines that stand under the references and say where their words actually are: one sentence, and then the address of this hymn's own page.";
  "THIS IS WHAT KEEPS A NAMED REFERENCE FROM BEING A DEAD END. A description that names passages and stops has handed the reader a list of places to go and no way of getting there, and under a song nearly nobody goes and looks. The page has every passage written out beneath the line it belongs to, and what the line means as well, which no description was ever going to hold.";
  "It points at a page rather than at the other songs, because a page can be made longer and a description cannot - what will not fit under a video is not a problem to be worked around once, it is a ceiling that gets lower every time the hymn is explained better.";
  arguments_assert(arguments, 0);
  let title = song_image_couplets_title();
  let address = song_page_address(title);
  let heading =
    "Open this link for the lyrics, the verse references, and the full verses written out:";
  let r = list_join_newline([heading, address]);
  return r;
}
