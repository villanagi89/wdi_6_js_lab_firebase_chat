"use strict";function displayChatMessage(a,b){$("<div/>").text(b).prepend($("<em/>").text(a+": ")).appendTo($("#messagesDiv")),$("#messagesDiv")[0].scrollTop=$("#messagesDiv")[0].scrollHeight}var myFirebaseRef=new Firebase("https://fiery-inferno-7940.firebaseio.com/");$("#messageInput").keypress(function(a){if(13==a.keyCode){var b=$("#nameInput").val(),c=$("#messageInput").val();myFirebaseRef.push({name:b,text:c}),$("#messageInput").val("")}}),myFirebaseRef.on("child_added",function(a){var b=a.val();displayChatMessage(b.name,b.text)});