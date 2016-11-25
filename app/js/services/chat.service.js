function chatService($firebaseArray){
    var messagesRef = firebase.database().ref().child("message");
    var chat = {}

    chat.getMessages = function(){
        return $firebaseArray(messagesRef);
    }
    chat.shownMessages = function(){
        return $firebaseArray(messagesRef.limitToLast(5));
    }
    chat.sendMessage = function(message){
        chat.getMessages().$add(message);
    }

    return chat;
}

angular.module('chat')
.factory('ChatService', ['$firebaseArray', chatService])