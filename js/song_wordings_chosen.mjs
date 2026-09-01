import { list_size_equal } from "./list_size_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
export function song_wordings_chosen(echoed, bible_folder_usual) {
  arguments_assert(arguments, 2);
  ("$plain echoed");
  ("$plain bible_folder_usual");
  ("A finished ranking sorted into the passages that have won themselves a translation, the passages where several translations won together and a person has to say which, and the passages that keep the one the page already reads.");
  ("IT DECIDES NOTHING IT CANNOT DECIDE BY COUNTING, AND SAYS SO BY HANDING THE REST BACK. The rule the music page follows has three tiers - most words shared in a row, then most words shared anywhere, then the older sounding and plainer wording. The first two are counted, so they are done here. The third is a judgement about how English sounds to a reader, which no count reaches, so a passage that gets that far comes back under tied rather than being settled by whichever happened to sort first.");
  ("A PASSAGE WHOSE USUAL TRANSLATION IS ALREADY AMONG THE LOUDEST IS LEFT ALONE, and that is the same rule as tied is not better. Writing an entry there would name a second translation that says no more of the line than the one already being read, which is a hundred entries of upkeep bought for nothing.");
  ("THE USUAL TRANSLATION IS HANDED IN RATHER THAN LOOKED UP. Which bible a page reads by default is a fact about that page, and this counts words for any song on any page - so asking it to know would tie every song to one of them.");
  ("ONE WORDING CAN BELONG TO SEVERAL TRANSLATIONS, because translations that print the very same words are gathered together before any counting happens. So a passage can be won outright and still leave a person choosing which of them to name - the reader sees identical words either way, and only the credit line differs.");
  let chosen = [];
  let tied = [];
  let unchanged = [];
  for (let passage of echoed) {
    let reference = property_get(passage, "reference");
    let wordings = property_get(passage, "wordings");
    let loudest = list_first(wordings);
    let folded_run = property_get(loudest, "folded_run");
    let folded_shared = property_get(loudest, "folded_shared");
    let winners = [];
    let usual_won = false;
    for (let wording of wordings) {
      let left = property_get(wording, "folded_run");
      let run_same = equal(left, folded_run);
      if (not(run_same)) {
        continue;
      }
      let left2 = property_get(wording, "folded_shared");
      let shared_same = equal(left2, folded_shared);
      if (not(shared_same)) {
        continue;
      }
      list_add(winners, wording);
      let bible_folders = property_get(wording, "bible_folders");
      let usual_here = list_includes(bible_folders, bible_folder_usual);
      if (usual_here) {
        usual_won = true;
      }
    }
    let entry = {
      reference,
      folded_run,
      folded_shared,
      winners,
    };
    if (usual_won) {
      list_add(unchanged, entry);
      continue;
    }
    let alone = list_size_equal(winners, 1);
    if (alone) {
      list_add(chosen, entry);
      continue;
    }
    list_add(tied, entry);
  }
  let decided = {
    chosen,
    tied,
    unchanged,
  };
  return decided;
}
