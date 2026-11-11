import { arguments_assert } from "./arguments_assert.mjs";
import { functions_closure_source_hash } from "./functions_closure_source_hash.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { function_run_fresh_args } from "./function_run_fresh_args.mjs";
import { catch_log_async } from "./catch_log_async.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
export async function app_message_reply_proposals_shown_warm_auto() {
  arguments_assert(arguments, 0);
  ("Works out the reply rules screen's answers as soon as the rules change, so the person who opens the screen next finds them already worked out instead of waiting for them.");
  ("★ EVERY ANSWER IS KEPT UNDER A WORD FOR THE RULES' WHOLE CODE, SO ANY CHANGE TO THE RULES THROWS ALL OF THEM AWAY AT ONCE. The next opening of the screen then works every message out again: measured 2026-11-11 at ten and a half seconds cold against one and a half warm. With several agents committing to the rules all day, the person opening the screen was nearly always the one who paid it.");
  ("★ THE WORK IS DONE IN A FRESH PROCESS EACH TIME, NEVER IN THIS ONE. This loop never ends, so the code it loaded when it started is the code it would keep running - and the whole reason for a round is that the code has changed. Only the word for the code is worked out here, and that reads the files off the disk every time, so it does see a change.");
  ("It looks every five seconds. A look reads the source of the five hundred or so functions the rules reach and costs a few dozen milliseconds. Twenty seconds was tried first, but approving a change's last file puts it in the code from the button itself, and the reviewer reloads within seconds: waiting up to twenty before even starting the ten-second round meant they paid it. Measured 2026-11-11.");
  ("A round that throws is written down and the next look tries again, and the word is remembered only once a round finished, so a failed round is not mistaken for a done one.");
  let warmed = null;
  while (true) {
    async function round_take() {
      "★ THE WORD COVERS THE SCREEN AND THE LIST OF CHANGES TOO, NOT ONLY THE RULES. Each change's worked messages are kept under their own word, and a change edited or added left the rules' word the same, so the next opening tried that change while the person waited: fourteen seconds, measured 2026-11-11. A new file a change names but no rule reaches yet is still outside this word.";
      let hash = await functions_closure_source_hash([
        fn_name("reply_attempt"),
        fn_name("app_shared_message_reply_choices"),
        fn_name("app_message_reply_proposals_shown"),
      ]);
      if (equal(hash, warmed)) {
        return;
      }
      await function_run_fresh_args(
        fn_name("app_message_reply_proposals_shown"),
        [],
      );
      warmed = hash;
    }
    await catch_log_async(round_take);
    await sleep_seconds(5);
  }
}
