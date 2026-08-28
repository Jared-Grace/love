import { arguments_assert } from "./arguments_assert.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_code_spans_blanked } from "./text_code_spans_blanked.mjs";
import { text_includes } from "./text_includes.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { memory_index_head_separated_is } from "./memory_index_head_separated_is.mjs";
import { memory_index_head_tidy } from "./memory_index_head_tidy.mjs";
import { memory_wikilink_tokens } from "./memory_wikilink_tokens.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export function memory_index_hooks_compress_line_short(
  line,
  opener,
  ceiling,
  link_open,
  dash,
) {
  "One line of the memory index rewritten shorter, or nothing at all when the line is to be kept exactly as it stands.";
  "NOTHING BACK MEANS LEAVE IT ALONE, and that is one answer rather than four because the four ways a line earns its length have nothing in common except the outcome. It is a heading or a note rather than an entry. It is already short enough. It has no link in it to keep. Or what stands in front of its first link does not read as a hook that has finished, which is the one that stops a sentence being cut off mid-clause.";
  "A rewrite that came out no shorter is also nothing back, so a line can never grow here. That check is worth its lines because the head is tidied on the way through, and tidying can add a character as easily as remove one.";
  "Links are found with the line's written-out code blanked first, so a pair of brackets quoted inside a note about the index is not mistaken for a link into it.";
  arguments_assert(arguments, 5);
  let entry_is = text_starts_with(line, opener);
  let over = greater_than(line.length, ceiling);
  let masked = text_code_spans_blanked(line);
  let linked = text_includes(masked, link_open);
  let right = and(over, linked);
  let touched = and(entry_is, right);
  if (not(touched)) {
    return null;
  }
  let at = masked.indexOf(link_open);
  let head = line.slice(0, at);
  let separated = memory_index_head_separated_is(head);
  if (not(separated)) {
    return null;
  }
  let tidy = memory_index_head_tidy(head);
  let links = memory_wikilink_tokens(masked);
  function inner(stem) {
    let one = "[[" + stem + "]]";
    return one;
  }
  let spelled = links.map(inner);
  let joined = spelled.join("; ");
  let separator = "; ";
  let dashed = text_ends_with(tidy, dash);
  if (dashed) {
    separator = " ";
  }
  let short = tidy + separator + joined;
  let shorter = greater_than(line.length, short.length);
  if (not(shorter)) {
    return null;
  }
  return short;
}
