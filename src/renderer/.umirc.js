import {join} from 'path';

export default {
  history: 'hash',
  outputPath: '../../build/web',
  plugins: [
    [
      'umi-plugin-react',
      {
        dva: {
          immer: true,
        },
        pwa: {
          workboxPluginMode: 'InjectManifest',
          workboxOptions: {
            importWorkboxFrom: 'local',
          },
        },
        dynamicImport: {
          webpackChunkName: true,
        },
      }
    ],
  ],
  manifest: {
    basePath: '/',
  }
};
