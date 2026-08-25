import { arguments_assert } from "./arguments_assert.mjs";
import { playwright_by_tag_name } from "./playwright_by_tag_name.mjs";
import { playwright_text_content } from "./playwright_text_content.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export async function playwright_by_tag_name_text_contents_visible(
  page,
  tag_name,
) {
  "the words on everything of one kind that a person looking at the page right now can actually SEE";
  "The twin beside it counts what is hidden too, and on these pages that is never what somebody asking is after. Every page here bakes in an apology and a dev banner that stand hidden until a fault brings them out, and their buttons carry words like any other button does - so a reading that counts them reports a screen offering controls it is not offering, which reads as a fault where there is none and buries the two or three real controls among ones nobody can press.";
  arguments_assert(arguments, 2);
  let es = await playwright_by_tag_name(page, tag_name);
  async function text_if_seen(e) {
    let seen = await e.isVisible();
    if (seen) {
      let text = await playwright_text_content(e);
      return text;
    }
    return null;
  }
  let texts = await list_map_unordered_async(es, text_if_seen);
  let shown = list_filter_null_not_is(texts);
  return shown;
}
