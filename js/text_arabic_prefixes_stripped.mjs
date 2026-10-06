import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function text_arabic_prefixes_stripped(word) {
  "$plain word";
  "The shorter words an Arabic word is also known by once the little words written onto its front come off: and (و) or so (ف), then by, like or for (ب ك ل) when the follows, then the (ال). So والعالم, and the world, is also known as العالم and عالم, the way a search for God should find the God.";
  "A piece comes off only when three letters or more stay behind. That keeps الله whole, which would otherwise be filed under له, to him, one of the commonest words there are.";
  "By, like and for come off only in front of the, because a bare ب, ك or ل also begins many whole words: كتاب, a book, would be filed under تاب, he repented.";
  "REJECTED: taking and and so off only in front of the, as with by. Then فقال, so he said, would not be found by قال, he said - the commonest way a verse begins; the cost of taking it off everywhere is a few words filed under a stem that is no word at all, which nobody types.";
  arguments_assert(arguments, 1);
  let forms = [];
  let rest = word;
  function strip(count) {
    let shorter = rest.slice(count);
    if (less_than(shorter.length, 3)) {
      return false;
    }
    rest = shorter;
    forms.push(rest);
    return true;
  }
  if (rest.startsWith("و") || rest.startsWith("ف")) {
    strip(1);
  }
  if (rest.startsWith("لل")) {
    let after = rest.slice(2);
    if (greater_than_equal(after.length, 3)) {
      forms.push("ال" + after);
      rest = after;
      forms.push(rest);
    }
  } else if (
    (rest.startsWith("ب") || rest.startsWith("ك") || rest.startsWith("ل")) &&
    rest.slice(1).startsWith("ال")
  ) {
    strip(1);
  }
  if (rest.startsWith("ال")) {
    strip(2);
  }
  return forms;
}
