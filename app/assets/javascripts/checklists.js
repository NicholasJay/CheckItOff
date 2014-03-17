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
      type: 'PATCH'
   });
  } else {
    $(this.parentElement).css("text-decoration", "none");
    $.ajax({
      url: '/checklist/' + number,
      data: {is_checked: "false"},
      type: 'PATCH'
   });
  }
}

function deleteItem(e){
  e.preventDefault();
  this.parentElement.remove();
}

function addItemToDatabase(entry){
  var itemDatabase = $.post('/checklist', {tasks: entry, is_checked: "false"});
  var item = $("<li>" + entry + "</li>");
  var check = $("<input type='checkbox'/>");
  $(check).appendTo(item);
  var span = $("<span>X</span>").appendTo(item);
  check.id = itemDatabase.id;
  span.id = itemDatabase.id;
  $(item).appendTo("ul");
  $(check).on("change", strike);
  $("span").on("click", deleteItem);
  $("input").val('');
}