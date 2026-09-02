import { greater_than_equal } from "./greater_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_wording_echo_floor } from "./song_wording_echo_floor.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_list_includes } from "./property_list_includes.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
export function song_wordings_chosen(echoed, bible_folder_usual) {
  arguments_assert(arguments, 2);
  ("$plain echoed");
  ("$plain bible_folder_usual");
  ("A finished ranking sorted into the passages that have won themselves a translation, the passages where several translations won together and a person has to say which, the passages that keep the one the page already reads, and the passages where nothing was heard loudly enough to say anything at all.");
  ("IT DECIDES NOTHING IT CANNOT DECIDE BY COUNTING, AND SAYS SO BY HANDING THE REST BACK. The rule the music page follows has three tiers - most words shared in a row, then most words shared anywhere, then the older sounding and plainer wording. The first two are counted, so they are done here. The third is a judgement about how English sounds to a reader, which no count reaches, so a passage that gets that far comes back under tied rather than being settled by whichever happened to sort first.");
  ("A PASSAGE WHERE THE LOUDEST WORDING IS STILL QUIET IS SET ASIDE BEFORE ANYTHING ELSE IS ASKED OF IT. The bar is named next door and the reading behind it is written there. What matters here is that a passage below it is not a hard case and not a tie: nothing at that passage said anything, and the three questions this asks - who won, did several win together, was the usual translation among them - all have answers there that look exactly like the answers at a passage that really was decided. Sorting it out first is what stops a run of one word being dressed up as a finding.");
  ("QUIET IS KEPT APART FROM UNCHANGED THOUGH BOTH LEAVE THE PAGE ALONE. They leave it alone for opposite reasons - unchanged because the translation already being read is among the loudest, quiet because there was no loudest worth the name - and a count of how many passages fell each way is the plainest measure there is of whether this ranking is telling a song anything. Folded together they would report a song as settled when it had never been read.");
  ("A PASSAGE WHOSE USUAL TRANSLATION IS ALREADY AMONG THE LOUDEST IS LEFT ALONE, and that is the same rule as tied is not better. Writing an entry there would name a second translation that says no more of the line than the one already being read, which is a hundred entries of upkeep bought for nothing.");
  ("THE USUAL TRANSLATION IS HANDED IN RATHER THAN LOOKED UP. Which bible a page reads by default is a fact about that page, and this counts words for any song on any page - so asking it to know would tie every song to one of them.");
  ("ONE WORDING CAN BELONG TO SEVERAL TRANSLATIONS, because translations that print the very same words are gathered together before any counting happens. So a passage can be won outright and still leave a person choosing which of them to name - the reader sees identical words either way, and only the credit line differs.");
  ("A WINNER IS NAMED AND NOT QUOTED, AND THAT IS WHAT LETS THE ANSWER BE READ AT ALL. What comes in carries every wording of every verse, and a wording carries the whole verse. Kept, a winner would drag that text back out with it - and where a song retells rather than quotes, every translation ties and every passage wins with all of them, so the decision for one song came to megabytes of scripture nobody asked for. Measured 2026-09-01 four runs of this ranking printed a single blank line and exited saying nothing was wrong. A decision needs the name of a translation and the folder it is kept in; the words are already on the page, fetched from that folder by the page itself, so carrying a second copy of them out of here buys nothing and cost every run so far.");
  let chosen = [];
  let tied = [];
  let unchanged = [];
  let quiet = [];
  let floor = song_wording_echo_floor();
  for (let passage of echoed) {
    let reference = property_get(passage, "reference");
    let wordings = property_get(passage, "wordings");
    let loudest = list_first(wordings);
    let folded_run = property_get(loudest, "folded_run");
    let folded_shared = property_get(loudest, "folded_shared");
    let heard = greater_than_equal(folded_run, floor);
    if (not(heard)) {
      let quiet_entry = {
        reference,
        folded_run,
        folded_shared,
      };
      list_add(quiet, quiet_entry);
      continue;
    }
    let winners = [];
    let usual_won = false;
    for (let wording of wordings) {
      let run_same = property_equals(wording, "folded_run", folded_run);
      if (not(run_same)) {
        continue;
      }
      let shared_same = property_equals(
        wording,
        "folded_shared",
        folded_shared,
      );
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
    quiet,
  };
  return decided;
}
