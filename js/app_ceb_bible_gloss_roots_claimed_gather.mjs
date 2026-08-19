import { property_list_map_property } from "./property_list_map_property.mjs";
import { app_ceb_bible_gloss_roots_disagreeing } from "./app_ceb_bible_gloss_roots_disagreeing.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_gather } from "./binisaya_words_gather.mjs";
import { gloss_roots_disagreeing_classes } from "./gloss_roots_disagreeing_classes.mjs";
import { property_get } from "./property_get.mjs";
export async function app_ceb_bible_gloss_roots_claimed_gather() {
  "Look up on binisaya.com every root a Cebuano explanation named that the dictionary disagreed with, so that whether the dictionary knows the word can be asked rather than guessed at.";
  "Whether the named root is a word at all is the reading that decides what to do with one of these disagreements, and until the word has been asked about there is nothing to read. A word met only inside longer forms was never asked about, because the asking follows the words the verses use - so pasaylo, padayag and patalinghog were each read as a word nobody speaks purely for never having stood alone in a psalm. Eight of the ten worst-looking disagreements were that, and nothing about them was wrong.";
  "It finds its own set rather than being handed one. The disagreements are the set, they move whenever a chapter is authored, and a list typed out beside them would be right on the day it was written and quietly wrong afterwards.";
  "Asking again costs nothing. Whatever is already held is dropped before anything is fetched, so a run that was interrupted picks up where it stopped and a run with nothing left to do says so in a second.";
  "Every reading of a disagreeing pair is gathered and not only the plainly faulty one. The dictionary knowing the word is what separates a mis-cut from a smaller reading of the same word, and that separation is worth having wherever the pairs are read - the fetching is the whole cost either way, and it is paid once.";
  arguments_assert(arguments, 0);
  let disagreeing = await app_ceb_bible_gloss_roots_disagreeing();
  let offenders = property_get(disagreeing, "offenders");
  let counted = gloss_roots_disagreeing_classes(offenders, "all", 0);
  let selected_total = property_get(counted, "selected_total");
  let gathered = gloss_roots_disagreeing_classes(
    offenders,
    "all",
    selected_total,
  );
  let claimed = property_list_map_property(gathered, "classes", "claimed");
  let r = await binisaya_words_gather(claimed);
  return r;
}
