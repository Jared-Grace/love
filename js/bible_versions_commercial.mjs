import { ebible_versions_commercial } from "./ebible_versions_commercial.mjs";
import { door43_versions } from "./door43_versions.mjs";
import { sword_versions } from "./sword_versions.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_licence_commercial_is } from "./ebible_licence_commercial_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_concat } from "./list_concat.mjs";
export async function bible_versions_commercial() {
  "Every translation on this machine, from any of the catalogues, that this repo is free to ship and free to earn from - one record each carrying at least its folder and the terms it is offered on.";
  "Every catalogue, because a source is a way of getting a text and not a different kind of duty owed for it. Asking only eBible left a Door43 translation looking like a text nobody here had read any terms for, which is refused - so a bible carrying a plain permission on its own shelf was treated as forbidden.";
  "The terms are read the same way for all of them. A licence is a licence whichever page it was printed on, so the one reading of what may be shipped answers for the whole shelf rather than once per catalogue.";
  let ebible = await ebible_versions_commercial();
  let door = door43_versions();
  let sword = sword_versions();
  function allowed_is(version) {
    let licence = property_get(version, "licence");
    let allowed = ebible_licence_commercial_is(licence);
    return allowed;
  }
  let door43_commercial = list_filter(door, allowed_is);
  let sword_commercial = list_filter(sword, allowed_is);
  let named = list_concat(ebible, door43_commercial);
  let versions = list_concat(named, sword_commercial);
  return versions;
}
