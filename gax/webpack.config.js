/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');

module.exports = {
  entry: './src/fallback.ts',
  output: {
    library: 'Gax',
    filename: './gax.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '../../package.json': path.resolve(__dirname, 'package.json'),
      '../../protos/operations.json': path.resolve(
        __dirname,
        'protos/operations.json',
      ),
      '../../protos/status.json': path.resolve(__dirname, 'protos/status.json'),
      '../../protos/iam_service.json': path.resolve(
        __dirname,
        'protos/iam_service.json',
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /node_modules[\\/]retry-request[\\/]/,
        use: 'null-loader',
      },
      {
        test: /node_modules[\\/]google-auth-library/,
        use: 'null-loader',
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  mode: 'production',
};
