import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { api_read_or } from "./api_read_or.mjs";
import { property_get } from "./property_get.mjs";
import { html_loading } from "./html_loading.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export async function app_g_verify_home_loading_load(chapter_code) {
  "Everything the verify page has to fetch before it can draw anything: the chapter being written, how the writing is going, where the chapter has got to, and the list of chapters there are.";
  "EACH READ IS GIVEN A STANDING-IN ANSWER rather than being allowed to fail, because the chapter may not have been started yet and an empty page is the right thing to show when it has not.";
  "THE CHAPTER BEING LOOKED AT IS PUT INTO THE LIST IF IT IS NOT THERE, so the chooser can always show where you are even before anything has been written for it.";
  arguments_assert(arguments, 1);
  let chapter = null;
  let status = null;
  let chapter_state = null;
  let chapter_codes = [];
  async function initial_load() {
    chapter = await api_read_or(
      fn_name("g_sermon_write_read"),
      [chapter_code],
      {
        chapter_code: chapter_code,
        passages: [],
      },
    );
    status = await api_read_or(
      fn_name("g_verify_status_read"),
      [chapter_code],
      {
        busy: false,
        verse: "",
        note: "",
      },
    );
    chapter_state = await api_read_or(
      fn_name("g_verify_chapter_next"),
      [chapter_code],
      {
        approved: "",
        latest: null,
        next: null,
        action: "wait",
      },
    );
    let object = await api_read_or(fn_name("g_verify_chapters_available"), [], {
      chapters: [],
    });
    chapter_codes = property_get(object, "chapters");
  }
  await html_loading(initial_load);
  let included = list_includes(chapter_codes, chapter_code);
  if (not(included)) {
    chapter_codes = chapter_codes.concat([chapter_code]).sort();
  }
  let r = {
    chapter,
    status,
    chapter_state,
    chapter_codes,
  };
  return r;
}
