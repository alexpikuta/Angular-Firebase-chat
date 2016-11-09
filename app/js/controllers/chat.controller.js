function chatCtrl(){
    var vm = this;
    vm.test = '!'; 
};

angular.module('chat') //підключення головного модуля chat
.controller('chatCtrl', [chatCtrl]);