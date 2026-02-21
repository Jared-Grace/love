export function html_code_script_type(script_type, middle) {
  const attributes = ` type="${script_type}"`;
  let c = `<script${attributes}> 
    ${middle}
  </script>`;
  return c;
}
