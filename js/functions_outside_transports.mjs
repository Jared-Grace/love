import { fn_name } from "./fn_name.mjs";
export function functions_outside_transports() {
  "The functions that go outside on behalf of a caller who chooses whether the request reads or sends - a method, or options carrying one, handed straight through.";
  "Neither refused nor harmless, because neither is true of them: refusing one refused about five thousand two hundred functions that only read, measured 2026-10-29, and marking one harmless would let the next caller that sends through it go unseen. So the gate asks about each caller instead, and this list is what tells it where to look.";
  "A name belongs here only when its own parameters carry the choice. A caller that fixes the method itself is decided as a reader or a sender like any other, and stays off this list.";
  let names = [
    fn_name("http_answer"),
    fn_name("domain_fetch_retry"),
    fn_name("http_generic_node"),
    fn_name("http_browser_bytes"),
    fn_name("http_generic"),
    fn_name("http_json"),
    fn_name("youtube_api_bytes"),
  ];
  return names;
}
