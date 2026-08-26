import { arguments_assert } from "./arguments_assert.mjs";
export function process_env_lines_whole() {
  arguments_assert(arguments, 0);
  ("The settings to start a second run under when what it prints is going to be read by a program rather than by a person.");
  ("A run started from here inherits everything this one was started with, and then says out loud that it wants its result whole. Without that it inherits the shortening as well, because the shortening is asked for by whoever is not the human at the keyboard - and a second run started by a program is nobody at a keyboard, so it takes the shortening meant for a reader and prints a result with its middle counted instead of said.");
  ("That shortening is harmless to read and fatal to parse. A result with a line in the middle saying how many lines were left out is not a result any more, and the parser that meets it reports a fault in the writing rather than in the reading - which is a measurement that finished, thrown away by the step that was only supposed to carry it.");
  let env = {
    ...process.env,
  };
  env.love_lines = "all";
  return env;
}
