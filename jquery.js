
    $(document).ready(function(){

        
    
    $(function(){
         $("#btn_1").click(BtnClick);
         $("#btn_2").click(save);
         $("#btn_3").click(Remove);
        
         $("#todos li").click(function(){
             $(this).remove();
         })
    })

    function BtnClick(){
         var newTodo = $("#newTodo").val();

         if(!newTodo){
             $("#newTodo").addClass("error");
             return;
         }

        $("#newTodo").removeClass("error");
        $("#todos").append("<li>" + newTodo + "</li>");
        $("#newTodo").val("");
        $("#todos li").click(RemoveMe);
    }

    function Remove(){
         
         $("#todos").empty();
         
    }

    function RemoveMe(){
         $(this).remove();
    }
    function save(){
        alert("response saved");
    }
})