const path = require('path');

module.exports = {
    // 1. Gde počinjemo?
    entry: './src/index.ts',

    // 2. Kako tretiramo fajlove?
    module: {
        rules: [
            {
                test: /\.ts$/,        // Ako vidiš fajl koji se završava na .ts
                use: 'ts-loader',     // Propusti ga kroz ovaj "prevodilac"
                exclude: /node_modules/, // Ne diraj tuđe biblioteke, one su već spreman JS
            },
        ],
    },

    // 3. Koje ekstenzije prepoznajemo?
    resolve: {
        extensions: ['.ts', '.js'], // Da ne moraš da pišeš import { x } from './file.ts'
    },

    // 4. Gde izbacujemo gotov proizvod?
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    // 5. Pomoć za razvoj
    mode: 'development',
    devtool: 'inline-source-map', // Pomaže ti da vidiš gde je tačno greška u TS-u
    devServer: {
        static: './', // Gde se nalazi index.html
        hot: true,    // Automatsko osvežavanje browsera čim sačuvaš fajl (Ctrl+S)
    }
};