import * as node_module from "module";
import { catch_null } from "./catch_null.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export function compile_cache_enable() {
  "Lets the machine keep what it compiled last time, so the next command does not compile the same files over again.";
  "Every command here is a fresh process that loads a few hundred small files before it can do anything - the seam by itself reaches 406 of them, and the line the sermon loop polls reaches 841 - and each one is read and compiled from source first. That compiling is most of what the cheapest possible command costs: a command doing nothing at all measured 0.22 s. Keeping the compiled form and reusing it took about a tenth off, measured over ten runs each way, alternating so that the ten of us sharing this machine could not tilt it.";
  "A tenth of one command is nothing; a tenth of every command is the largest saving on offer here, because the log holds 147,080 commands run through this seam since 25 July - and 115,333 of them are one poll asking the same question every few seconds.";
  "It is asked for rather than relied on. A node that does not know how hands back nothing instead of throwing, and the command then runs exactly as it did before. Nothing here can change what a command answers - only how long it takes to start.";
  "What is kept lives in the ignored folder: it is this machine's own artifact, not shared history, and it is rebuilt from the source beside it whenever that source changes.";
  let folder = folder_gitignore_join("compile_cache");
  function lambda() {
    let enable = node_module.enableCompileCache;
    let enabled = enable(folder);
    return enabled;
  }
  let r = catch_null(lambda);
  return r;
}
