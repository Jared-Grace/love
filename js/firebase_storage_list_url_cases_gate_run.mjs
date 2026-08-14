import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_storage_list_url_cases } from "./firebase_storage_list_url_cases.mjs";
import { firebase_storage_list_url } from "./firebase_storage_list_url.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { text_url_decode } from "./text_url_decode.mjs";
import { equal } from "./equal.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function firebase_storage_list_url_cases_gate_run() {
  "QA gate: a page token still says what it said after being built into a listing address.";
  "Asks the round trip rather than the spelling. A gate written against the encoded form would have to hold a table of which characters become what, which is a second copy of the encoder and agrees with it by construction - including where both are wrong. Decoding back and comparing needs no table and cannot agree with a mistake.";
  "This costs no network. The address is built and read, never sent.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = firebase_storage_list_url_cases();
  let field = "&pageToken=";
  function answer(c) {
    let page_token = property_get(c, "page_token");
    let url = firebase_storage_list_url("bucket", "bible/guz/", page_token);
    let parts = text_split(url, field);
    let carried = parts[1];
    let read_back = text_url_decode(carried);
    let same = equal(read_back, page_token);
    return same;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "survives",
    "why",
    "storage listing address",
  );
  return r;
}
