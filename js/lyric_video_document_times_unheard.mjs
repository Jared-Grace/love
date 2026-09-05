import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_document_times_unheard(chapter, why) {
  "$plain chapter";
  "$plain why";
  "The answer a chapter comes back with when no listening happened at all, saying which chapter it was and in one sentence what stopped it.";
  "★ THE THREE THINGS THAT CAN STOP IT DIFFER BY ONE SENTENCE AND NOTHING ELSE, WHICH IS WHY THEY ARE ONE ANSWER HERE. No singing of the chapter on this machine, no timing document to write into, and a recording neither reading could get through are three different disappointments to a person and the same fact to a caller: nothing was heard, nothing was written, and every number that would have been measured is missing. Writing them out separately made the sentence look like the only thing being decided, when it is the only thing that differs.";
  "★ EVERY NUMBER IS PRESENT AND EMPTY RATHER THAN LEFT OUT. A caller gathering these across the whole psalter reads the same words off every answer, so a chapter that was never heard lines up in a table beside one that was instead of tearing a hole in it, and asking for a match rate that does not exist gives back nothing rather than a word about a field.";
  arguments_assert(arguments, 2);
  let r = {
    chapter,
    heard: false,
    wrote: false,
    why,
    confidence: null,
    flagged: null,
    lines: null,
    match_rate: null,
  };
  return r;
}
