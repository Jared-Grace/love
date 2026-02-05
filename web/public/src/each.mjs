export function each(list, lambda$item) {
  for (let item of list) {
    if (lambda$item(item) === true) {
      return;
    }
  }
}
