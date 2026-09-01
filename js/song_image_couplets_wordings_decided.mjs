import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_references } from "./song_image_couplets_references.mjs";
import { app_music_bible_default_version } from "./app_music_bible_default_version.mjs";
import { property_get } from "./property_get.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { song_wordings_decided } from "./song_wordings_decided.mjs";
import { song_image_couplets_reference_lines } from "./song_image_couplets_reference_lines.mjs";
export async function song_image_couplets_wordings_decided() {
  arguments_assert(arguments, 0);
  ("Which translation each passage of the FATHER's SON has won for itself, read against the couplets that rest on it.");
  ("THE OTHER SONG'S PASSAGES WERE CHOSEN AND THIS ONE'S WERE NEVER LOOKED AT. Every one of the twenty five translations written down on the music page was chosen against God Our Savior's lines. Two of them fall on passages this hymn also rests on - Matthew twenty seven fifty nine to sixty and Luke twenty four one - and even those were picked to echo the other song. So this hymn has never had a wording chosen for it anywhere.");
  ("THE SIXTEEN PASSAGES BOTH SONGS REST ON COME BACK HERE TOO AND ARE THE ONES TO READ LAST. The page answers which translation a passage is quoted from by the passage alone, so those sixteen cannot be given a wording for this hymn without taking it away from the other song - a judgement about the two songs together rather than a reading of this one.");
  ("EXPECT MOST OF IT TO COME BACK UNCHANGED, BECAUSE THIS HYMN RETELLS WHERE THE OTHER QUOTED. Its couplet on Isaiah fifty three three sings reviled and mocked, beaten and scorned, while every English bible on the list says despised and rejected - no word shared, so nothing to prefer. A hymn written to be sung beside a picture reaches for its own words, and counting shared words has nothing to say about a line that is not quoting.");
  let references = song_image_couplets_references();
  let usual = app_music_bible_default_version();
  let property_name = bible_folder_key();
  let bible_folder_usual = property_get(usual, property_name);
  let decided = await song_wordings_decided(
    references,
    song_image_couplets_reference_lines,
    bible_folder_usual,
  );
  return decided;
}
