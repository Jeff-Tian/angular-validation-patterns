## Install
```
bower install angular-validation-patterns --save
```

## Usage
```
angular.module('yourModule', ['validationModule'])
    .controller('yourCtrl', ['$scope', 'validationPatterns', function($scope, validationPatterns){
        new RegExp(validationPatterns.chineseMobile).test('1111111');
    })
;
```
