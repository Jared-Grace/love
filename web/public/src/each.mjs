export function each(list, lambda$item) {
  for (let item = null of list) {
    lambda$item(item);
  }
}
