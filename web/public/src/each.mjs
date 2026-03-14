export function each(list, lambda$item) {
  for (let item of list) {
    const result = lambda$item(item);
    if (result === true) {
      return;
    }
  }
}
