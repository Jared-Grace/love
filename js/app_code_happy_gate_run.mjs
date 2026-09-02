import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_url_dev } from "./app_shared_url_dev.mjs";
import { app_code } from "./app_code.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_happy_url_walked } from "./app_code_happy_url_walked.mjs";
import { server_static_free_port_run } from "./server_static_free_port_run.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { error_json } from "./error_json.mjs";
export async function app_code_happy_gate_run() {
  "QA gate: the code course can be walked from its first screen to the note that says there are no more lessons, by somebody getting every question right";
  "It is the only gate that presses anything. Every other check here reads the code; this one runs it, in a browser, the way the one person the course is for will run it - so the faults it catches are the ones that have no shape to read for: a right answer that cannot be pressed, a Next that never appears, a lesson that throws on its way in, a review that will not let go.";
  "Until it existed, a course that could not be finished was found by trying to ship it, which is the most expensive way there is to be told.";
  "It puts up its own server over the frozen copy rather than using the one on this machine. This is the whole reason the walk can be a gate at all: a gate's answer is written down under a commit and handed to everybody who asks about that commit afterwards, and an answer reached by walking the working folder would be an answer about ten people's half-saved edits filed under a commit that never held them.";
  "What it walks is the dev bundle the commit CARRIES, which is not quite the same as the commit's own source - a peer who edits a lesson and commits without building leaves the two disagreeing, and this walks the older of them. That is the same reading the byte-ceiling gate already takes on the same files, and the honest description of what a green here means: the course as last built can be finished.";
  "It names the app it is about when it fails, so a broken course holds the code app out of a deployment and holds nothing else out. A gate that named nobody would be read as unplaceable and would stop every app on the site, for a fault in a course none of them ships.";
  "It takes about thirty-five minutes. Measured on 2026-09-02 over a walk that reached the end of the course: two thousand one hundred seconds from the call to the verdict. Every other gate here reads files and answers in seconds, so this one is not a cost among costs - it is more than twice the whole of the rest put together, and a run of the gates is taken one at a time on this machine. Whoever asks for a judgement of a commit now waits three quarters of an hour for it rather than a quarter.";
  arguments_assert(arguments, 0);
  async function walk(base) {
    let path = await app_shared_url_dev(app_code);
    let url = text_combine(base, path);
    await app_code_happy_url_walked(url);
  }
  async function served() {
    await server_static_free_port_run(walk);
  }
  let failed = await catch_error_text_or_null_async(served);
  let broken = null_not_is(failed);
  if (broken) {
    let app = fn_name("app_code");
    error_json({
      list: [
        {
          app,
          walk: failed,
        },
      ],
    });
  }
}
