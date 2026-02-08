export function list_remove_end(list, count) {
  const removed = list.slice(-count);
  list.length = Math.max(0, list.length - count);
  return removed;
}
