import { arguments_assert } from "./arguments_assert.mjs";
import { song_wording_echo_floor } from "./song_wording_echo_floor.mjs";
import { song_wordings_chosen_passage } from "./song_wordings_chosen_passage.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function song_wordings_chosen(echoed, bible_folder_usual) {
  arguments_assert(arguments, 2);
  ("$plain echoed");
  ("$plain bible_folder_usual");
  ("A finished ranking sorted into the passages that have won themselves a translation, the passages where several translations won together and a person has to say which, the passages that keep the one the page already reads, and the passages where nothing was heard loudly enough to say anything at all.");
  ("IT DECIDES NOTHING IT CANNOT DECIDE BY COUNTING, AND SAYS SO BY HANDING THE REST BACK. The rule the music page follows has three tiers - most words shared in a row, then most words shared anywhere, then the older sounding and plainer wording. The first two are counted, so they are done here. The third is a judgement about how English sounds to a reader, which no count reaches, so a passage that gets that far comes back under tied rather than being settled by whichever happened to sort first.");
  ("QUIET IS KEPT APART FROM UNCHANGED THOUGH BOTH LEAVE THE PAGE ALONE. They leave it alone for opposite reasons - unchanged because the translation already being read is among the loudest, quiet because there was no loudest worth the name - and a count of how many passages fell each way is the plainest measure there is of whether this ranking is telling a song anything. Folded together they would report a song as settled when it had never been read.");
  ("THE USUAL TRANSLATION IS HANDED IN RATHER THAN LOOKED UP. Which bible a page reads by default is a fact about that page, and this counts words for any song on any page - so asking it to know would tie every song to one of them.");
  ("THE FOUR PILES ARE MADE BEFORE THE WALK AND THE PILE A PASSAGE FALLS IN IS ASKED FOR BY NAME, so what is left here is the walking and the filing and none of the deciding. The deciding is one passage's business and moved next door with the four paragraphs that explain it; keeping it here meant every reader of the answer's shape read thirty lines of counting first.");
  let decided = {
    chosen: [],
    tied: [],
    unchanged: [],
    quiet: [],
  };
  let minimum = song_wording_echo_floor();
  for (let passage of echoed) {
    let sorted = song_wordings_chosen_passage(
      passage,
      minimum,
      bible_folder_usual,
    );
    let kind = property_get(sorted, "kind");
    let entry = property_get(sorted, "entry");
    let pile = property_get(decided, kind);
    list_add(pile, entry);
  }
  return decided;
}
