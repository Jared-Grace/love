import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { song_wordings_chosen_winners } from "./song_wordings_chosen_winners.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
export function song_wordings_chosen_passage(
  passage,
  minimum,
  bible_folder_usual,
) {
  arguments_assert(arguments, 3);
  ("$plain passage");
  ("$plain minimum");
  ("$plain bible_folder_usual");
  ("Which of the four piles one passage belongs in, and the entry to file there - the name of the pile and nothing about how the piles are kept, so the caller does the keeping.");
  ("A PASSAGE WHERE THE LOUDEST WORDING IS STILL QUIET IS SET ASIDE BEFORE ANYTHING ELSE IS ASKED OF IT. The bar is named next door and the reading behind it is written there. What matters here is that a passage below it is not a hard case and not a tie: nothing at that passage said anything, and the three questions this asks - who won, did several win together, was the usual translation among them - all have answers there that look exactly like the answers at a passage that really was decided. Sorting it out first is what stops a run of one word being dressed up as a finding.");
  ("A PASSAGE WHOSE USUAL TRANSLATION IS ALREADY AMONG THE LOUDEST IS LEFT ALONE, and that is the same rule as tied is not better. Writing an entry there would name a second translation that says no more of the line than the one already being read, which is a hundred entries of upkeep bought for nothing.");
  ("A QUIET PASSAGE'S ENTRY IS SHORTER THAN THE REST, because there are no winners at it to name. The two counts are still carried, since a count of how loud the loudest was is the only thing that says whether a passage fell just short of the bar or was never anywhere near it.");
  ("THE PILE IS NAMED IN WORDS RATHER THAN CHOSEN BY THE CALLER. Four answers leave here and each one is a different pile, so handing back the entry alone would put the choosing back at the caller and spread the four rules over two functions.");
  let reference = property_get(passage, "reference");
  let wordings = property_get(passage, "wordings");
  let loudest = list_first(wordings);
  let folded_run = property_get(loudest, "folded_run");
  let folded_shared = property_get(loudest, "folded_shared");
  let heard = greater_than_equal(folded_run, minimum);
  if (not(heard)) {
    let quiet_entry = {
      reference,
      folded_run,
      folded_shared,
    };
    let quiet_sorted = {
      kind: "quiet",
      entry: quiet_entry,
    };
    return quiet_sorted;
  }
  let won = song_wordings_chosen_winners(
    wordings,
    folded_run,
    folded_shared,
    bible_folder_usual,
  );
  let winners = property_get(won, "winners");
  let usual_won = property_get(won, "usual_won");
  let entry = {
    reference,
    folded_run,
    folded_shared,
    winners,
  };
  if (usual_won) {
    let unchanged_sorted = {
      kind: "unchanged",
      entry,
    };
    return unchanged_sorted;
  }
  let alone = list_size_equal(winners, 1);
  if (alone) {
    let chosen_sorted = {
      kind: "chosen",
      entry,
    };
    return chosen_sorted;
  }
  let tied_sorted = {
    kind: "tied",
    entry,
  };
  return tied_sorted;
}
