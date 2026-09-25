import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
import { html_public_unlisted_remove } from "./html_public_unlisted_remove.mjs";
export async function html_public_unlisted_remove_multiple(searches_comma) {
  "$plain searches_comma";
  "Takes each app named away from the unlinked address on the live site, answering with what each one lost. Sending is left out, because one sending carries the whole folder.";
  "Taking the list rather than finding it is on purpose: which links somebody still holds is known to the person who handed them out, and nothing in the repo records it.";
  arguments_assert(arguments, 1);
  let r = await text_split_comma_map_async(
    searches_comma,
    html_public_unlisted_remove,
  );
  return r;
}
