import { playwright_text_content } from "../../../love/public/src/playwright_text_content.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { playwright_by_tag_name } from "../../../love/public/src/playwright_by_tag_name.mjs";
export async function playwright_by_tag_name_text_contents(page, tag_name) {
  let es = await playwright_by_tag_name(page, tag_name);
  let text_contents = await list_map_unordered_async(
    es,
    playwright_text_content,
  );
  return text_contents;
}
