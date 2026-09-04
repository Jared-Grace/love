import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_references } from "./song_image_couplets_references.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { song_wordings_decided } from "./song_wordings_decided.mjs";
import { song_image_couplets_reference_lines } from "./song_image_couplets_reference_lines.mjs";
export async function song_image_couplets_wordings_decided() {
  arguments_assert(arguments, 0);
  ("Which translation each passage of the FATHER's SON has won for itself, read against the couplets that rest on it, filed under the song's own name.");
  ("THIS IS THE READING, NOT THE ANSWER, AND WHAT IT SETTLES IS ONLY WHAT COUNTING CAN SETTLE. It comes back in four piles - the passages one translation won outright, the passages several won together, the passages that keep the bible the song already reads, and the passages where nothing was said loudly enough to prefer anything. Only the first is decided. The second is handed over on purpose, because the third tier of the rule is the older sounding and plainer wording and no count reaches that. Whatever is decided out of any of them is written into the song's own version list, which is what the page reads; this leaves nothing behind of its own.");
  ("A PILE IS NOT A VERDICT, AND THE COUNT HAS BEEN WRONG IN BOTH DIRECTIONS HERE. Read on the fourth of September, three of the eight it had decided outright were refused on reading them - each had been won on a word the sung line is not made of, twice by a translation that says the borrowed word and drops the one the line actually sings - and all three of the ties it handed over were settled by reading. So the numbers below are where to look, not what to do.");
  ("EXPECT MOST OF IT TO COME BACK UNCHANGED, BECAUSE THIS HYMN RETELLS WHERE THE OTHER QUOTED. Its couplet on Isaiah fifty three three sings reviled and mocked, beaten and scorned, while every English bible on the list says despised and rejected - no word shared, so nothing to prefer. A hymn written to be sung beside a picture reaches for its own words, and counting shared words has nothing to say about a line that is not quoting.");
  ("THE SIXTEEN PASSAGES BOTH SONGS REST ON COME BACK HERE TOO AND MAY NOW BE ANSWERED FOR THIS HYMN ALONE. They could not be once: the translation a passage was quoted from was answered by the passage by itself, so a wording given to one song was taken off the other, and reading one song could not settle it. Each song now names its own usual bible and keeps its own exceptions, so the same verse can be quoted one way here and another way next door - which is what Luke twenty three fifty three and Acts two twenty four already do. Read them like any other passage.");
  ("WHICH BIBLE COUNTS AS THE USUAL ONE IS ASKED OF SHARED CODE RATHER THAN OF THE MUSIC PAGE, for the reason written beside the same call in the other song's reading. Unwrapping the page's default version to get at the folder inside it made a song depend on one app, and the folder is the English bible this repo ships, which shared code answers directly.");
  let references = song_image_couplets_references();
  let bible_folder_usual = ebible_folder_english();
  let filed = await song_wordings_decided(
    "image_couplets",
    references,
    song_image_couplets_reference_lines,
    bible_folder_usual,
  );
  return filed;
}
