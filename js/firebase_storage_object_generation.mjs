export async function firebase_storage_object_generation(
  project_url,
  storage_path,
) {
  "The number storage stamps on a file every time somebody writes over it.";
  "Two readings that agree are a promise that nothing has been written in between, which is the one thing a list of names cannot tell you. Asking this first costs a few hundred bytes and saves fetching twenty thousand of them for a file that nobody has touched.";
  let o = await firebase_storage_object_metadata(project_url, storage_path);
  let generation = property_get(o, "generation");
  return generation;
}
