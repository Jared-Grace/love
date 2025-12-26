export async function app_component(fn, root) {
  let context = {
    root,
  };
  await fn(context);
}
