function chatCtrl(ChatService, $firebaseAuth){
    var vm = this;
    var auth = $firebaseAuth();

    vm.messages = ChatService.getMessages();
    vm.shownMessages = ChatService.shownMessages();
    vm.sendMessage = function(){
        if(vm.author != null){
            var message ={
                authorName: vm.author.displayName,
                authorId: vm.author.uid,
                authorPhoto: vm.author.photoURL,
                text: vm.newMessage
            }
        }else{
            alert('Для відправки повідомлення необхідно зареєструватись!');
        }
        if(vm.newMessage != ''){
        ChatService.sendMessage(message);
        vm.newMessage = '';
        } else {
            alert('Введіть повідомлення!');
        }
    }
    vm.login = function(){
        auth.$signInWithPopup('google');
    }

    vm.logout = function(){
        auth.$signOut('google');
    }
    auth.$onAuthStateChanged(function(authData){
        vm.author = authData;
    })
};

angular.module('chat') //підключення головного модуля chat
.controller('chatCtrl', ['ChatService', '$firebaseAuth', chatCtrl]);