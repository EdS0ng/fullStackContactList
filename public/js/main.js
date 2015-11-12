'use strict';

$(document).ready(init);

function init() {
  $('.edit').click(submitEdit);
  $('.remove').click(removeAndUpdate);
}

function submitEdit(){
  $('#edit').submit();
}

function removeAndUpdate(e){
  var contact = $(e.target).closest('tr').attr('class');
  var dbId = $(e.target).closest('tr').attr('id');
  console.log(dbId)
  if (window.confirm('Delete '+contact+' as a contact?')){
    $.post('/remove'+dbId).done(function (){
      $(e.target).closest('tr').remove();
    });
  }

}
