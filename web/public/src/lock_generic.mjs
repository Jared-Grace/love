export function lock_generic(wait) {
  `let lockfile = await import_install("proper-lockfile");
  let f_path = folder_user_storage_function_path(lock_wait);
  let result = path_join([f_path, lock_name]);
  await folder_exists_ensure(result);
  let release = null;
  let r = null;
  try {
    let locked = false;
    let notified = false;
    while (wait) {
      try {
        release = await lockfile.lock(result);
        locked = true;
        break;
      } catch (e) {
        if (e.code !== "ELOCKED") {
          throw e;
        }
        if (not(notified)) {
          let message = null;
          if (wait) {
            message = "waiting on " + result + " to be unlocked";
          }
          log_keep(lock_wait.name, message);
          notified = true;
        }
        if (wait) {
          await sleep(200);
        }
      }
    }
    if (locked) {
      r = await lambda();
    }
  } finally {
    if (release) {
      await release();
    }
  }`;
}
