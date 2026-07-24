import { property_get_or } from "./property_get_or.mjs";
import { not } from "./not.mjs";
export async function app_shared_boot_corrupt_or_null(render_fn) {
  "run one boot attempt: null when it succeeded; the corrupt error object when a read hit CORRUPT storage; and for any other error re-throw so an unrelated bug stays loud instead of being mistaken for corruption";
  try {
    await render_fn();
    return null;
  } catch (thrown) {
    let corrupt = property_get_or(thrown, "storage_corrupt", false);
    if (not(corrupt)) {
      throw thrown;
    }
    return thrown;
  }
}
