import { reply_names_common } from "./reply_names_common.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_names() {
  "One given name, matched against every name the parser is willing to recognise.";
  "★ THIS HELD THREE WORDS UNTIL NOW, AND THEY WERE ONE REAL PERSON'S NAME. A list of names short enough to be a stub is not a stub - beside a town, a street and a country that were equally short, it was a written-down identification of somebody who had written in, sitting in a public repository. The join it should have been reading was built on 2026-09-08 and never wired up, so the whole time there was a list of two thousand one hundred and sixty five names standing right next to a list of three.";
  "Nothing about the reply changes. The answer to a message that names somebody is a fixed sentence that never repeats the name back, so the list decides only whether a message is recognised, never a word of what is said in return - which is exactly why the three could go.";
  let names = reply_names_common();
  let fn = reply_choice(names);
  return fn;
}
