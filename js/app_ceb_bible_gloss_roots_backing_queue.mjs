import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_roots_disagreeing_classes } from "./app_ceb_bible_gloss_roots_disagreeing_classes.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_classes_backing_mark } from "./gloss_classes_backing_mark.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { gloss_classes_backing_elsewhere } from "./gloss_classes_backing_elsewhere.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_backing_queue(sample_size) {
  "The disagreements between an explanation and the dictionary, narrowed to the ones the dictionary's own walk does not account for, commonest first.";
  "Most of these disagreements are not faults. An explanation naming a root standing further back than the dictionary stopped is right whenever the dictionary itself walks from its root to the one claimed, and it says so in its own entries. Reading that walk clears a hundred and sixty one of the eight hundred and thirty sightings gathered so far, and leaves sixty three across twenty two pairs where the claim stands somewhere the walk never reaches. That is a screen of rows rather than a pile, which is the whole point of asking the question this way round.";
  "The three answers are reported beside the queue, because the queue on its own cannot say how much was cleared and how much was never asked. Six hundred and six sightings come back silent - the dictionary was asked about the words and never about their roots, so it has no walk to offer and no verdict either. Silence is not agreement, and a reader taking the short queue as the whole of what is wrong would be reading the unasked as the answered.";
  "How far the sample reached is reported beside how many classes there are, because the queue is drawn from what the sample took. Where the two numbers differ, rows were left outside and the queue is short by an unknown amount rather than complete.";
  "The dictionary is opened a second time here rather than the gathering being changed to hand it back. The gathering marks its classes its own way for its own readers, and a reading nothing has been asked to trust yet has no business altering what they already get.";
  "$plain sample_size";
  "how many classes to draw from, said as text as readily as as a number. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let everything = "all";
  let gathered = await app_ceb_bible_gloss_roots_disagreeing_classes(
    everything,
    sample_size,
  );
  let classes = property_get(gathered, "classes");
  let known = await binisaya_words_known();
  let marked = gloss_classes_backing_mark(classes, known);
  let sightings = {
    backed: 0,
    elsewhere: 0,
    silent: 0,
  };
  function backing_count_add(one_class) {
    let backing = property_get(one_class, "backing");
    let count = property_get(one_class, "count");
    let so_far = property_get(sightings, backing);
    let total = add(so_far, count);
    property_set(sightings, backing, total);
  }
  each(marked, backing_count_add);
  let queue = gloss_classes_backing_elsewhere(marked);
  let classes_total = property_get(gathered, "classes_total");
  let classes_read = list_size(marked);
  let queue_size = list_size(queue);
  let r = {
    classes_total,
    classes_read,
    sightings,
    queue_size,
    queue,
  };
  return r;
}
