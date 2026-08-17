import { ebible_languages_credits } from "./ebible_languages_credits.mjs";
import { ebible_licence_commercial_is } from "./ebible_licence_commercial_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_languages_licences_commercial_not() {
  "Every translation this app already offers a reader that is not on terms this repo may ship - the ones that forbid earning, forbid changing a word, grant nothing at all, or say nothing a machine can read.";
  "The choosing was done on the way in, so this asks the question again on the way out, of the list as it actually stands. A translation chosen by hand before the terms were being read never passed through that choosing, and nothing else looks at it again.";
  "Terms nobody could read count as failing here rather than passing. A page that names no licence at all has granted nothing that can be pointed at, and treating silence as permission is the one mistake that cannot be undone once the text has gone out.";
  "An empty answer is the good one. Anything in it is a translation to replace or to get written permission for.";
  let credits = await ebible_languages_credits();
  function commercial_not_is(credit) {
    let licence = property_get(credit, "licence");
    let allowed = ebible_licence_commercial_is(licence);
    let refused = not(allowed);
    return refused;
  }
  let found = list_filter(credits, commercial_not_is);
  return found;
}
