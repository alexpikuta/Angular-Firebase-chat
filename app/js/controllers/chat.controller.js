function chatCtrl(){
    var vm = this;
    vm.test = 'Some text'; 
};

angular.module('chat') //підключення головного модуля chat
.controller('chatCtrl', [chatCtrl]);