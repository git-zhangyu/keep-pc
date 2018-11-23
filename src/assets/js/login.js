$(function(){
    $(".login-btn").click(function(){
        $(".register-panel").removeClass("active");
        $(".login-panel").addClass("active");
        $(".register-btn").removeClass("active");
        $(".login-btn").addClass("active");
    });

    $(".register-btn").click(function(){
        $(".login-panel").removeClass("active");
        $(".register-panel").addClass("active");
        $(".login-btn").removeClass("active");
        $(".register-btn").addClass("active");
    });
});