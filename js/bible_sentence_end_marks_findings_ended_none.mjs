import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_difference } from "./list_difference.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
export function bible_sentence_end_marks_findings_ended_none(
  recorded,
  property_name,
  shipped,
) {
  arguments_assert(arguments, 3);
  let measured = list_map_property(recorded, property_name);
  let unmeasured = list_difference(shipped, measured);
  let departed = list_difference(measured, shipped);
  ("A bible nothing could be read from is told apart from one read and found to write no marks, because only the second is a fact about a language. The first is an errand that failed - a folder named wrongly, or a chapter that is not there - and reading it as a language without sentences is exactly the mistake the first hand measurement made with Urdu.");
  function lambda4(entry) {
    let never = property_equals(entry, "unreachable", true);
    return never;
  }
  let unreached = list_filter(recorded, lambda4);
  ("A BIBLE STORAGE HOLDS NOTHING FOR IS TAKEN OUT OF EVERY READING BELOW and named on its own, because it is one fault and it already has a gate. Its measurement names no chapter, since there was no chapter of it to name. Left in, it would read as a language that writes no marks and get itself refused a second time here - in a place whose only advice is about a list of languages, where the repair is an upload that never ran.");
  function lambda5(entry) {
    let nothing = property_equals(entry, "chapter_code", "");
    return nothing;
  }
  let unstored = list_filter(recorded, lambda5);
  function lambda6(entry) {
    let nothing = property_equals(entry, "chapter_code", "");
    let n = not(nothing);
    return n;
  }
  let stored = list_filter(recorded, lambda6);
  ("A chapter the far end never answered about is taken out of the reading below rather than counted in it, because the two say opposite things and only one of them is about a bible. Nothing read because there is nothing there is a fact somebody has to decide about; nothing read because the ask failed is this run being unfinished, and the remedy is to measure again rather than to go and look at a bible.");
  function lambda(entry) {
    let never = property_equals(entry, "unreachable", true);
    if (never) {
      return false;
    }
    let none = property_equals(entry, "read", 0);
    return none;
  }
  let unread = list_filter(stored, lambda);
  function lambda2(entry) {
    let none = property_equals(entry, "ended", 0);
    return none;
  }
  let ended_none = list_filter(stored, lambda2);
  let r = {
    unmeasured,
    departed,
    unreached,
    unstored,
    stored,
    unread,
    ended_none,
  };
  return r;
}
