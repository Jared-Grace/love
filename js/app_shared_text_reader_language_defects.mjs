import { app_shared_text_reader_language_defects_site } from "./app_shared_text_reader_language_defects_site.mjs";
import { app_shared_text_reader_language_pickers } from "./app_shared_text_reader_language_pickers.mjs";
import { app_shared_text_reader_language_sites } from "./app_shared_text_reader_language_sites.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_text_reader_language_drifted } from "./app_shared_text_reader_language_drifted.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export async function app_shared_text_reader_language_defects() {
  "Every place a button's saying is handed to the reader in one language and not in the others, and every place the sayings are not written out where they can be counted.";
  "The set of languages is not written down anywhere and is not asked for. It is whatever the sayings between them already offer, so the first button to gain a language asks every other button for it, and nobody has to remember to widen a list that would otherwise be the one thing left behind.";
  "The whole folder is read rather than an index of who calls what. An index is built at some moment and answers for that moment; a button added since would be missing from it, and a gate that cannot see the newest thing is red exactly when it does not matter and green exactly when it does.";
  "The saying has to stand written out at the place it is used, as words and nothing else. Worked out at the time it is wanted it could still be right, and no reading of the files could show that it was - so what cannot be counted without running the app is a defect here even when the app is fine.";
  "Where the places are and which of them count is asked elsewhere, because the change that repairs what is complained about here has to walk exactly the same set. Asked twice they could differ, and the repair would then quietly fix something other than what was named.";
  "It counts alongside the faults how many sayings came through each way of picking, starting every listed way at nothing so that a way standing at nothing is said out loud rather than left off. Nothing found has two readings here and they are opposite - a folder whose sayings are all in order, or a reading that never recognised the calls it was walking past - and the number of faults alone cannot tell those apart.";
  "A saying is counted towards its way before it is examined, so a saying with something the matter with it still proves its way was recognised. Counting after would let a whole way of picking read as unseen on the strength of the sayings that came through it being faulty, which is the opposite of what the tally is for.";
  "What the tally cannot see is a way of picking that was never listed. Those are not walked past here so much as never met, and the list of ways says so itself. This is the half of that question a count can answer: whether each way somebody did write down is actually being found.";
  let sites = await app_shared_text_reader_language_sites();
  let defects = [];
  let languages = [];
  let counted = [];
  let picked = {};
  let pickers = app_shared_text_reader_language_pickers();
  for (let picker of pickers) {
    property_set(picked, picker, 0);
  }
  app_shared_text_reader_language_defects_site(
    sites,
    picked,
    defects,
    languages,
    counted,
  );
  let drifted = app_shared_text_reader_language_drifted(counted);
  list_add_multiple(defects, drifted);
  for (let site of counted) {
    for (let code of languages) {
      let has = list_includes(site.codes, code);
      if (not(has)) {
        list_add(defects, {
          file: site.file,
          reason:
            "another button here says its piece in " +
            code +
            " and this one does not, so a reader of it meets one english word in a page of their own language",
        });
      }
    }
  }
  let r = {
    defects,
    languages,
    picked,
    sites: counted.length,
  };
  return r;
}
