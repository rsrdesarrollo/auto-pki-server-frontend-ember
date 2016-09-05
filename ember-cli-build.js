/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        minifyCSS: {
            enabled: false
        },
        minifyJS: {
            enabled: false
        }
    });

    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    app.import('bower_components/bootstrap/dist/css/bootstrap.css');
    app.import('bower_components/bootstrap/dist/css/bootstrap-theme.css');

    app.import('bower_components/bootstrap-tokenfield/dist/css/bootstrap-tokenfield.css');
    app.import('bower_components/bootstrap-tokenfield/dist/css/tokenfield-typeahead.css');

    app.import('bower_components/jquery-ui/themes/base/jquery-ui.css');

    app.import('bower_components/jquery/dist/jquery.js');
    app.import('bower_components/bootstrap/dist/js/bootstrap.js');

    app.import('bower_components/jquery-ui/jquery-ui.js');

    app.import('bower_components/bootstrap-tokenfield/dist/bootstrap-tokenfield.js');

    app.import('bower_components/qrious/dist/umd/qrious.js');

    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
        destDir: 'fonts'
    });
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
        destDir: 'fonts'
    });
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
        destDir: 'fonts'
    });
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
        destDir: 'fonts'
    });
    app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
        destDir: 'fonts'
    });

    return app.toTree();
};
