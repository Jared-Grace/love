import { gloss_position_claim_joining_markers } from "./gloss_position_claim_joining_markers.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { subtract } from "./subtract.mjs";
import { gloss_passages_entries_collect_generic } from "./gloss_passages_entries_collect_generic.mjs";
import { gloss_position_claim_markers } from "./gloss_position_claim_markers.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_get_or } from "./list_get_or.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { text_markers_found } from "./text_markers_found.mjs";
export function gloss_passages_verse_position_claims(
  passages,
  text_index,
  word_key_read,
) {
  "Every word explanation in a chapter that says where its word stands among the words beside it, laid beside the words that actually stand there.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "The two readings beside this one both ask about verses - which verse a word is named in, and how many verses it stands in. Neither can see the order of words inside one line, and that is where the error this reading was built for lived: a word called the one just before another, with a third word standing between them.";
  "So what comes back names the place: how far along the passage the explanation sits, how many words the passage holds, the word on each side of it, and the word at each end of the passage. A sentence claiming to open a line is settled by seeing the place is not the first, a sentence naming the word before is settled by reading it, and a sentence saying its word is the same as the first word is settled by having the first word to compare it with.";
  "Nothing here is called wrong. A word's own parts stand in an order too, so an explanation about a prefix and a root is caught by the same phrases; a reader tells the two apart at a glance and no machine can.";
  "An explanation that says its word joins onto its neighbour is passed over even where it does use one of these phrases. Cebuano hangs a describing word onto what it describes, so such an explanation has to mention the neighbour in order to say anything at all, and what it then says is true however the line runs. Left in, they were the great bulk of everything this reading found.";
  let markers = gloss_position_claim_markers();
  let joining = gloss_position_claim_joining_markers();
  function entry_read(context) {
    let explain = property_get(context, "explain");
    let verses_key = property_get(context, "verses_key");
    let word = property_get(context, "word");
    let at = property_get(context, "at");
    let words = property_get(context, "words");
    let placing = text_markers_found(explain, markers);
    let joined = text_markers_found(explain, joining);
    let nothing_placed = list_empty_is(placing);
    let about_joining = list_empty_not_is(joined);
    let pass_over = nothing_placed || about_joining;
    if (pass_over) {
      let quiet = [];
      return quiet;
    }
    let of = list_size(words);
    let index = subtract(at, 1);
    let before = list_get_or(words, index, "");
    let after = list_get_or(words, at + 1, "");
    let first = list_get_or(words, 0, "");
    let last = list_get_or(words, subtract(of, 1), "");
    let finding = {
      verses_key,
      word,
      placing,
      at,
      of,
      before,
      after,
      first,
      last,
      explain,
    };
    let one = [finding];
    return one;
  }
  let found = gloss_passages_entries_collect_generic(
    passages,
    text_index,
    word_key_read,
    entry_read,
  );
  return found;
}
