angular.module('validationModule', [])
    .value('patterns', {
        chineseMobile: new RegExp('^(?:(0?86)|[\\(（](0?86)[\\)）])?-?(13\\d|15\\d|14[57]|17\\d|18\\d)(\\d{8})$'),
        email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    })
;