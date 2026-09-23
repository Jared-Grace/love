import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_build } from "./app_shared_build.mjs";
import { html_public_unlisted_from_latest } from "./html_public_unlisted_from_latest.mjs";
import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
export async function html_public_unlisted_refresh_multiple(searches_comma) {
  "$plain searches_comma";
  "Builds each app named, from the source as it stands, and puts it at the unlinked address on the live site - the two steps one app already went through by hand, done for a list. Sending is left out, because one sending carries the whole folder, so a list sent once costs one upload rather than one each.";
  "Taking the list rather than finding it is on purpose: which apps are brought up to date is a choice somebody makes, and the apps already standing at that address are only where the choice usually starts.";
  arguments_assert(arguments, 1);
  async function refresh(search) {
    await app_shared_build(search);
    let copied = await html_public_unlisted_from_latest(search);
    return copied;
  }
  let r = await text_split_comma_map_async(searches_comma, refresh);
  return r;
}
