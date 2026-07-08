import { property_path_get } from "../../../love/public/src/property_path_get.mjs";
export async function sandbox_3() {
  let removed = property_path_get(
    {
      a: {
        b: "y",
      },
    },
    ["a", "b"],
  );
  return removed;
}
