import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_oauth_consent_url } from "./youtube_oauth_consent_url.mjs";
import { youtube_oauth_answer_wait } from "./youtube_oauth_answer_wait.mjs";
import { youtube_oauth_token_save } from "./youtube_oauth_token_save.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { log_keep } from "./log_keep.mjs";
export async function youtube_oauth_consent_run() {
  "The whole of asking once for permission to edit the channel: prints the address to open, waits for the browser to come back, trades what it brings for a token, and keeps the token.";
  "It is one name because it was only ever going to be done in one order, and because the middle of it cannot be paused - the code the browser brings back dies in minutes, so a person who ran the halves separately would find the second half refused for reasons it could not explain.";
  "What it gives back says whether it worked and never what was got. A token printed to a terminal is a token in a scrollback, in a log, and in whatever read the log afterwards, and there is no way to take it back once it has been shown.";
  "It says plainly when there is no lasting permission in the reply. Google sends that half only on a consent freshly given out loud, and a run that quietly kept an hour's worth would look identical today and be dead tomorrow.";
  arguments_assert(arguments, 0);
  let url = await youtube_oauth_consent_url();
  log_keep(
    youtube_oauth_consent_run.name,
    "Open this address, say yes, and come back here:",
  );
  log_keep(youtube_oauth_consent_run.name, url);
  let answer = await youtube_oauth_answer_wait();
  let code = property_get_or_null(answer, "code");
  if (null_is(code)) {
    let refused = {
      saved: false,
      answer,
    };
    return refused;
  }
  let r = await youtube_oauth_token_save(code);
  return r;
}
