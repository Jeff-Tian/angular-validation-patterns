## Usage
```
angular.module('yourModule', ['validationModule'])
    .controller('yourCtrl', ['$scope', 'validChineseMobilePattern', function($scope, validChineseMobilePattern){
        new RegExp(validChineseMobilePattern).test('1111111');
    })
;
```