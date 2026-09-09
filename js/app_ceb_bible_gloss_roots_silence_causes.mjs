import { app_ceb_bible_gloss_roots_silence_causes_classes_read } from "./app_ceb_bible_gloss_roots_silence_causes_classes_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_roots_silence_causes(sample_size) {
  "The disagreements the dictionary said nothing about, split by why it said nothing, with the ones already answerable on this machine listed out.";
  "Four fifths of the sightings gathered end in silence, and a pile that size gets read as one thing and planned for as one thing. It is not one thing. Roughly half of it is words the dictionary has never been asked about, which closes by going and asking. Roughly the other half is words it holds and carries no breakdown of, which never closes that way at all - asking a second time fetches the same page. A plan made from the total alone spends half its effort where no effort can land.";
  "The smallest of the three is the one to act on first and the only one costing nothing. Those are words the dictionary does hold, under one of the two spellings Cebuano gives a sound, and was asked in the other. The answer is already on the machine, so they are listed out here rather than counted, commonest first.";
  "A word reached under the other spelling is asked every question a directly held word is asked before it is called answerable, because an entry that is free to reach and carries no breakdown of its own has moved nobody nearer an answer. Counting those as winnable overstated the free part of this by a third when it was first measured by hand.";
  "The count of silent sightings is gathered on its own pass rather than by adding the causes up, so the two can disagree. If they ever do, a cause is being missed and the split is not the whole of the silence it claims to divide.";
  "This says nothing about the disagreements the dictionary did answer. Those are a queue of their own and a different reader gathers them.";
  "$plain sample_size";
  "how many classes to draw from, said as text as readily as as a number. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let r2 =
    await app_ceb_bible_gloss_roots_silence_causes_classes_read(sample_size);
  let classes_read = property_get(r2, "classes_read");
  let classes_total = property_get(r2, "classes_total");
  let silent = property_get(r2, "silent");
  let totals = property_get(r2, "totals");
  let reachable_now = property_get(r2, "reachable_now");
  let classes_counted = property_get(r2, "classes_counted");
  let sightings = property_get(r2, "sightings");
  let silent_classes = list_size(silent);
  let silent_sightings = property_get(totals, "silent");
  let r = {
    classes_total,
    classes_read,
    silent_classes,
    silent_sightings,
    sightings,
    classes_counted,
    reachable_now,
  };
  return r;
}
