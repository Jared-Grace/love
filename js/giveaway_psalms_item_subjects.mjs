import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_item_title } from "./giveaway_psalms_item_title.mjs";
export function giveaway_psalms_item_subjects(chapter) {
  arguments_assert(arguments, 1);
  ("$plain chapter");
  ("The words somebody searching would have to type to arrive at one box of sung psalms - from the whole Bible down to the one psalm.");
  ("★ THERE ARE SEVERAL RATHER THAN ONE, BECAUSE A SUBJECT IS THE ONLY WAY A STRANGER REACHES A BOX AND NOBODY SEARCHES AT ONE WIDTH. Giving away files that nobody can find is the same as not giving them away, and the person asking for these boxes said the point was that the content stop depending on one video site. A reader arrives from three distances - looking for the Bible, looking for the Psalms, looking for this psalm - and a single word can only answer one of those three.");
  ("★ THEY GO FROM WIDE TO NARROW, BECAUSE THAT IS THE ORDER THEY ARE SHOWN IN AND A LIST READ ALOUD SHOULD NARROW. The host prints them in the order it is given them, so the order is a sentence of a kind, and Bible then Psalms then Psalm 134 reads as a place in a book where the reverse reads as a muddle.");
  ("★ THE ONE PSALM IS NAMED BY ASKING THE TITLE RATHER THAN BY SPELLING IT AGAIN, SO A BOX'S TITLE AND ITS NARROWEST SUBJECT CANNOT COME APART. Both are the answer to which psalm is this, and two places spelling that would drift the day either is reworded - and the drift would be invisible, because each would still look right on its own.");
  ("★ THE TRANSLATION IS DELIBERATELY NOT HERE YET, THOUGH IT WOULD BE A GOOD THING TO BE FOUND BY. The name Berean Standard Bible is spelled today inside one phrase of the sentence that describes what a box holds, and that phrase's own reasoning claims to be the single place in the repo that names the giveaway's translation. Spelling it here as well would make that claim false, and two copies of a name do not break - they drift. The order of work is to lift the name into a function of its own, collapse the phrase onto it, and then name it here for free.");
  ("The psalm's number is not given as a subject on its own. A bare 134 is a word a search engine can do nothing useful with, and the psalm as a phrase already carries the number.");
  let title = giveaway_psalms_item_title(chapter);
  let subjects = ["Bible", "Psalms", title];
  return subjects;
}
