export function each(list, lambda$item) {
  for (let item of list) {
    lambda$item(item);
  }
}
 