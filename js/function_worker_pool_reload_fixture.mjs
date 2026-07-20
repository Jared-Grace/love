// A deliberately trivial function whose only job is to be REWRITTEN while the
// warm worker pool is running, so a test can prove the pool actually retires its
// workers on a file change instead of serving code it booted with hours ago.
export async function function_worker_pool_reload_fixture() {
  return "before";
}
