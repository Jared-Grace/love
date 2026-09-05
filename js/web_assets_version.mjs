import { function_duplicate_kind_parallel } from "./function_duplicate_kind_parallel.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function web_assets_version() {
  function_duplicate_kind_parallel();
  arguments_assert(arguments, 0);
  ("The stamp carried on the end of every asset address, changed by hand whenever the assets are sent up to storage again.");
  ("IT IS WHAT LETS A PICTURE BE KEPT FOR A YEAR AND STILL BE REPLACEABLE. Storage names a file by its path and nothing else, so the address of a picture is the same address after the picture behind it has been redrawn. A browser told to keep that address for a year would keep the old drawing for a year, on every phone that had ever loaded the page, with no way to reach it. A stamp on the end makes the new drawing a new address, which the browser has never seen and so must fetch.");
  ("The promise a long cache makes is about an ADDRESS and never about a picture. That is the whole of why this exists: once the address changes with the art, promising the address will never change becomes true rather than merely convenient, and the two decisions stop being in tension.");
  ("It is one stamp for all of the assets rather than one each, because they go up together. A single number cannot describe which files changed, and it does not need to - it is bumped by the same hand that runs the upload, and a browser refetching a picture that did not change costs one load of one small file, once.");
  ("It is a DATE rather than a count, so that reading it says when the art was last sent up. A count says only that it happened some number of times, which is not a question anybody asks.");
  ("Bump it in the same commit as the upload. Bumped without an upload, browsers fetch new addresses for files that never changed; uploaded without a bump, the new art sits in storage and no phone that has been here before will ever ask for it.");
  ("A SECOND UPLOAD ON THE SAME DAY NEEDS A LETTER ON THE END, and that is not a decoration. A date alone cannot tell two uploads of one day apart, so the second one leaves every phone that already fetched the first holding the older art at an address it has been told is current - the exact failure this stamp exists to prevent, arriving on the one day somebody is redrawing quickly. So the second upload of a day is 20260905b, the third 20260905c, and the date still reads as a date.");
  let stamp = "20260905e";
  return stamp;
}
