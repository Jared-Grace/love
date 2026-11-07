export async function facebook_page_lock_take() {
  "Waits until no other run holds the facebook browser profile, then holds it, and answers the holder: a small process to kill when the browser is done. Waits up to three hours, then throws.";
  "★ ONE PROFILE, ONE BROWSER AT A TIME. Several Claudes and several timers all post through the one signed-in profile, and two browsers on one profile fail or step on each other. So every run queues here and they go one after another.";
  "★ A CRASH CANNOT LEAVE IT HELD. The lock is the operating system's own (flock), held by a tail that watches this process and ends when it ends - so a run that dies, however it dies, lets the next one through. A lock file with a process number in it would need guessing whether its owner is still alive, and two waiters guessing at once can both take it.";
  "★ ONLY flock HOLDS IT (-o), NEVER the tail it starts: killing the holder kills flock, and a tail still holding the lock would keep it until this process ended - so a run opening the browser twice waited on itself for three hours (2026-11-07).";
  "Timers must not take the same lock around the command as well: the command would then wait on its own timer.";
  let child_process = await import("node:child_process");
  let child = child_process.spawn(
    "/usr/bin/flock",
    [
      "-o",
      "-w",
      "10800",
      "/home/j/facebook-page-profile.lock",
      "/bin/sh",
      "-c",
      "echo held; exec tail --pid=" + process.pid + " -f /dev/null",
    ],
    {
      stdio: ["ignore", "pipe", "inherit"],
    },
  );
  await new Promise(function lambda2(resolve, reject) {
    child.stdout.once("data", resolve);
    function lambda(code) {
      reject(
        new Error(
          "the facebook browser profile was still held after three hours (flock answered " +
            code +
            ")",
        ),
      );
    }
    child.once("exit", lambda);
  });
  child.stdout.destroy();
  child.unref();
  return child;
}
