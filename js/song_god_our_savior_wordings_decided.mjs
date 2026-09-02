import { arguments_assert } from "./arguments_assert.mjs";
import { song_god_our_savior_references } from "./song_god_our_savior_references.mjs";
import { app_music_bible_default_version } from "./app_music_bible_default_version.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { property_get } from "./property_get.mjs";
import { song_wordings_decided } from "./song_wordings_decided.mjs";
import { song_god_our_savior_reference_lines } from "./song_god_our_savior_reference_lines.mjs";
export async function song_god_our_savior_wordings_decided() {
  arguments_assert(arguments, 0);
  ("Which translation each passage of God Our Savior has won for itself, read against the lines that rest on it, filed under the song's own name.");
  ("THIS SONG'S CHOICES ARE ALREADY WRITTEN DOWN, WHICH IS WHY THIS IS WORTH RUNNING. Twenty five of its hundred and one passages are quoted from some translation other than the page's usual one, chosen by this same counting before the counting was shared code. Running it again is how the sharing gets checked - a reading that no longer agrees with what is on the page means the move onto shared code changed the answer, and nothing else would have said so.");
  ("WHAT AGREEMENT LOOKS LIKE IS NOT THAT THE TWENTY FIVE COME BACK AS CHOSEN. Three of the tiers the entries were settled by are counted here and one is not - where two wordings say the same number of the line's words in a row and the same number anywhere at all, which of them is the older sounding and plainer one was decided by a person. Those passages come back under tied rather than chosen. So agreement is that every one of the twenty five is under chosen or tied, and that none of them is under unchanged - unchanged would mean the page is quoting a translation that says no more of the line than the usual one, which is the one thing the counting was there to prevent.");
  ("RUN 2026-09-02 IT AGREED ABOUT TWENTY THREE OF THE TWENTY FIVE AND NAMED THE OTHER TWO. One passage came back chosen, twenty two came back tied - which is the shape the paragraph above predicts, because a person picked the older sounding wording off each shortlist. Romans eight thirty four and Psalm thirty twelve came back unchanged, meaning the usual bible says as much of those lines as the translation the page names, so those two entries are upkeep bought for nothing unless a person hears a difference the counting cannot. Two more, Revelation fifteen three and Ephesians two four to five, are quoted from a translation the counting does not put among the loudest at all.");
  let references = song_god_our_savior_references();
  let usual = app_music_bible_default_version();
  let property_name = bible_folder_key();
  let bible_folder_usual = property_get(usual, property_name);
  let filed = await song_wordings_decided(
    "god_our_savior",
    references,
    song_god_our_savior_reference_lines,
    bible_folder_usual,
  );
  return filed;
}
