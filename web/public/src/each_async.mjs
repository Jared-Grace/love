export async function each_async(list, lambda) {
  for (let item of list) {
    if ((await lambda(item)) === true) {
      break;
    }
  }
}
