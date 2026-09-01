import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export function bible_audio_speech_not_started_why(spoken) {
  "$plain spoken";
  "The distinct reasons the engine gave for never beginning a chapter, read off what it said about the run, and an empty list when it never said.";
  "★ A RUN THAT UNDERDELIVERS IS USELESS TO READ WITHOUT THIS, AND THE NUMBERS ALONE CANNOT SUPPLY IT. A night that speaks thirty nine chapters of the four hundred it was given looks exactly like a night that was handed one hour and a night that spent nine hours being refused for want of memory, and those two want opposite repairs - one asks for a longer window, the other for fewer workers. Measured 2026-09-01 over three unattended nights, one such night could not be told apart from the other because the only thing written down was the count.";
  "★ THE REASONS ARE ALREADY WORKED OUT AND WERE MERELY BEING DROPPED, WHICH IS WHY THIS COSTS NOTHING. Every worker that turns a chapter away names its ground - the clock, the memory mark, or the swap mark - and the engine already gathers those into one set of distinct words. Nothing here decides anything; it carries up an answer that was being thrown away one step below the only place anybody reads.";
  "★ BEING TURNED AWAY BY THE OTHER RECORDING IS A REASON TOO, AND IT IS NOT THE ENGINE'S TO GIVE. When a run cannot get the hold it never reaches a worker at all, so no worker ever names a ground, and the chapters would come back refused for no stated reason. That case is the one the reader is most likely to meet and the least alarming of the three, so leaving it blank would make the calmest outcome look like the most broken one.";
  arguments_assert(arguments, 1);
  if (not(spoken)) {
    let unread = [];
    return unread;
  }
  let locked = property_get_or_null(spoken, "locked");
  if (locked) {
    let held = ["another recording already held the machine"];
    return held;
  }
  let reasons = property_get_or_null(spoken, "stopped_why");
  if (not(reasons)) {
    let none = [];
    return none;
  }
  return reasons;
}
