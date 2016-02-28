

$(document).ready(function(){
    $("#myBtn1").click(function(){
        $("#myModal1").modal("toggle");
    });
});

$(document).ready(function(){
    $("#myBtn2").click(function(){
        $("#myModal2").modal("toggle");
    });
});



$(document).ready(function(){
    $("#myBtn3").click(function(){
        $("#myModal3").modal("toggle");
    });
});

$(document).ready(function(){
    $("#myBtn4").click(function(){
        $("#myModal4").modal("toggle");
    });
});

$(document).ready(function(){
    $("#myBtn5").click(function(){
        $("#myModal5").modal("toggle");
    });
});

$(document).ready(function(){
    $("#myBtn6").click(function(){
        $("#myModal6").modal("toggle");
    });
});

$(document).ready(function(){
    $("#myBtn7").click(function(){
        $("#myModal7").modal("toggle");
    });
});

$(document).ready(function(){
    $("#myBtn8").click(function(){
        $("#myModal8").modal("toggle");
    });
});

$(document).ready(function(){
    $("#myBtn10").click(function(){
        $("#myModal10").modal("toggle");
    });
});


$(document).ready(function(){
    $("#myBtn11").click(function(){
        $("#myModal11").modal("toggle");
    });
});


$(document).ready(function(){
    $("#myBtn12").click(function(){
        $("#myModal12").modal("toggle");
    });
});

$(document).ready(function(){
    $("#myBtn13").click(function(){
        $("#myModal13").modal("toggle");
    });
});



$(document).ready(function(){
    $("#review").click(function(){
        $("#myModal-review").modal("toggle");
    });
});

$(document).ready(function(){
    
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

})

$(document).ready(function(){
    $("#categoryone").click(function(event){
        $("#collapseone").toggle();
    });
}); 

$(document).ready(function(){
$("#btn-review").click(function(event){
$("#modal-thank-you").modal("toggle");

});

});


