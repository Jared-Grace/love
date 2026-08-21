import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_description } from "./song_image_couplets_description.mjs";
import { youtube_description_letters_most } from "./youtube_description_letters_most.mjs";
import { song_image_couplets_description_brief } from "./song_image_couplets_description_brief.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export async function song_image_couplets_description_fitting(
  verse_number,
  elsewhere,
) {
  "$plain verse_number";
  "$plain elsewhere";
  "What can actually go under a song of this hymn: the passages written out in full where youtube will keep that many letters, and where it will not, the references named with a line saying where their words are.";
  "YOUTUBE REFUSES A LONGER DESCRIPTION OUTRIGHT rather than shortening it, so the choosing happens before the writing and not after. It builds the full one and measures it rather than judging by the number of couplets, because a guess is wrong exactly when a passage is long, which is the case being asked about.";
  "THE SHORTER FORM IS A LOSS AND IS TREATED AS ONE. A reference with no words under it asks the reader to go and find it somewhere else, which under a song nearly nobody does - so the shorter form is never returned bare, it is returned with the line that says where the words are. That is why this takes the pointing as well as the number.";
  arguments_assert(arguments, 2);
  let whole = await song_image_couplets_description(verse_number);
  let most = youtube_description_letters_most();
  let fits = less_than_equal(whole.length, most);
  if (fits) {
    return whole;
  }
  let r = song_image_couplets_description_brief(verse_number, elsewhere);
  return r;
}
