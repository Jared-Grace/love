export function worker_start(owner) {
  let worker = {
    child: null,
    child_starting: null,
    owner,
    waiting: {},
    next_id: 0,
    retired: false,
    pending: "",
  };
  return worker;
}
