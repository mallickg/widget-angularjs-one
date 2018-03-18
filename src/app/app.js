import angular from 'angular';

import '../style/app.scss';
import logoIcon from '../public/img/angular.png';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

let component = () => {
    return {
        bindings: {
            url: '='
        },
        controller: 'AppCtrl',
        controllerAs: 'app',
        template: require('./app.html')
    }
}

class AppCtrl {
  constructor() {
    this.name = 'Widget 1';
    this.logo = logoIcon;
  }
}

const MODULE_NAME = 'app1';

angular.module(MODULE_NAME, [])
  //.directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .component('widgetOneAngularjsComponent', component());

document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(document.getElementById("widget1"), ['app1']);
});

export default MODULE_NAME;