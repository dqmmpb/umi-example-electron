import {join} from 'path';
import slash from 'slash';

export default {
  history: 'hash',
  base: './',
  publicPath: './',
  outputPath: '../../dist/renderer',
  plugins: [
/*    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true
      }
    ],*/
    [
      'umi-plugin-react',
      {
        dva: {
          immer: true,
        },
        // pwa: {
        //   workboxPluginMode: 'InjectManifest',
        //   workboxOptions: {
        //     importWorkboxFrom: 'local',
        //   },
        // },
        dynamicImport: {
          webpackChunkName: true,
        },
      }
    ],
  ],
  manifest: {
    basePath: '/',
  },
  externals(context, request, callback) {
    const isDev = process.env.NODE_ENV === 'development';
    let isExternal = false;
    const load = [
      'electron',
      'fs',
      'path',
      'os',
      'url',
      'child_process'
    ];
    if (load.includes(request)) {
      isExternal = `require('${request}')`;
    }
    const appDeps = Object.keys(require('../../app/package').dependencies);
    if (appDeps.includes(request)) {
      const orininalPath = slash(join(__dirname, '../../app/node_modules', request));
      const requireAbsolute = `require('${orininalPath}')`;
      isExternal = isDev ? requireAbsolute : `require('${request}')`;
    }
    callback(null, isExternal);
  },
  chainWebpack(config, { webpack }) {
    config.target('electron-renderer');
  }
};
