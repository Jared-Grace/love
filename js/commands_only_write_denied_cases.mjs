import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function commands_only_write_denied_cases() {
  "A setting of the commands-only switch and a place in the repo, with whether an editing tool pointed there is refused, written down rather than derived.";
  "The refusals are the half that matters. A switch that refused everything would pass any corpus made only of things it should refuse, and would also stop the one route left for writing the command that the refusal is asking for - so every setting carries the places it must go on allowing, beside the places it must stop.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      level: "off",
      path: text_combine_multiple(["js/", fn_name("list_first"), ".mjs"]),
      denied: false,
      why: "the way the folder worked before the switch existed, and the way it works again the moment the switch is turned back",
    },
    {
      level: "js",
      path: text_combine_multiple(["js/", fn_name("list_first"), ".mjs"]),
      denied: true,
      why: "the repo's own javascript, which is exactly what a named transform can change and a text edit should not",
    },
    {
      level: "js",
      path: "notes/transforms.md",
      denied: false,
      why: "prose has no tree to transform, so at this setting it is still written by hand",
    },
    {
      level: "js",
      path: "data/guard_cases.json",
      denied: false,
      why: "the same, for the written-down corpora - this setting is about javascript only",
    },
    {
      level: "js",
      path: "scripts/temp/list_middle.mjs",
      denied: false,
      why: "the drafting place: a new atom is written here by hand and promoted by a command, which is the way out of the switch that is not turning it off",
    },
    {
      level: "files",
      path: "notes/transforms.md",
      denied: true,
      why: "at this setting every file in the repo goes through a command, prose included",
    },
    {
      level: "files",
      path: "scripts/temp/list_middle.mjs",
      denied: false,
      why: "the drafting place stays open at every setting, or the switch would leave no way to write the command it is asking for",
    },
    {
      level: "files",
      path: text_combine_multiple(["js/", fn_name("list_first"), ".mjs"]),
      denied: true,
      why: "everything the weaker setting refuses, the stronger one refuses too",
    },
  ];
  return cases;
}
