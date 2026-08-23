import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function door43_version_download_url(org, door43_folder, tag) {
  arguments_assert(arguments, 3);
  ("$plain org");
  ("$plain door43_folder");
  ("$plain tag");
  ("Where one released bible of the Door43 catalogue is kept, as a single zip holding one usfm file per book.");
  ("A released version is asked for by name rather than whatever the shelf holds today. What a bible says is the one thing about this repo that must not change underneath a reader, and a moving address would let it - the Amharic here is version seven point two, published on the twenty first of April 2022, and that is what was read, judged and licensed.");
  ("WHO PUBLISHES IT IS ASKED FOR RATHER THAN ASSUMED. Door43 is one site holding many publishers' shelves, and the shelf a bible sits on is part of its address the same way its folder is. This used to name the catalogue shelf and only that, which was right while every bible here came off it - and then the two English translations we wanted turned out to be published by unfoldingWord themselves, whose copy on the catalogue shelf has no releases at all. A pinned tag against the wrong shelf does not fetch an older text; it fetches nothing.");
  let v = text_combine_multiple([
    "https://git.door43.org/",
    org,
    "/",
    door43_folder,
    "/archive/",
    tag,
    ".zip",
  ]);
  return v;
}
