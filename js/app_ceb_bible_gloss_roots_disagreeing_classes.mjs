import { app_ceb_bible_gloss_roots_disagreeing } from "./app_ceb_bible_gloss_roots_disagreeing.mjs";
import { gloss_roots_disagreeing_classes } from "./gloss_roots_disagreeing_classes.mjs";
import { property_get } from "./property_get.mjs";
export async function app_ceb_bible_gloss_roots_disagreeing_classes(
  relation_wanted,
  sample_size,
) {
  "Every Cebuano explanation that named a root binisaya.com disagrees with, gathered by which root it named instead, commonest first.";
  "Which reading of the pairs to show is named first, and shallower is the one to ask for. That is the class where the explanation handed the reader a word built out of the root as though it were the root - the only one of the five that is plainly a fault, and the only one small enough to read end to end. Ask for all where the whole shape is what is wanted.";
  "This is the reading to take before deciding what to do about the findings. The count of them says how many sightings there are and nothing about how many faults, because one word met once a verse counts as hundreds. What comes back here says how many distinct disagreements there are, how far apart each pair of words stands, and which of them are worth a person's time.";
  let disagreeing = await app_ceb_bible_gloss_roots_disagreeing();
  let offenders = property_get(disagreeing, "offenders");
  let r = gloss_roots_disagreeing_classes(
    offenders,
    relation_wanted,
    sample_size,
  );
  return r;
}
