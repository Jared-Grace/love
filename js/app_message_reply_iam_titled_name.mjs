import { reply_sequence_output } from "./reply_sequence_output.mjs";
import { reply_phrase_i_am } from "./reply_phrase_i_am.mjs";
import { reply_titles_ministry } from "./reply_titles_ministry.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_names } from "./reply_names.mjs";
import { app_reply_choices_name } from "./app_reply_choices_name.mjs";
export function app_message_reply_iam_titled_name() {
  let response = app_reply_choices_name();
  let names = reply_names();
  let names_once_or_more = reply_once_or_more(names);
  let titles = reply_titles_ministry();
  let iam = reply_phrase_i_am();
  let iam_titled_name = reply_sequence_output(
    [iam, titles, names_once_or_more],
    response,
  );
  return iam_titled_name;
}
