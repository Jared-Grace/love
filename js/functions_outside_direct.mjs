import { functions_code } from "./functions_code.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
export async function functions_outside_direct() {
  "The functions whose own source goes outside this machine or starts another program without calling a repo function to do it - a browser driven by puppeteer, a web request made with fetch, a node network module, a child process, or another repo function run by its name.";
  "These are exactly what the reach walk cannot see past, because it follows only calls to repo functions. So each one has to be decided by a person once: refused, fenced, or marked harmless.";
  "It reads source as text, so a word inside a string counts as well as a call. That is the safe direction - a false match asks for one decision, a missed one lets a sender through unseen.";
  let patterns = [
    /import\(\s*["']puppeteer/,
    /(^|[^\w.])fetch\(/,
    /["'](node:)?(https?|net|tls|dgram)["']/,
    /child_process/,
    /command_line_node_(scripts|r|g|ai)\(/,
  ];
  let entries = await functions_code();
  function outside_is(entry) {
    let code = property_get(entry, "code");
    function matches(pattern) {
      let b = pattern.test(code);
      return b;
    }
    let any = patterns.some(matches);
    return any;
  }
  let names = list_filter_map_property(entries, outside_is, "name");
  return names;
}
