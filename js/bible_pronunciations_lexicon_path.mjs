import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { data_given_folder } from "./data_given_folder.mjs";
export function bible_pronunciations_lexicon_path() {
  "Where the pronouncing lexicon for Bible names sits - the BibleVox lexicon as its author published it, notice and all.";
  "It is committed rather than fetched, which is the opposite of what the pronouncing dictionary beside it does, and the reason is the licence. This one is given away under terms that require its notice to travel with it, so the file that carries the notice has to be the file this repo keeps. Fetching it at run time would leave the notice on somebody else's machine and the reading standing on a name that may not answer tomorrow.";
  "It is read by scripts/py/bible_pronunciations.py, which writes it into the reader's own dictionary, and that file spells this path a second time because it is in another language and cannot import this one. If it moves, both have to move.";
  "  fetched from  https://github.com/MEAdams/BibleVox";
  "  the one file  Tools/Lexes/BibleVoxLex.scm";
  arguments_assert(arguments, 0);
  let path2 = data_given_folder();
  let path = path_join([path2, "biblevox_lexicon.scm"]);
  return path;
}
