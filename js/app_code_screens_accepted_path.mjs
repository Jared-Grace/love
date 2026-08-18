import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_screens_accepted_path() {
  "where the accepted screen manifest is kept: the one crawl every later crawl is compared against";
  "the check that diffs against it and the command that replaces it both have to name the same file, and a diff pointed at one file while the accepting pointed at another would go on reporting the very changes that had just been accepted";
  "it is called accepted rather than baseline on purpose, and the word matters here rather than reading as a preference. every other record in this repo whose name holds baseline is a ratchet - a debt queue one gate reads every run and refuses to let grow - and two sweeps find that whole family by the word alone. this is not one of those. it is a snapshot a person has read and agreed to, replaced whole when they agree to the next one, and nothing about it only shrinks. wearing the family's name made it fail the family's two rules while making neither of their promises, which is how it sat red on both while being perfectly correct.";
  arguments_assert(arguments, 0);
  let path = "data/app_code_screens_baseline.json";
  return path;
}
