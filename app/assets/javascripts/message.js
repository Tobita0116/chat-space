$(function(){
  function buildHTML(message){
    imageTag = ( message.image.url) ? `<img class= "lower-message__image" src=${message.image.url} >` : "";
        var html =
                  `<div class="message" data-message-id = "${message.id}">
                      <div class="upper-message">
                        <div class="upper-message__user-name">
                          ${message.user_name}
                        </div>
                        <div class="upper-message__date">
                          ${message.created_at}
                        </div>
                      </div>
                      <div class="lower-message">
                        <p class="lower-message__content">
                          ${message.content}
                        </p>
                          ${imageTag}
                      </div>
                    </div>`
        return html;
      }
    function ScrollToNewMessage(){
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('#new_message')[0].reset();
      return false
    })
    .fail(function(){
      alert('error');
    })
    return false;
  });

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message').filter(":last").data('messageId')
  $.ajax({
    url: "api/messages",
    data: { last_id: last_message_id },
    type: "GET",
    dataType: 'json'
  })
  
  .done(function(data){
    var insertHTML = '';
    data.forEach(function(message){
    insertHTML = buildHTML(message);         
    $('.messages').append(insertHTML)
    ScrollToNewMessage();
    });
  })
  .fail(function(data){
    alert('自動更新に失敗しました');
  });
  }  

  };
  setInterval(reloadMessages, 5000);
});
