import { property_not } from "./property_not.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { g_sermon_groups_check } from "./g_sermon_groups_check.mjs";
import { property_get } from "./property_get.mjs";
import { bible_data_relative } from "./bible_data_relative.mjs";
import { firebase_mirror_upload } from "./firebase_mirror_upload.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { not } from "./not.mjs";
export async function g_sermon_groups_backup_multiple(chapters_comma) {
  "Back up the grouping of each named chapter, after checking it. The two steps were always done together by hand, and the checking is what makes the backup safe to run without being watched: only the one file this chapter's grouping lives in is ever sent, and only when the grouping in it validates.";
  "A chapter that fails its check is reported and left alone rather than uploaded. A backup of a broken grouping is worse than no backup, because the next person to reach for it trusts it.";
  let chapters = text_split_comma(chapters_comma);
  async function chapter_backup(chapter) {
    let checked = await g_sermon_groups_check(chapter);
    let ok = property_get(checked, "ok");
    if (not(ok)) {
      let refused = {
        chapter,
        uploaded: false,
        checked,
      };
      return refused;
    }
    let relative = bible_data_relative(chapter, "groups");
    await firebase_mirror_upload(relative);
    let sent = {
      chapter,
      uploaded: true,
      relative,
    };
    return sent;
  }
  let results = await list_map_async(chapters, chapter_backup);
  function uploaded_is(result) {
    let b = property_get(result, "uploaded");
    return b;
  }
  function refused_is(result) {
    let b = property_not(result, "uploaded");
    return b;
  }
  let sent_results = list_filter(results, uploaded_is);
  let refused_results = list_filter(results, refused_is);
  let r = {
    uploaded: list_map_property(sent_results, "chapter"),
    refused: refused_results,
  };
  return r;
}
