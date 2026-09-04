import { arguments_assert } from "./arguments_assert.mjs";
import { bible_pronunciations_lexicon_path } from "./bible_pronunciations_lexicon_path.mjs";
import { file_read } from "./file_read.mjs";
import { text_includes_assert_json } from "./text_includes_assert_json.mjs";
import { text_occurrences_count } from "./text_occurrences_count.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
export async function bible_pronunciations_gate_run() {
  "Gate: the pronouncing lexicon this repo speaks Bible names out of is still whole, and still carries the notice it was given away under.";
  "★ THE NOTICE IS A CONDITION OF USING THE FILE AT ALL, AND NOTHING ELSE IN THIS REPO LOOKS AT IT. Its terms say the copyright notice and the permission notice travel with every copy, so a copy without them is not a copy this repo is allowed to keep - and stripping a comment header out of a data file is the most ordinary tidying there is. No test reads it, no page shows it, no build would fail. This is the only thing standing between a tidy-up and a licence breach.";
  "★ IT IS COUNTED BECAUSE A VENDORED FILE IS NOT OURS TO EDIT. Five thousand six hundred and seventy-four entries is what was fetched, and the right number of entries afterwards is the same number: an edit here is either somebody trimming the file to make a search quicker, or a merge that ate a region, and both are silent. Every name in the Bible would still be said - the ones in the missing region would just go back to being sounded out letter by letter, which is how Boaz became BOZE, and nothing anywhere would say so. Re-fetching a newer BibleVox is meant to fail this and is meant to be looked at.";
  "It reads the file rather than a record of the file, so it answers about what is on the disk now.";
  arguments_assert(arguments, 0);
  let path = bible_pronunciations_lexicon_path();
  let text = await file_read(path);
  let hint =
    "the pronouncing lexicon this repo speaks Bible names out of has lost the notice it is given away under, so this copy of it is one the repo may not keep - put the header back, or fetch the file again from https://github.com/MEAdams/BibleVox";
  text_includes_assert_json(text, "Copyright (c) 2016-2017 MEAdams", {
    hint,
    path,
  });
  text_includes_assert_json(
    text,
    "The above copyright notice and this permission notice shall be included in all",
    {
      hint,
      path,
    },
  );
  let entries = text_occurrences_count(text, "lex.add.entry");
  let vendored = 5674;
  equal_assert_json(entries, vendored, {
    hint: "the pronouncing lexicon has a different number of entries than the copy that was fetched, so somebody has edited a file that is not this repo's to edit - the names in whatever went missing are back to being sounded out letter by letter, silently. Fetch it again, or, if a newer BibleVox was fetched on purpose, say so by writing the new number here",
    entries,
    vendored,
    path,
  });
  let r = {
    entries,
    path,
  };
  return r;
}
