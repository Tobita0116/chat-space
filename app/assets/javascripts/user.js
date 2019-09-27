$(function() {
  function appenduser(user) {
    let html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                </div>`
      $('#user-search-result').append(html);
    }
  
    function appenerror() {
      let html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">一致するユーザーがいません</p>
                  </div>`
        $('#user-search-result').append(html);
      }

    function deleteuser(userdata) {
      let html = `<div class='chat-group-user'>
                    <input name='group[user_ids][]' type='hidden' value="${userdata.userId}">
                      <p class='chat-group-user__name'>${userdata.userName}</p>
                    <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                  </div>`
        $('.chat-group-form__field--right__delete').append(html);
      }

    $("#user-search-field").on("keyup", function() {
      var input = $("#user-search-field").val();
      $("#user-search-result").empty();
      $.ajax({
        type: 'GET',
        url: '/users',
        data: { keyword: input },
        dataType: 'json'
      })
  
      .done(function(users) {
        if (users.length !== 0) {
          users.forEach(function(user){
            appenduser(user);
          });
        }
        else {
          appenderror();
        }
      })
      .fail(function(users) {
        alert('error');
      });
    });
  

    $(document).on("click", ".user-search-add", function() {
      let userbox = $(this).parent();
      userbox.remove();
      let userdata = $(this).data();
      deleteuser(userdata);
    });

    $(document).on("click", ".user-search-remove", function() {
      let userbox = $(this).parent();
      userbox.remove();
    });

  });