import { fn_name } from "./fn_name.mjs";
export function web_assets_folder_name() {
  "The one top folder every file a browser fetches as an asset lives under, in this repo. Where it sits on a disk is this repo's own business; what storage calls it is worked out from this rather than spelled again.";
  ("IT IS ONE NAME, AND THE SEPARATORS ARE THE ONLY THING THE TWO SIDES MAY DISAGREE ABOUT. A name here is written flat with underscores on the understanding that an underscore is a folder boundary that has not been drawn yet, so `web_assets` and `web/assets` are the same name written two ways. ",
    fn_name("web_assets_storage_prefix"),
    " joins the separators back up and hands storage the flat rendering, which is what lets this folder be drawn out into a tree without one address in storage moving.");
  ("SO THIS SIDE MAY MOVE AND THE STORAGE SIDE MAY NOT. Every address already handed out - a deployed page, a bookmark, anything holding a URL it was given earlier - carries the flat word in it, and changing that word strands all of them at once, the failure being a picture that quietly does not arrive rather than anything that goes red. Renaming this to a different re-rendering of the same name costs nothing; renaming it to a different name costs every asset.");
  ("The prose here used to say the two were the same word character for character. That was true before the derivation existed, and while it stood it read as a refusal to ever move this folder - which is exactly the wrong thing to believe, and was believed, on 2026-09-03, by a reader about to move it.");
  ("The permission rules give this folder away to everybody by name (storage.rules), which is what makes an address under it fetchable with nobody signed in. They are a file in another language and are derived from nothing, so they name the flat word directly and must be changed in the same breath if it ever is. A file placed OUTSIDE it uploads perfectly well and is then refused to every reader, one request at a time.");
  let folder_name = "web_assets";
  return folder_name;
}
