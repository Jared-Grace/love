import { ebible_licence_commercial_is } from "./ebible_licence_commercial_is.mjs";
import { ebible_versions_copyrights } from "./ebible_versions_copyrights.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_versions_commercial() {
  "Every downloaded translation this repo is free to ship and free to earn from - one record each carrying its folder its name its language and the terms it is offered on.";
  "Derived rather than written down. A list of folders typed out once would be right on the day it was typed and would say nothing when eBible changes a translation's terms underneath it.";
  let copyrights = await ebible_versions_copyrights();
  function allowed_is(copyright_read) {
    let licence = property_get(copyright_read, "licence");
    let allowed = ebible_licence_commercial_is(licence);
    return allowed;
  }
  let commercial = list_filter(copyrights, allowed_is);
  return commercial;
}
