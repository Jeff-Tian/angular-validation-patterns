## Install
```
bower install angular-validation-patterns --save
```

## Usage
```
angular.module('yourModule', ['validationModule'])
    .controller('yourCtrl', ['$scope', 'validationPatterns', function($scope, validationPatterns){
        validationPatterns.chineseMobile.test('1111111');
    })
;
```
