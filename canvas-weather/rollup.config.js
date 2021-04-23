import babel from '@rollup/plugin-babel'
import serve from 'rollup-plugin-serve'
export default  {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'esm',
        name: 'weather',
        sourcemap: true
    },
    plugins: [
        babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
        serve({
            open: true,
            port: 8888,
            contentBase: './'
        })
    ]
}
