import { g_leader_chapter_codes_split } from "./g_leader_chapter_codes_split.mjs";
import { property_get } from "./property_get.mjs";
import { g_leader_chapter_codes_widen } from "./g_leader_chapter_codes_widen.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { g_leader_passages_least } from "./g_leader_passages_least.mjs";
export async function g_leader_chapter_codes(chapter_code) {
  "$plain chapter_code";
  "the written chapters a leader arc for this chapter may draw on: the nearest ones to it, behind it by preference, wide enough that no passage has to answer more than about six times";
  "A leader answers 216 times over one plant, which is far more than one chapter of preaching can carry without repeating itself - so the elder draws on the whole reach of the book the plant stands in, and the reach is what makes a small book like Philemon answerable at all.";
  "BEHIND FIRST, AHEAD ONLY IF BEHIND RUNS OUT. What lies behind this chapter is what the player has already met, so it is preferred every time. But a book has nothing behind its first chapter, and preferring is not the same as requiring: Acts 1 alone is seven passages against 216 turns, which is one passage every thirty-one turns. An elder saying the same seven things thirty-one times is a worse failure than an elder quoting a chapter the player has not reached yet, and unlike the second one it has no remedy. So when behind is exhausted and the pool is still short, this reaches forward, in order, and stops the moment it is wide enough - which for a first chapter is usually one or two chapters ahead, not the rest of the book.";
  "ONLY WRITTEN CHAPTERS COUNT. The reach names books, not preaching, and most of the canon has none written yet; an unwritten chapter in the list would be a passage set nothing can be drawn from. So the reach is asked what it may draw on and the write store is asked what there is, and the answer is the overlap.";
  "IT WIDENS EVERY BOOK, not only the four that borrow. Sixty-two books reach just themselves, and for those this still answers with more than the single chapter that used to be asked for. One chapter of Romans is about twenty passages against 216 leader turns, so an elder standing on it repeats each about eleven times whether or not the book is small. The four reaches are the case where widening within the book is not enough.";
  "IT STOPS GROWING once it is wide enough, and it grows from THIS CHAPTER BACKWARD rather than from the start of the reach. Two costs bind at opposite ends and one rule settles both. Repetition binds from below - fewer than 36 passages and an elder answers one more than six times - so the pool must reach 36. Tokens bind from above: the whole reach of Romans 16 is 377 passages and a 60 KB prompt, which buys variety past the point anyone can measure. And relevance picks WHICH chapters to drop: the plant is standing in this chapter, so the text just behind it is the text the player is living in, while Romans 1 is fifteen plants ago. Nearest-first satisfies all three at once.";
  "AN OVERSHOOT IS EXPECTED. Whole chapters are indivisible, so the one that crosses 36 is taken entire and the pool usually lands nearer 50.";
  "AN UNDERSHOOT MEANS THE TEXT IS NOT WRITTEN YET, and no rule here can fix it - once both directions are exhausted there is nothing left to reach for. That is now the only way to land above the band, which makes a short answer a content finding rather than a tuning question: 1TI has two chapters written and 23 passages between them, and JUD reaches 2JN and 3JN but neither is written. Ask the report which chapters are still short.";
  let split = await g_leader_chapter_codes_split(chapter_code);
  let kept = property_get(split, "kept");
  let later = property_get(split, "later");
  let least = g_leader_passages_least();
  let backward = list_copy_reverse(kept);
  let taken = [];
  let total = await g_leader_chapter_codes_widen(backward, taken, 0, least);
  let nearest = list_copy_reverse(taken);
  await g_leader_chapter_codes_widen(later, nearest, total, least);
  return nearest;
}
