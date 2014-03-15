
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
    $.post("/checklist/", {is_checked: "true", id: number});
  } else {
    $(this.parentElement).css("text-decoration", "none");
    $.post('/checklist/', {is_checked: "false", id: number});
  }
}
