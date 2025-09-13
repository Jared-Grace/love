export async function list_wait(list) {
  let v = await Promise.all(list);
  return v;
}
