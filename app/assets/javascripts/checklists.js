
function addItemToDatabase(entry){
  $.post('/checklist', {tasks: entry, is_checked: "false"});
  var item = $("<li>" + entry + "</li>");
  var check = $("<input type='checkbox'/>");
  $(check).appendTo(item);
  $(item).appendTo("ul");
  $(check).on("change", strike);
  $("input").val('');
}

$("button").on("click", function(e){
  e.preventDefault();
  var entry = $("input").val();
  addItemToDatabase(entry);
});

$("input:checkbox").on("change", strike);

function strike(e){
  e.preventDefault();
  var number = this.id;
  if (this.checked === true){
    $(this.parentElement).css("text-decoration", "line-through");
    $.ajax({
      url: '/checklist/' + number,
      data: {is_checked: "true"},
      type: 'PATCH',
      success: function(result) {
       alert("checklist changed!");
     }
   });
  } else {
    $(this.parentElement).css("text-decoration", "none");
    $.ajax({
      url: '/checklist/' + number,
      data: {is_checked: "false"},
      type: 'PATCH',
      success: function(result) {
       alert("checklist changed!");
     }
   });
  }
}


// data = { id: this.id, _method: 'delete' };
// url = '/checklist/'
// request = $.post(url, data);
// request.done(function(res){
//   alert('Your list item has been deleted')
// });