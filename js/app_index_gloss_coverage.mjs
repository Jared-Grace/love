import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { gloss_upload_namespace_original_bible } from "./gloss_upload_namespace_original_bible.mjs";
import { gloss_upload_namespace_ceb_bible } from "./gloss_upload_namespace_ceb_bible.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_function_chapters_uploaded } from "./firebase_function_chapters_uploaded.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function app_index_gloss_coverage() {
  "How many chapters each of the language-learning apps has actually published, one row an app, asked of the bucket a reader fetches from rather than written down here.";
  "THE FRONT PAGE USED TO SPELL THIS OUT AND IT ROTTED TWICE. One card said John 1 and 1 Peter 4 on a day fifty-six chapters were up; the other said Song of Solomon, James and John 1 on a day four hundred and forty-eight were. A sentence typed once is right for a day and then quietly understates the site for a year, and it understates it to exactly the person who has never been here before.";
  "The bucket is asked rather than the folder on the machine this was built on, because those two disagree. Measured on 2026-09-06: the bucket held two chapters of Genesis the disk did not, and the disk held a chapter the bucket did not. What a reader can open is the only thing a promise on the front page is allowed to count, and the bucket is where a reader opens it from.";
  "An app whose count cannot be fetched comes back with none rather than with nothing, so a reader with no connection still gets every card and simply reads no number. The alternative was a front page that fails to draw because a bucket was unreachable, which loses fifteen apps in order to protect one clause of one sentence.";
  "The two are asked at the same time rather than one after the other. They are the only thing the first screen waits on, so asking them in turn would spend two round trips of a visitor's time to learn what one round trip's worth of waiting already knows.";
  arguments_assert(arguments, 0);
  let stores = [
    {
      app_fn: fn_name("app_original_bible"),
      namespace_fn: gloss_upload_namespace_original_bible,
    },
    {
      app_fn: fn_name("app_ceb_bible"),
      namespace_fn: gloss_upload_namespace_ceb_bible,
    },
  ];
  async function store_counted(store) {
    let namespace_fn = property_get(store, "namespace_fn");
    let app_fn = property_get(store, "app_fn");
    async function chapters_ask() {
      let f_name = namespace_fn();
      let chapter_codes = await firebase_function_chapters_uploaded(f_name);
      return chapter_codes;
    }
    let chapter_codes = await catch_null_async(chapters_ask);
    let count = null;
    if (null_not_is(chapter_codes)) {
      count = list_size(chapter_codes);
    }
    let row = {
      app_fn,
      count,
    };
    return row;
  }
  let rows = await list_map_unordered_async(stores, store_counted);
  return rows;
}
