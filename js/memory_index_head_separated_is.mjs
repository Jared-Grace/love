import { text_ends_with_any } from "./text_ends_with_any.mjs";
import { text_trim } from "./text_trim.mjs";
export function memory_index_head_separated_is(head) {
  "Whether the part of an index line before its first link ends the way a list of links is introduced, rather than in the middle of a sentence.";
  "This is the question that decides whether a line may be rebuilt as its own hook plus the links it carries. Rebuilding drops everything after the first link, which is right when what follows is a list and wrong when the link is a word in the sentence - and the two look identical until the ending is asked about.";
  "Three real lines were broken before this was asked. One read BOUNDED by, then a link, and came back as BOUNDED by followed by a semicolon and the link, which is a sentence with its object taken out. One read plain twin, and kept its comma in front of the new separator. One opened a bracket that the dropped text was going to close, so the line was left with the bracket standing open.";
  "A comma and a semicolon are both ways of saying more of the same follows. The long dash is the third, and it is how every hook in this index begins, so a line whose links are its whole hook ends its head there.";
  let squeezed = text_trim(head);
  let separators = [";", ",", "—"];
  let ends = text_ends_with_any(squeezed, separators);
  return ends;
}
