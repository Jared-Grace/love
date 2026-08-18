import { property_get } from "./property_get.mjs";
import { memory_index_hooks_compress_line_ceiling } from "./memory_index_hooks_compress_line_ceiling.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
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
export function memory_index_hooks_compress_line(lines) {
  arguments_assert(arguments, 1);
  let r2 = memory_index_hooks_compress_line_ceiling();
  let ceiling = property_get(r2, "ceiling");
  let opener = property_get(r2, "opener");
  let link_open = property_get(r2, "link_open");
  let dash = property_get(r2, "dash");
  let kept = property_get(r2, "kept");
  let shortened = [];
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
