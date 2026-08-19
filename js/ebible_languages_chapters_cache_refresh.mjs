import { invoke_cache_file_refresh } from "./invoke_cache_file_refresh.mjs";
import { ebible_languages_chapters } from "./ebible_languages_chapters.mjs";
export async function ebible_languages_chapters_cache_refresh() {
  "Works out again what chapters every offered language holds, after the list of them has changed.";
  "Said as the general thing rather than spelled out again, because forget-then-work-out-again was written here in its own words and the same three lines already stand next door. Two copies of one shape do not break; they drift, and this one had drifted into the half that refuses to run twice.";
  let r = await invoke_cache_file_refresh(ebible_languages_chapters, []);
  return r;
}
