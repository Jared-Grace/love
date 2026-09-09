import { app_ceb_bible_gloss_explains_over_pointers_set } from "./app_ceb_bible_gloss_explains_over_pointers_set.mjs";
import { app_ceb_bible_gloss_particle_explains } from "./app_ceb_bible_gloss_particle_explains.mjs";
export async function app_ceb_bible_gloss_particle_explains_apply() {
  "Write the settled wording for each named Cebuano particle over the explanations of that particle that point the reader further up, leaving every other one alone, and answer with the chapters it rewrote.";
  "It writes over a pointer and nothing else. These particles stand thousands of times between them, and while most of those places carry nothing but ‘Same as above’, some carry a wording written for the sentence it sits in. A settled wording is better than a pointer and worse than that, so the one thing that must not happen is the settled wording taking the place of both.";
  let explains = app_ceb_bible_gloss_particle_explains();
  let r = await app_ceb_bible_gloss_explains_over_pointers_set(explains);
  return r;
}
