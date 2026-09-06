import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { bible_interlinear_parsings_list } from "./bible_interlinear_parsings_list.mjs";
import { gloss_parsing_sentence_hebrew } from "./gloss_parsing_sentence_hebrew.mjs";
import { list_add } from "./list_add.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
export async function gloss_parsing_hebrew_refused_ranked() {
  "Every spelled-out parsing in the Old Testament that the Hebrew reader will not say, commonest first, each beside the number of words carrying it.";
  "The Greek half of this counts words rather than whole parsings, and the difference is not a preference. A Greek parsing is a handful of separate words and a phrase for each of them composes all of them, so the words are the vocabulary and the parsings are only their arrangements. A Hebrew parsing is punctuated into facts that hold spaces inside them, so its separate words are not things anybody can write a phrase for - third and person and masculine are not three facts about a word. The whole parsing is what the reader is handed and the whole parsing is what it either says or refuses, so that is the unit counted here.";
  "It takes nothing, because there is only one testament written in Hebrew and asking which would be offering a choice that does not exist.";
  "What it finds is expected to be the source's own unfinished work rather than a gap in the table. The interlinear spells its parsings out in full nearly everywhere and then leaves a few hundred as the shorthand it meant to expand - cdc where common singular construct belongs, md where masculine dual does - along with a handful of plain corruptions. Those are deliberately left unsayable: a phrase written for one of them would be a guess printed for a reader as a fact, and this is what keeps them counted and visible instead.";
  let testament_name = ebible_testament_old_name();
  let parsings = await bible_interlinear_parsings_list(testament_name);
  let refused = [];
  for (let parsing of parsings) {
    let sentence = gloss_parsing_sentence_hebrew(parsing);
    if (sentence) {
      continue;
    }
    list_add(refused, parsing);
  }
  let ranked = list_tally_ranked(refused);
  return ranked;
}
