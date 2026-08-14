import { g_sermon_roots } from "./g_sermon_roots.mjs";
import { text_roots_unjoined } from "./text_roots_unjoined.mjs";
export async function g_sermon_words_unjoined() {
  "The written sermons' own near misses - every pair of their roots where one is the whole beginning of the other.";
  "This is the sermon-shaped door onto a reading that knows nothing about sermons. What it adds is only WHICH text to read; the judging of a pair lives once, in what it calls.";
  let roots = await g_sermon_roots();
  let unjoined = text_roots_unjoined(roots);
  return unjoined;
}
