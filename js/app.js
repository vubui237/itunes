angular.module('itunes', ['ngGrid']).config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['https://itunes.apple.com/**'])

})