import { fn_name } from "./fn_name.mjs";
export function web_assets_folder_name() {
  "The one top folder every file a browser fetches as an asset lives under, in this repo. Where it sits on a disk is this repo's own business; what storage calls it is worked out from this rather than spelled again.";
  ("IT IS ONE NAME, AND THE SEPARATORS ARE THE ONLY THING THE TWO SIDES MAY DISAGREE ABOUT. A name here is written flat with underscores on the understanding that an underscore is a folder boundary that has not been drawn yet, so `web_assets` and `web/assets` are the same name written two ways. ",
    fn_name("web_assets_storage_prefix"),
    " joins the separators back up and hands storage the flat rendering, which is what lets this folder be drawn out into a tree without one address in storage moving.");
  ("THE TREE WAS DRAWN ON 2026-09-03 and this now answers with the separator in it. Not one address in storage moved, storage.rules was not touched, and nothing already handed out stopped working - which is the whole thing the derivation was written to make true, tested here for the first time.");
  ("SO THIS SIDE MAY MOVE AND THE STORAGE SIDE MAY NOT. Every address already handed out - a deployed page, a bookmark, anything holding a URL it was given earlier - carries the flat word in it, and changing that word strands all of them at once, the failure being a picture that quietly does not arrive rather than anything that goes red. Re-rendering the same name costs nothing; a different name costs every asset.");
  ("The prose here used to say the two were the same word character for character. That was true before the derivation existed, and while it stood it read as a refusal to ever move this folder - which is exactly the wrong thing to believe, and was believed, on the morning of the day it moved.");
  ("The permission rules name this word too, in storage.rules, and they are derived from nothing - they are a file in another language granting public reading to exactly the flat spelling. So they name it directly and must be changed in the same breath if the name itself ever changes. A file placed OUTSIDE it uploads perfectly well and is then refused to every reader, one request at a time.");
  let folder_name = "web/assets";
  return folder_name;
}
