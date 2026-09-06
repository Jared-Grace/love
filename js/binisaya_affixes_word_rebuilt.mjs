import { binisaya_affixes_pieces } from "./binisaya_affixes_pieces.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_all } from "./list_all.mjs";
import { binisaya_affix_piece_plain_is } from "./binisaya_affix_piece_plain_is.mjs";
import { not } from "./not.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { binisaya_affix_piece_put_order } from "./binisaya_affix_piece_put_order.mjs";
import { list_reduce } from "./list_reduce.mjs";
import { binisaya_affix_piece_word_put } from "./binisaya_affix_piece_word_put.mjs";
export function binisaya_affixes_word_rebuilt(root, affixes) {
  "The word binisaya.com's own breakdown makes, when every piece it names is put back onto the root it names - or nothing at all, where any piece is written in the part of the notation nobody here has decoded.";
  "Nothing is the honest answer to an unreadable breakdown, and it is not the same answer as a word that came out wrong. A piece marked as a sound change alters the root itself, so the letters that would come out cannot be worked out from the pieces at all, and a rebuild that quietly skipped it would be a made-up word presented as the site's own.";
  "A breakdown naming no pieces at all is nothing too: there is no construction there to agree or disagree with, only a root and a word sitting beside each other.";
  let pieces = binisaya_affixes_pieces(affixes);
  let none = list_empty_is(pieces);
  if (none) {
    return null;
  }
  let plain = list_all(pieces, binisaya_affix_piece_plain_is);
  let unread = not(plain);
  if (unread) {
    return null;
  }
  let ordered = list_sort_number_mapper(pieces, binisaya_affix_piece_put_order);
  let built = list_reduce(ordered, binisaya_affix_piece_word_put, root);
  return built;
}
