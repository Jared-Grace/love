import { app_ceb_bible_gloss_roots_disagreeing_offenders } from "./app_ceb_bible_gloss_roots_disagreeing_offenders.mjs";
import { gloss_roots_disagreeing_nearness } from "./gloss_roots_disagreeing_nearness.mjs";
export async function app_ceb_bible_gloss_roots_disagreeing_nearness(
  sample_size,
) {
  "How far every Cebuano explanation that missed its word's root came from saying it, counted at each distance, with a spread sample of the ones furthest away.";
  "This is the measurement to take before a generator prompt is changed and again after, so the two runs can be set beside each other. Reading a sample of the findings says what is wrong with them; only the counts say whether a fix worked.";
  let offenders = await app_ceb_bible_gloss_roots_disagreeing_offenders();
  let r = gloss_roots_disagreeing_nearness(offenders, sample_size);
  return r;
}
