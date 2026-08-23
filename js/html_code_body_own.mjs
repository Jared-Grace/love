import { html_code_indent } from "./html_code_indent.mjs";
import { html_code_loading_splash } from "./html_code_loading_splash.mjs";
import { html_code_error_banner } from "./html_code_error_banner.mjs";
import { html_code_error_notice } from "./html_code_error_notice.mjs";
import { html_code_recorder_include } from "./html_code_recorder_include.mjs";
import { html_code_service_worker_register } from "./html_code_service_worker_register.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_join } from "./list_join.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_suffix_without_try } from "./text_suffix_without_try.mjs";
export function html_code_body_own(body) {
  "$plain body";
  "The part of a generated page's body the app itself was given, with the pieces every page gets taken back off it.";
  "html_code opens an app's body with four things it did not ask for - the loading splash, the error band, the error notice, the recorder - and closes it with the service worker line. Reading a page back has to take exactly those off again, or regenerating it wraps the wrapping. Measured 2026-08-23: one pass turned a 47 line page into 80 and a second turned those into 113, gaining a splash every time and never settling, because each pass handed the whole wrapped body back as though the app had written it.";
  "Answers nothing when the body does not open the way html_code leaves one. That is the useful answer rather than a complaint, because a page shaped some other way was written by hand, and everything in it is somebody's decision rather than this function's output - so the caller can refuse instead of overwriting it.";
  let indent = html_code_indent();
  let separator = text_combine("\n", indent);
  let given = [
    html_code_loading_splash(),
    html_code_error_banner(),
    html_code_error_notice(),
    html_code_recorder_include(),
  ];
  let joined = list_join(given, separator);
  let prologue = text_combine(joined, separator);
  let missing = text_starts_with_not(body, prologue);
  if (missing) {
    return null;
  }
  let after = text_prefix_without(body, prologue);
  "the service worker line comes in two forms, one that registers and one that only ever unregisters, and which of them a page carries is a fact about the app rather than about this text - so both are taken off in turn. Whichever one is not there matches nothing and leaves the text alone, so asking twice costs the second look and nothing else";
  let registers = html_code_service_worker_register(true);
  let unregisters = html_code_service_worker_register(false);
  let registers_line = text_combine(separator, registers);
  let unregisters_line = text_combine(separator, unregisters);
  let without_registers = text_suffix_without_try(after, registers_line);
  let own = text_suffix_without_try(without_registers, unregisters_line);
  return own;
}
