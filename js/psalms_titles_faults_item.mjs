import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export function psalms_titles_faults_item(
  items,
  named_otherwise,
  passages,
  chapters,
) {
  arguments_assert(arguments, 4);
  for (let item of items) {
    let title = property_get(item, "title");
    let passage = psalms_title_passage(title);
    let unreadable = null_is(passage);
    if (unreadable) {
      let aside = {
        video_id: property_get(item, "video_id"),
        title,
      };
      list_add(named_otherwise, aside);
      continue;
    }
    let value = property_get(item, "video_id");
    property_set(passage, "video_id", value);
    property_set(passage, "title", title);
    list_add(passages, passage);
    let chapter = property_get(passage, "chapter");
    let fresh = list_includes_not(chapters, chapter);
    if (fresh) {
      list_add(chapters, chapter);
    }
  }
}
