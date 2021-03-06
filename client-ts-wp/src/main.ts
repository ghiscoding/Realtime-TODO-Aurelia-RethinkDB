﻿/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
// we want font-awesome to load as soon as possible to show the fa-spinner
//import '../static/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-social/bootstrap-social.css';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css';
import 'styles/bootstrap-datetimepicker-bs4.scss';
import 'styles/styles.scss';
import 'styles/bootstrap.scss';
import 'bootstrap'; // importing bootstrap.js
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';
import authConfig from './modules/auth/authConfig';

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
//Bluebird.config({ warnings: { wForgottenReturn: false } });
Bluebird.config({ warnings: false });

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))
    .developmentLogging();

    aurelia.use.plugin(PLATFORM.moduleName('aurelia-bootstrap-datetimepicker'), config => {
      config.extra.bootstrapVersion = 4;
      config.extra.iconBase = 'font-awesome';
      config.extra.withDateIcon = true;
    });
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-auth/auth-filter'));
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-auth'), baseConfig => {
    	baseConfig.configure(authConfig);
    });

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
