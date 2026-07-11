export async function each_async(list, lambda$item) {
  for (let item of list) {
    let result = await lambda$item(item);
    if (result === true) {
      break;
    }
  }
}
