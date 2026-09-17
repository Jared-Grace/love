import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_character_turn } from "./app_shared_game_character_turn.mjs";
import { promise_start_unawait } from "./promise_start_unawait.mjs";
export function app_shared_game_character_turn_start(
  character,
  img,
  direction,
) {
  arguments_assert(arguments, 3);
  ("Sets somebody turning to face a new way, and hands back at once without waiting for the turn to finish.");
  ("THE TURN RUNS BESIDE WHATEVER COMES NEXT, NOT BEFORE IT. A person who turns and then walks turns while they step, and two people facing each other turn together. Waiting for the turn would add a pause to every step, and a line of people timed to walk one after another would fall out of step, because each turn is a different length.");
  ("THE FACING ITSELF IS SET AT ONCE, so everything that asks which way somebody faces gets the new answer straight away. Only the picture takes time, passing through the in-between facings.");
  ("THE JOB IS HANDED OVER RATHER THAN CALLED PLAINLY, because the auto pass would otherwise write the wait in, then make every caller wait, and walk out to their callers too.");
  async function app_shared_game_character_turning() {
    await app_shared_game_character_turn(character, img, direction);
  }
  let r = promise_start_unawait(app_shared_game_character_turning);
  return r;
}
