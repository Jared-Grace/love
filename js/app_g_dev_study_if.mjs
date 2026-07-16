import { html_hash_get } from "./html_hash_get.mjs";
import { app_g_view_get } from "./app_g_view_get.mjs";
import { app_g_view_set } from "./app_g_view_set.mjs";
import { app_g_view_kind_study } from "./app_g_view_kind_study.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_dev_study_if() {
  let hash = html_hash_get();
  let is_study_hash = hash === "#study";
  if (not(is_study_hash)) {
    return;
  }
  let view = await app_g_view_get();
  let already_study = false;
  let present = not(null_is(view));
  if (present) {
    already_study = property_get(view, "kind") === app_g_view_kind_study();
  }
  if (not(already_study)) {
    await app_g_view_set({
      kind: app_g_view_kind_study(),
      text: "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds",
      word_index: 0,
    });
  }
}
