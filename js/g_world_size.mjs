import { arguments_assert } from "./arguments_assert.mjs";
export function g_world_size() {
  arguments_assert(arguments, 0);
  ("How many tiles of ground the gospel game is played on, across and down.");
  ("Nothing is laid out on it that has to fit, so this is a judgement about how far a");
  ("player should have to walk to reach the next person rather than a measurement of");
  ("anything. It is the size the game has always been.");
  let size = 25;
  return size;
}
