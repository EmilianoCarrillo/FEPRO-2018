$("#Selectors a").on("click", function(){
    if($(this).html() == "HARDWARE Y ROBÓTICA"){
        $("#AvanzadasTable").css({
            "height" : "0px",
            "opacity" : "0",
            "pointer-events" : "none"
        });
        $("#BasicasTable").css({
            "height" : "0px",
            "opacity" : "0",
            "pointer-events" : "none"
        });
        $("#HardwareTable").css({
            "height" : "100%",
            "opacity" : "1",
            "pointer-events" : "all"
        });
    }
    if($(this).html() == "APLICACIONES AVANZADAS"){
        $("#AvanzadasTable").css({
            "height" : "100%",
            "opacity" : "1",
            "pointer-events" : "all"
        });
        $("#BasicasTable").css({
            "height" : "0px",
            "opacity" : "0",
            "pointer-events" : "none"
        });
        $("#HardwareTable").css({
            "height" : "0px",
            "opacity" : "0",
            "pointer-events" : "none"
        });
    }
    if($(this).html() == "APLICACIONES BÁSICAS"){
        $("#AvanzadasTable").css({
            "height" : "0px",
            "opacity" : "0",
            "pointer-events" : "none"
        });
        $("#BasicasTable").css({
            "height" : "100%",
            "opacity" : "1",
            "pointer-events" : "all"
        });
        $("#HardwareTable").css({
            "height" : "0px",
            "opacity" : "0",
            "pointer-events" : "none"
        });
    }
    
  });