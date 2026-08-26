import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { not } from "./not.mjs";
import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { and } from "./and.mjs";
export function door43_version_fetchable_or_null(bible_folder) {
  "$plain bible_folder";
  "The catalogue version one bible folder names, but only where the road that fetches it can actually be walked - null everywhere else.";
  "BEING A DOOR43 BIBLE IS NOT THE WHOLE OF THE QUESTION - WHERE THIS IS RUNNING IS THE OTHER HALF, and leaving that half out is what killed a page. The road ends in downloading a release and unpacking it onto a disk, and a browser has neither the disk nor any business doing it. Both halves have to be asked together, so they are asked in one place rather than being re-assembled at each caller out of four smaller questions.";
  "It hands back the version rather than a yes or no, because a caller that may walk the road needs the version to walk it with, and a caller that may not needs nothing at all. One answer therefore serves both, and neither caller has to ask again.";
  arguments_assert(arguments, 1);
  let browser = browser_is();
  let here = not(browser);
  let door = door43_version_or_null(bible_folder);
  let elsewhere = null_not_is(door);
  let fetchable = and(elsewhere, here);
  if (fetchable) {
    return door;
  }
  return null;
}
