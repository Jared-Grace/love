import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_message_reply_proposals_shown_saved_path } from "./app_message_reply_proposals_shown_saved_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { app_message_reply_proposals_shown_hash } from "./app_message_reply_proposals_shown_hash.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { equal } from "./equal.mjs";
import { function_run_fresh_args } from "./function_run_fresh_args.mjs";
import { fn_name } from "./fn_name.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
export async function app_message_reply_proposals_shown_warm_auto() {
  arguments_assert(arguments, 0);
  ("Works out the reply rules screen's answers as soon as the rules change, so the person who opens the screen next finds them already worked out instead of waiting for them.");
  ("★ EVERY ANSWER IS KEPT UNDER A WORD FOR THE RULES' WHOLE CODE, SO ANY CHANGE TO THE RULES THROWS ALL OF THEM AWAY AT ONCE. The next opening of the screen then works every message out again: measured 2026-11-11 at ten and a half seconds cold against one and a half warm. With several agents committing to the rules all day, the person opening the screen was nearly always the one who paid it.");
  ("★ THE WORK IS DONE IN A FRESH PROCESS EACH TIME, NEVER IN THIS ONE. This loop never ends, so the code it loaded when it started is the code it would keep running - and the whole reason for a round is that the code has changed. Only the word for the code is worked out here, and that reads the files off the disk every time, so it does see a change.");
  ("It looks every five seconds. A look reads the source of the five hundred or so functions the rules reach and costs a few dozen milliseconds. Twenty seconds was tried first, but approving a change's last file puts it in the code from the button itself, and the reviewer reloads within seconds: waiting up to twenty before even starting the ten-second round meant they paid it. Measured 2026-11-11.");
  ("A round that throws is written down and the next look tries again, and the word is kept only inside a finished answer, so a failed round is not mistaken for a done one.");
  ("★ THE WHOLE ANSWER IS KEPT, NOT ONLY WARMED. Warming left the screen's server still putting the answer together on every opening, over a second each time; the round now saves the finished answer and the screen only reads it.");
  ("★ A ROUND ALSO RUNS ONCE THE SAVED ANSWER IS A MINUTE OLD, EVEN WITH THE CODE UNCHANGED. The real messages and the case files are not code, so the code's word never sees them change; a minute is how far behind a new message may show.");
  while (true) {
    async function round_take() {
      let p = app_message_reply_proposals_shown_saved_path();
      if (await file_exists(p)) {
        let saved = await file_read_json(p);
        let hash = await app_message_reply_proposals_shown_hash();
        let left = date_now_milliseconds();
        let age = subtract(left, saved.when);
        if (equal(saved.hash, hash) && less_than(age, 60000)) {
          return;
        }
      }
      await function_run_fresh_args(
        fn_name("app_message_reply_proposals_shown_save"),
        [],
      );
    }
    await catch_log_async(round_take);
    await sleep_seconds(5);
  }
}
