import { html_code_indent } from "./html_code_indent.mjs";
import { html_code_error_banner } from "./html_code_error_banner.mjs";
import { html_code_error_notice } from "./html_code_error_notice.mjs";
import { html_code_recorder_include } from "./html_code_recorder_include.mjs";
import { html_code_service_worker_register } from "./html_code_service_worker_register.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { text_size } from "./text_size.mjs";
import { text_skip } from "./text_skip.mjs";
import { add } from "./add.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { text_prefix_without_try } from "./text_prefix_without_try.mjs";
import { text_suffix_without_try } from "./text_suffix_without_try.mjs";
export function html_code_body_own(body) {
  "$plain body";
  "The part of a generated page's body the app itself was given, with the pieces every page gets taken back off it.";
  "html_code opens an app's body with things it did not ask for - the loading splash, the error band, the error notice, the recorder - and closes it with the service worker line. Reading a page back has to take exactly those off again, or regenerating it wraps the wrapping. Measured 2026-08-23: one pass turned a 47 line page into 80 and a second turned those into 113, gaining a splash every time and never settling, because each pass handed the whole wrapped body back as though the app had written it.";
  "The splash cannot be taken off by matching it, because it is drawn fresh every time it is built - its ring breathes to a run of random sizes on purpose, so the copy on a page and a copy made now are never the same text. What is found instead is the last of the pieces that ARE the same every time, and the app's own body is whatever follows it. That reaches past the splash without having to recognise it.";
  "The pieces are looked for one after another rather than all being required, because a page on disk was written by whichever html_code was current on the day it was written, and the recorder is younger than most of the pages that carry the other two.";
  "Answers nothing when not one of them is there. A page like that has nothing of this function's output in it that can be found, so what looks like a body is somebody's own writing and a caller is right to leave it alone rather than guess where it starts.";
  let indent = html_code_indent();
  let separator = text_combine("\n", indent);
  "each piece is looked for with the separator that stands in front of it, so what is found is a whole child of the body rather than text that happens to sit inside one";
  let anchors = [
    html_code_error_banner(),
    html_code_error_notice(),
    html_code_recorder_include(),
  ];
  let start = -1;
  function lambda(anchor) {
    let line = text_combine(separator, anchor);
    let index = text_index_of_try(body, line);
    let found = greater_than_equal(index, 0);
    if (found) {
      let size = text_size(line);
      start = add(index, size);
    }
  }
  each(anchors, lambda);
  let none = equal(start, -1);
  if (none) {
    return null;
  }
  let after = text_skip(body, start);
  let trimmed = text_prefix_without_try(after, separator);
  "the service worker line comes in two forms, one that registers and one that only ever unregisters, and which of them a page carries is a fact about the app rather than about this text - so both are taken off in turn. Whichever one is not there matches nothing and leaves the text alone, so asking twice costs the second look and nothing else";
  let registers = html_code_service_worker_register(true);
  let unregisters = html_code_service_worker_register(false);
  let registers_line = text_combine(separator, registers);
  let unregisters_line = text_combine(separator, unregisters);
  let without_registers = text_suffix_without_try(trimmed, registers_line);
  let own = text_suffix_without_try(without_registers, unregisters_line);
  return own;
}
