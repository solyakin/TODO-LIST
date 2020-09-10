$(".fa-plus").click(function(){
    $("input").fadeToggle();
})
$("ul").on("click", "li", (function(){
    $(this).toggleClass("cross")
}))

$("input").keypress(function(e){
    if(e.which === 13){
        const key = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>x</span>" + key + "</li>")
    }
})

$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
})