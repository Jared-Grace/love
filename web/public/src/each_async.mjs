export async function each_async(list, lambda$item) {
  for (let item of list) {
    if ((await lambda$item(item)) === true) {
      break;
    }
  }
}
