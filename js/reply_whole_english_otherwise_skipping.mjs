import { reply_pieces_counted } from "./reply_pieces_counted.mjs";
import { reply_cheapest_per_position_fewest_pieces } from "./reply_cheapest_per_position_fewest_pieces.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_last } from "./reply_last.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_non_english_skipped } from "./reply_non_english_skipped.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_response_unrecognized } from "./reply_response_unrecognized.mjs";
import { reply_on_said_output_add } from "./reply_on_said_output_add.mjs";
import { reply_otherwise } from "./reply_otherwise.mjs";
export function reply_whole_english_otherwise_skipping(choices) {
  "A whole message read as one or more pieces, each piece one of the given choices - and only when that reads nothing, read again with stretches of another language allowed as pieces too.";
  "★ THE SECOND READING IS WHAT DOWNLOADS THE WORD LIST ON A PAGE, so it is only ever started for a message the rules could not read. Every message the rules already answer is read exactly as before and fetches nothing.";
  "A skipped stretch costs a hundred a word and a typo at most three, so letting the second reading run even when the first succeeded would almost never change the answer. The one place it could: a long message read with so many typos that they cost more than a hundred. Then the first reading still stands, and the skipping one is never compared with it.";
  function reading(pieces) {
    let counted = reply_pieces_counted(pieces);
    let cheapest = reply_cheapest_per_position_fewest_pieces(counted);
    let room = reply_once_or_more(cheapest);
    let last = reply_last();
    let whole = reply_sequence([room, last]);
    return whole;
  }
  let english = reading(choices);
  let skipped = reply_non_english_skipped();
  let with_skipped = reply_choice([choices, skipped]);
  let skipping_bare = reading(with_skipped);
  ("★ A REPLY READ BY SKIPPING SAYS SO, AND ONLY A REPLY THAT SAYS SOMETHING. The second reading only runs once the first read nothing, so anything it reads passed something over; the person is told part of what they wrote was not recognized. A reading that answers with nothing - an advert, a message wholly in another language - stays silent rather than being told so.");
  let unrecognized = reply_response_unrecognized();
  let skipping = reply_on_said_output_add(skipping_bare, unrecognized);
  let read = reply_otherwise(english, skipping);
  return read;
}
