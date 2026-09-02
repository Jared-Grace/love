import { arguments_assert } from "./arguments_assert.mjs";
import { property_equals } from "./property_equals.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { property_list_includes } from "./property_list_includes.mjs";
export function song_wordings_chosen_winners(
  wordings,
  folded_run,
  folded_shared,
  bible_folder_usual,
) {
  arguments_assert(arguments, 4);
  ("$plain wordings");
  ("$plain folded_run");
  ("$plain folded_shared");
  ("$plain bible_folder_usual");
  ("Every wording at one passage that is level with the loudest, named rather than quoted, together with whether the translation the page already reads is among them.");
  ("LEVEL MEANS LEVEL ON BOTH COUNTS AND NOT ONLY THE FIRST. Two wordings can share the same longest run and still differ in how many words they share altogether, and that second count is what separates them - so a wording matching the run alone is not a winner, and counting it as one would make every close passage look tied.");
  ("WHETHER THE USUAL TRANSLATION WON IS ANSWERED HERE RATHER THAN AFTERWARDS. The only place it can be seen is inside the winners as they are found, because a winner keeps the folders its wording belongs to; asking again afterwards would walk the same list a second time to learn what this walk already knew.");
  ("ONE WORDING CAN BELONG TO SEVERAL TRANSLATIONS, because translations that print the very same words are gathered together before any counting happens. So a passage can be won outright and still leave a person choosing which of them to name - the reader sees identical words either way, and only the credit line differs.");
  ("A WINNER IS NAMED AND NOT QUOTED, AND THAT IS WHAT LETS THE ANSWER BE READ AT ALL. What comes in carries every wording of every verse, and a wording carries the whole verse. Kept, a winner would drag that text back out with it - and where a song retells rather than quotes, every translation ties and every passage wins with all of them, so the decision for one song came to megabytes of scripture nobody asked for. Measured 2026-09-01 four runs of this ranking printed a single blank line and exited saying nothing was wrong. A decision needs the name of a translation and the folder it is kept in; the words are already on the page, fetched from that folder by the page itself, so carrying a second copy of them out of here buys nothing and cost every run so far.");
  let winners = [];
  let usual_won = false;
  for (let wording of wordings) {
    let run_same = property_equals(wording, "folded_run", folded_run);
    if (not(run_same)) {
      continue;
    }
    let shared_same = property_equals(wording, "folded_shared", folded_shared);
    if (not(shared_same)) {
      continue;
    }
    let names = property_get(wording, "names");
    let bible_folders = property_get(wording, "bible_folders");
    let named = {
      names,
      bible_folders,
    };
    list_add(winners, named);
    let usual_here = property_list_includes(
      wording,
      "bible_folders",
      bible_folder_usual,
    );
    if (usual_here) {
      usual_won = true;
    }
  }
  let won = {
    winners,
    usual_won,
  };
  return won;
}
