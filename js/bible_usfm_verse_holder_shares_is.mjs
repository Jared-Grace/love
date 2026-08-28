import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_get } from "./property_get.mjs";
import { list_intersect } from "./list_intersect.mjs";
export function bible_usfm_verse_holder_shares_is(holders, version, content) {
  "Whether one bible says any meaning-carrying word of this verse the way some other bible holding the same verse says it.";
  "Sharing not one word, at a verse the others agree about, is the line the whole reading rests on - it is a statement about which passage a bible is printing rather than about how freely it translates. Translations disagree about wording constantly and still land on some content word together; landing on none of them is not a looser rendering, it is a different verse.";
  "IT STOPS AT THE FIRST BIBLE THAT SHARES A WORD, because the question is whether there is one and never how many. So a verse everybody agrees about costs a single comparison, and only a bible that really does stand apart pays for the full round.";
  "A bible is never weighed against itself. Asked whether it says its own words the way it says them, every bible alive answers yes, and the reading would find nothing anywhere.";
  arguments_assert(arguments, 3);
  for (let against of holders) {
    let itself = property_equals(against, "version", version);
    if (itself) {
      continue;
    }
    let other_content = property_get(against, "content");
    let common = list_intersect(content, other_content);
    let shared_is = list_empty_not_is(common);
    if (shared_is) {
      return true;
    }
  }
  return false;
}
