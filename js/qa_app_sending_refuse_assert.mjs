import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_search } from "./app_shared_name_search.mjs";
import { qa_app_sending_other_or_null } from "./qa_app_sending_other_or_null.mjs";
import { error_json } from "./error_json.mjs";
export async function qa_app_sending_refuse_assert(search) {
  "$plain search";
  "Refuses to build an app into the waiting folder while another process is sending that same app";
  "A send walks the files standing in that folder and then moves them up, and the walk takes hours. Nothing else stopped a build from replacing them meanwhile: on 2026-11-05 two sends in a row lost their walk this way, one of them after five hours, and neither could say so until the very end";
  "Only the same app is refused, because the files of other apps are not what is being walked. Building into the working copy for trying things out does not come through here, so it stays open throughout";
  arguments_assert(arguments, 1);
  let app_name = await app_shared_name_search(search);
  let pid = await qa_app_sending_other_or_null(app_name);
  if (equal(pid, null)) {
    return;
  }
  error_json({
    hint: text_combine_multiple([
      "this app is being sent right now, and building it would replace the files that send is walking. Build it again when the send is over; ",
      fn_name("app_shared_dev_build"),
      " is still open for trying things out",
    ]),
    app_name,
    pid,
  });
}
