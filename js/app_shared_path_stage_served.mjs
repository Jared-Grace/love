import { arguments_assert } from "./arguments_assert.mjs";
import { folder_web } from "./folder_web.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
export function app_shared_path_stage_served(relative) {
  "$plain relative";
  "The path a page at a working stage is FETCHED at, which is where it was written with the roof over the stages taken off the front - a page written at web/dev/code.html is asked for as /dev/code.html.";
  "The stage is left on and only the roof comes off, because the server mounts each stage under its own name. Taking the stage off as well would name a page at the root, where only the served folder answers.";
  "It is written once for every stage rather than once per stage. The two stages differ in the folder they are written to and in nothing else, so a second copy of this would be a second place for the roof to be spelled and a second thing to forget when it moves again.";
  arguments_assert(arguments, 1);
  let roof = folder_web();
  let served = text_prefix_without(relative, roof);
  return served;
}
