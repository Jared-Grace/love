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
import { global_function_call_cache_async } from "./global_function_call_cache_async.mjs";
export async function app_index_gloss_coverage() {
  "How many chapters each of the language-learning apps has actually published, one row an app, asked of the bucket a reader fetches from rather than written down here.";
  "THE FRONT PAGE USED TO SPELL THIS OUT AND IT ROTTED TWICE. One card said John 1 and 1 Peter 4 on a day fifty-six chapters were up; the other said Song of Solomon, James and John 1 on a day four hundred and forty-eight were. A sentence typed once is right for a day and then quietly understates the site for a year, and it understates it to exactly the person who has never been here before.";
  "The bucket is asked rather than the folder on the machine this was built on, because those two disagree. Measured on 2026-09-06: the bucket held two chapters of Genesis the disk did not, and the disk held a chapter the bucket did not. What a reader can open is the only thing a promise on the front page is allowed to count, and the bucket is where a reader opens it from.";
  "An app whose count cannot be fetched comes back with none rather than with nothing, so a reader with no connection still gets every card and simply reads no number. The alternative was a front page that fails to draw because a bucket was unreachable, which loses fifteen apps in order to protect one clause of one sentence.";
  "The two are asked at the same time rather than one after the other. Nothing on the page is drawn behind them, so this is not about how soon a reader sees the site; it is about how long the two sentences go on being short of their number, and asking in turn doubles that wait to learn what one wait already holds. Measured 2026-09-06 from a terminal: one listing alone and both together took the same nine seconds, of which eight is a spread this repo's own node fetching sleeps and a browser does not - the request itself answered in under a second.";
  "Asked once and kept for the rest of the page's life, because the front page is drawn again from nothing every time somebody closes what the about card opens. Without keeping it, reading one paragraph and coming back would send both questions off again for an answer that cannot have changed while they were reading.";
  arguments_assert(arguments, 0);
  async function coverage_ask() {
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
        let fetched = await firebase_function_chapters_uploaded(f_name);
        return fetched;
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
  let coverage = await global_function_call_cache_async(
    app_index_gloss_coverage,
    [],
    coverage_ask,
  );
  return coverage;
}
