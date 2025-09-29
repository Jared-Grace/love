import { list_join_slash_forward } from "../../../love/public/src/list_join_slash_forward.mjs";
export function ebible_verses_upload_name(chapter_code, verse_number) {
  let joined = list_join_slash_forward([chapter_code, verse_number]);
  return joined;
}
