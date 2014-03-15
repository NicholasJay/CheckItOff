// function bindCheckBoxes(e){
//   e.on("change",function(){
//     var e=$(this).parent(),
//     t=$(this).is(":checked");
//   t?e.addClass("done"):e.removeClass("done"),
//   updateTodo(e,t);
//   });
// }

// function bindDeleteButtons(e){
//   e.on("click",function(){
//     var e=$(this).parent();
//     deleteTodo(e);
//   });
// }

// function bindForm(){
//     $("form").on("submit",function(e){
//       e.preventDefault(),
//       $.ajax({url:"/todos",type:"POST",data:"todo["+$(this).serialize(),context:this,success:appendTodo});
//   });
// }

// function updateTodo(e,t){
//   $.ajax({url:"/todos/"+e.data("todo-id"),type:"POST",dataType:"json",data:{_method:"put",todo:{done:t}}});
// }

// function deleteTodo(e){$.ajax({url:"/todos/"+e.data("todo-id"),type:"POST",dataType:"json",data:{_method:"delete"},success:removeTodo,context:e});
// }

// function removeTodo(){
//   this.remove();
// }

// function appendTodo(e){
//   this.reset();
//   var t=$("<li>"+e.task+"</li>");
//   t.append($("<input />",
//   {type:"checkbox"})),
//   t.append($("<span>&times;</span>")),
//   t.data("todo-id",e.id),
//   $("ul").append(t),
//   bindCheckBoxes(t.find("input")),
//   bindDeleteButtons(t.find("span")
// )}

