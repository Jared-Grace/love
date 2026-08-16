import { binisaya_affix_kinds } from "./binisaya_affix_kinds.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function gloss_explain_affix_kinds_unsupported(explain, kinds) {
  "The names for a piece of a word that an explanation uses while the dictionary gives no piece of that kind.";
  "This is the failure the root comparison is blind to. An explanation can name the right root and still say the wrong thing about it - one chapter had tapay right and called the letters in a prefix, which is a claim about where they sit and it was false. Nothing about the root catches that, because the root was never in question.";
  "It asks only whether the name appears, not whether it is attached to the right letters. A prose sentence is written for a reader and may put the name and the letters in either order or several words apart, so anything stricter would reject sentences that are right. What that costs is a word built with two kinds where the explanation swaps which letters got which name - both names are supported, so it passes. What it buys is that a name the dictionary gives no piece for cannot hide.";
  let explain_lower = text_lower_to(explain);
  let named = binisaya_affix_kinds();
  function unsupported_is(kind) {
    let said = text_includes(explain_lower, kind);
    if (not(said)) {
      return false;
    }
    let given = list_includes(kinds, kind);
    let unsupported = not(given);
    return unsupported;
  }
  let r = list_filter(named, unsupported_is);
  return r;
}
