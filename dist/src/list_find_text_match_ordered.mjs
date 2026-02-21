import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_filter_text_match_ordered } from "../../../love/public/src/list_filter_text_match_ordered.mjs";
export function list_find_text_match_ordered(values, query) {
  let app_names = list_filter_text_match_ordered(values, query);
  let app_name = list_single(app_names);
  return app_name;
}
