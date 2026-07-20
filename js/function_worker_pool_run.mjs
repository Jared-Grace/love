import { repos_paths_map_unordered_combine_squash_functions } from "./repos_paths_map_unordered_combine_squash_functions.mjs";
import { import_install } from "./import_install.mjs";
import { property_get } from "./property_get.mjs";
import { identity } from "./identity.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_worker_serve } from "./function_worker_serve.mjs";
import { not } from "./not.mjs";
import { log } from "./log.mjs";
// Run a function on a warm worker instead of spawning a node process per call.
//
// Boots are paid per EDIT, not per CALL. Measured on this repo: ~5.4 API
// requests/second against ~3 file saves/minute typical (~11/minute at peak), so
// this is ~30x fewer node boots at the worst observed moment and ~100x typical.
// It also cannot do worse than the spawn-per-call it replaces: boot count is
// bounded by min(edit rate, call rate), so heavy parallel editing degrades it
// toward the old cost and never past it.
//
// Hot reload is preserved by RETIRING the pool on any watched change: a worker
// only serves code it booted with, so a fresh worker is the reload. Note the
// tempting shortcut does not work — import() cache-busting with ?v=<mtime> only
// re-evaluates the ENTRY module, while transitive deps keep their plain
// specifiers and stay cached, so editing a dependency would silently go stale.
//
// The pool watches files ITSELF rather than being signalled by the love_watch
// daemon, because that daemon may be down (see CLAUDE.md) and a missed signal
// would mean silently serving stale code — the exact failure hot reload exists
// to prevent.
const WORKERS_WANTED = 3;
// Trailing edge: a burst of saves collapses to one retirement, and firing after
// the quiet guarantees the next worker loads the FINAL state of an edit batch
// rather than a half-written one.
const QUIET_MILLISECONDS = 300;
let generation = 0;
let pool = null;
let watching = null;
export async function function_worker_pool_run(f_name, args) {
  await watching_ensure();
  let ready = pool_ready();
  let broken = property_get(ready, "broken");
  if (broken) {
    throw new Error(broken);
  }
  let workers = property_get(ready, "workers");
  let next = property_get(ready, "next");
  // Round-robin. One worker could serve every request concurrently since node
  // multiplexes async work, but a CPU-bound function would then block the whole
  // event loop for everyone — several processes keep that blast radius small.
  let worker = workers[next % workers.length];
  ready.next = next + 1;
  let r = await worker_job_run(worker, f_name, args);
  return r;
}
async function watching_ensure() {
  // Memoize the PROMISE, not the result: concurrent first requests must share
  // one watcher rather than each racing to build their own.
  if (watching === null) {
    watching = watching_start();
  }
  let r = await watching;
  return r;
}
async function watching_start() {
  let squashed =
    await repos_paths_map_unordered_combine_squash_functions(identity);
  let chokidar = (await import_install("chokidar")).default;
  let watcher = chokidar.watch(squashed, {
    persistent: false,
    ignoreInitial: true,
  });
  let quiet = null;
  function lambda(path) {
    if (quiet !== null) {
      clearTimeout(quiet);
    }
    function lambda2() {
      quiet = null;
      generation = generation + 1;
      log(function_worker_pool_run.name, { retired_for: path, generation });
    }
    quiet = setTimeout(lambda2, QUIET_MILLISECONDS);
  }
  watcher.on("change", lambda).on("add", lambda).on("unlink", lambda);
  return watcher;
}
function pool_ready() {
  let stale = pool === null || property_get(pool, "generation") !== generation;
  if (stale) {
    pool_retire();
    pool = pool_start();
  }
  return pool;
}
function pool_retire() {
  if (pool === null) {
    return;
  }
  // Drain, do not kill: in-flight jobs keep their worker alive and finish
  // normally. Closing the job stream is what tells a worker to exit once idle.
  let workers = property_get(pool, "workers");
  workers.forEach(function lambda(worker) {
    worker.retired = true;
    worker_exit_if_idle(worker);
  });
}
function pool_start() {
  let workers = [];
  let started = { generation, workers, next: 0, broken: null };
  let index = 0;
  while (index < WORKERS_WANTED) {
    workers.push(worker_start(started));
    index = index + 1;
  }
  return started;
}
function worker_start(owner) {
  let worker = {
    child: null,
    owner,
    waiting: {},
    next_id: 0,
    retired: false,
    pending: "",
  };
  return worker;
}
async function worker_child_ensure(worker) {
  let child = property_get(worker, "child");
  if (child !== null) {
    return child;
  }
  let r3 = await import("child_process");
  let spawn = property_get(r3, "spawn");
  // fd 3 = jobs in, fd 4 = results out. stdout/stderr stay inherited so a called
  // function's own logging reaches the journal without corrupting the protocol.
  let started = spawn("node", ["scripts/r.mjs", function_worker_serve.name], {
    stdio: ["ignore", "inherit", "inherit", "pipe", "pipe"],
  });
  worker.child = started;
  started.stdio[4].on("data", function lambda(chunk) {
    worker_results_read(worker, chunk);
  });
  started.on("exit", function lambda2(code) {
    worker_exited(worker, code);
  });
  return started;
}
function worker_results_read(worker, chunk) {
  worker.pending = text_combine_multiple([worker.pending, chunk.toString()]);
  let lines = worker.pending.split("\n");
  worker.pending = lines.pop();
  lines.forEach(function lambda(line) {
    let blank = line.trim() === "";
    if (not(blank)) {
      worker_reply_take(worker, line);
    }
  });
}
function worker_reply_take(worker, line) {
  let reply = JSON.parse(line);
  let id = property_get(reply, "id");
  let waiting = property_get(worker, "waiting");
  let settle = property_get(waiting, id);
  delete waiting[id];
  let failed = property_get(reply, "failed");
  if (failed) {
    settle.reject(new Error(failed));
  } else {
    settle.resolve(property_get(reply, "result"));
  }
  worker_exit_if_idle(worker);
}
function worker_exited(worker, code) {
  let waiting = property_get(worker, "waiting");
  let ids = Object.keys(waiting);
  let message = text_combine_multiple([
    "the warm worker exited with code ",
    code,
    " before answering — did a watched file get saved in a broken state? its stderr is in the love_server journal",
  ]);
  ids.forEach(function lambda(id) {
    waiting[id].reject(new Error(message));
    delete waiting[id];
  });
  worker.child = null;
  let owner = property_get(worker, "owner");
  let retired = property_get(worker, "retired");
  // A worker that dies with nothing in flight died at BOOT. Mark the whole
  // generation broken rather than respawning per request, which would hot-loop
  // node boots for as long as the file stays broken. The next save moves the
  // generation forward and clears this by itself.
  let booted_empty = ids.length === 0 && not(retired);
  if (booted_empty && owner === pool) {
    owner.broken = message;
  }
}
function worker_exit_if_idle(worker) {
  let retired = property_get(worker, "retired");
  let waiting = property_get(worker, "waiting");
  let idle = Object.keys(waiting).length === 0;
  let child = property_get(worker, "child");
  if (retired && idle && child !== null) {
    child.stdio[3].end();
  }
}
async function worker_job_run(worker, f_name, args) {
  let child = await worker_child_ensure(worker);
  let id = property_get(worker, "next_id");
  worker.next_id = id + 1;
  let answered = new Promise(function lambda(resolve, reject) {
    worker.waiting[id] = { resolve, reject };
  });
  let job = { id, f_name, args };
  child.stdio[3].write(text_combine_multiple([JSON.stringify(job), "\n"]));
  let r = await answered;
  return r;
}
