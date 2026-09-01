import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { ebible_glued_words_candidates } from "./ebible_glued_words_candidates.mjs";
export async function urdu_glued_words_candidates(half_least, parts) {
  "Every word of the Urdu bible that reads as a given number of its own words run together with the spaces missing between them, with how often the welded spelling stands there and how often the spaced one does.";
  "$plain half_least";
  "how often the rarest piece has to stand on its own elsewhere in the translation before the word is worth offering: a number, and nothing that runs. Asking it low finds more and offers more that is really one word; asking it high finds only the plainest cases.";
  "$plain parts";
  "how many words to try reading each one as: a number, and nothing that runs. Two and three are both worth asking, because the publisher's sweep welded some places twice over.";
  "Urdu is the one translation whose answer has been ruled on word by word, so it keeps a name of its own even though nothing in the reading is Urdu.";
  let bible_folder = ebible_folder_urdu();
  let candidates = await ebible_glued_words_candidates(
    bible_folder,
    half_least,
    parts,
  );
  return candidates;
}
