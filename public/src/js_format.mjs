
      import prettier from 'https://esm.sh/prettier@3.2.5';
  import parserBabel from 'https://esm.sh/prettier@3.2.5/plugins/babel';
  
  export async function js_format() {

  const code = `function test( ){console.log("Hello")}`;
  const formatted = await prettier.format(code, {
    parser: 'babel',
    plugins: [parserBabel],
  });

  console.log(formatted);
}