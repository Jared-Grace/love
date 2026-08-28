import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_code_spans_blanked } from "./text_code_spans_blanked.mjs";
import { text_includes } from "./text_includes.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { memory_index_head_separated_is } from "./memory_index_head_separated_is.mjs";
import { memory_index_head_tidy } from "./memory_index_head_tidy.mjs";
import { memory_wikilink_tokens } from "./memory_wikilink_tokens.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export function memory_index_hooks_compress_line_walk(
  r2,
  lines,
  link_open,
  dash,
) {
  "Walk the lines of the memory index and shorten the long ones that end in a run of links, keeping every other line exactly as it stands, and note by how much each shortened one shrank.";
  "The index is read into every session and is cut off past a size, so a line that has grown costs the lines below it their place. What a grown line has usually grown is a sentence around its links; the links themselves are the part that has to survive, because they are how anything below is reached at all.";
  "So a line is only touched when all four things hold: it is an entry rather than a heading or a note, it is over the length, it has a link in it, and what stands in front of that link reads as a hook already followed by its separator. The fourth is the one that stops a sentence being cut off mid-clause - a head with no separator means the words run into the links rather than introducing them.";
  "Links are found in the line with its written-out code blanked first, so a pair of brackets quoted inside a note about the index is not mistaken for a link into it.";
  "A rewritten line that came out no shorter is dropped and the original kept, so a line can never grow here. That check is worth its lines because the head is tidied on the way through, and tidying can add a character as easily as remove one.";
  arguments_assert(arguments, 4);
  let kept = property_get(r2, "kept");
  let shortened = property_get(r2, "shortened");
  let r3 = property_get(r2, "r3");
  let opener = property_get(r3, "opener");
  let ceiling = property_get(r3, "ceiling");
  for (let line of lines) {
    let entry_is = text_starts_with(line, opener);
    let over = greater_than(line.length, ceiling);
    let masked = text_code_spans_blanked(line);
    let linked = text_includes(masked, link_open);
    let right = and(over, linked);
    let touched = and(entry_is, right);
    if (not(touched)) {
      list_add(kept, line);
      continue;
    }
    let at = masked.indexOf(link_open);
    let head = line.slice(0, at);
    let separated = memory_index_head_separated_is(head);
    if (not(separated)) {
      list_add(kept, line);
      continue;
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
      list_add(kept, line);
      continue;
    }
    list_add(kept, short);
    let record = {
      was: line.length,
      now: short.length,
    };
    list_add(shortened, record);
  }
  let r = {
    kept,
    shortened,
  };
  return r;
}
