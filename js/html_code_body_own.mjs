import { html_code_indent } from "./html_code_indent.mjs";
import { html_code_loading_splash } from "./html_code_loading_splash.mjs";
import { html_code_error_banner } from "./html_code_error_banner.mjs";
import { html_code_error_notice } from "./html_code_error_notice.mjs";
import { html_code_recorder_include } from "./html_code_recorder_include.mjs";
import { html_code_service_worker_register } from "./html_code_service_worker_register.mjs";
import { text_combine } from "./text_combine.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { text_prefix_without_try } from "./text_prefix_without_try.mjs";
import { text_suffix_without_try } from "./text_suffix_without_try.mjs";
export function html_code_body_own(body) {
  "$plain body";
  "The part of a generated page's body the app itself was given, with the pieces every page gets taken back off it.";
  "html_code opens an app's body with things it did not ask for - the loading splash, the error band, the error notice, the recorder - and closes it with the service worker line. Reading a page back has to take exactly those off again, or regenerating it wraps the wrapping. Measured 2026-08-23: one pass turned a 47 line page into 80 and a second turned those into 113, gaining a splash every time and never settling, because each pass handed the whole wrapped body back as though the app had written it.";
  "Each piece is taken off only if it is there, rather than all of them being required together, because a page on disk was written by whichever html_code was current on the day it was written. The recorder is younger than most of the pages that carry the other three, so demanding the full set would refuse every page written before it existed - which is nearly all of them.";
  "Answers nothing when not one of the pieces is there. A page like that has none of this function's output in it, so what looks like a body is somebody's own writing and a caller is right to leave it alone.";
  let indent = html_code_indent();
  let separator = text_combine("\n", indent);
  let given = [
    html_code_loading_splash(),
    html_code_error_banner(),
    html_code_error_notice(),
    html_code_recorder_include(),
  ];
  "each piece is looked for with the separator that stands in front of it, so the search is for a whole child of the body rather than for text that happens to appear inside one. The separator is put in front of the body first, which is the one thing parsing took off, so the first piece is looked for exactly like the rest of them";
  let text = text_combine(separator, body);
  let opened = text;
  function lambda(piece) {
    let line = text_combine(separator, piece);
    text = text_prefix_without_try(text, line);
  }
  each(given, lambda);
  let untouched = equal(text, opened);
  if (untouched) {
    return null;
  }
  let after = text_prefix_without_try(text, separator);
  "the service worker line comes in two forms, one that registers and one that only ever unregisters, and which of them a page carries is a fact about the app rather than about this text - so both are taken off in turn. Whichever one is not there matches nothing and leaves the text alone, so asking twice costs the second look and nothing else";
  let registers = html_code_service_worker_register(true);
  let unregisters = html_code_service_worker_register(false);
  let registers_line = text_combine(separator, registers);
  let unregisters_line = text_combine(separator, unregisters);
  let without_registers = text_suffix_without_try(after, registers_line);
  let own = text_suffix_without_try(without_registers, unregisters_line);
  return own;
}
