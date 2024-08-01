//jq
$(document).ready(function(){

    $('#btn_alert').click(function(){
        alert("Welcome to JQuery World")
    })
});
//show hide--------------------------
$(document).ready(function(){

    //show
    $('#btn_s').on('click', function(){

        $('h3').show();
    });
    //hide
    $('#btn_h').on('click', function(){

        $('h3').hide();
    });
});
//1sec show-------------------------------------
$(document).ready(function(){

    //show
    $('#btn_sh').on('click', function(){

        $('h4').show(1000);
    });
    //hide
    $('#btn_hi').on('click', function(){

        $('h4').hide(1000);
    });
});
//Fast---------------------------------------
$(document).ready(function(){

    //show
    $('#btn_sho').on('click', function(){

        $('h5').show("fast");
    });
    //hide
    $('#btn_hid').on('click', function(){

        $('h5').hide("fast");
    });
});

//slow---------------------------------------------
$(document).ready(function(){

    //show
    $('#btn_show').on('click', function(){

        $('h6').show("slow");
    });
    //hide
    $('#btn_hide').on('click', function(){

        $('h6').hide("slow");
    });
});

//toggle---------------------------------------
$(document).ready(function(){

    //show
    $('#btn_shows').on('click', function(){

        $('h1').show("slow");
    });
    //hide
    $('#btn_hides').on('click', function(){

        $('h1').hide("slow");
    });
    //toggle
    //hide
    $('#btn_T').on('click', function(){

        $('h1').toggle("300");
    });
});

//fade effect-----------------------------------------
$(document).ready(function(){

    //show
    $('#btn_showsf').on('click', function(){

        $('#hh').fadeIn("slow");
    });
    //hide
    $('#btn_hidesf').on('click', function(){

        $('#hh').fadeOut("slow");
    });
    //toggle
    //hide
    $('#btn_Tf').on('click', function(){

        $('#hh').fadeToggle("300");
    });
});

//CSS cursor pointerwith slide Toggle(UP-DOWN)-------------------------------
$(document).ready(function(){
        $('.ques').on('click', function(){
            $('.answ').slideToggle(500);
        });
});

//Double click------------------------------------------------
$(document).ready(function(){
    $('.quest').on('dblclick', function(){
        $('.answe').slideToggle();
    });
});

//Mouseover click-----------------------------------------------
$(document).ready(function(){
    $('.questi').on('mouseover', function(){
        $('.answer').slideToggle();
    });
});

//Mouseenter Click--------------------------------
$(document).ready(function(){
    $('.questio').on('mouseenter', function(){
        $('.answers').slideToggle();
    });
});

//Selects all elements-------------------------------
$(document).ready(function(){
    $("#btn_allHide").click(function(){
      $("*").hide();
    });
  });


  //Selects the current HTML element-----------------------------------------
  $(document).ready(function(){
    $("#btn_curr").click(function(){
      $(this).hide();
    });
  });

//Selects the first <li> element of the first <ul>----------------------------
  $(document).ready(function(){
    $("#firstele").click(function(){
      $("ul li:first").hide();
    });
  });

  //Selects the first li element of every ul---------------------------------------
  $(document).ready(function(){
    $("#firstchi").click(function(){
      $("#two li:first-child").hide();
    });
  });

  //Selects all elements with an href attribute------------------------------------
  $(document).ready(function(){
    $("#linkhre").click(function(){
      $("[href]").hide();
    });
  });

  //Selects all even <tr> elements
  $(document).ready(function(){
    $("tr:even").css("background-color", "yellow");
  });

  //The mouseleave() method attaches an event handler function--------------------
  $(document).ready(function(){
    $("#p1").mouseleave(function(){
      alert("Bye! You now leave Bangladesh!");
    });
  });

  //The focus() method attaches an event handler function to an HTML form field----------------------
  $(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});

//The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1)
$(document).ready(function(){
    $(".fad").click(function(){
      $("#div1").fadeTo("slow", 0.15);
      $("#div2").fadeTo("slow", 0.4);
      $("#div3").fadeTo("slow", 0.7);
    });
  });

//The jQuery animate() method--------------------------------------------------
$(document).ready(function(){
    $("#ani_movi").click(function(){
      $(".height1").animate({left: '250px'});
    });
  });

//jQuery Method Chaining
  $(document).ready(function(){
    $("#kap").click(function(){
      $("#p1").slideUp().slideDown();
    });
  });

//Sets or returns the content of selected elements
  $(document).ready(function(){
    
    $("#btn2").click(function(){
      alert("HTML: " + $("#test1").html());
    });
  });


  //the jQuery val() method
  $(document).ready(function(){
  $("#val_m").click(function(){
    alert("Value: " + $("#testi").val());
  });
});

//The jQuery attr() method is used to get attribute values.
$(document).ready(function(){
    $("#val_at").click(function(){
      alert($("#w3web").attr("href"));
    });
  });

  //Set Content - text(), html(), and val()--------------------------------------------------
  $(document).ready(function(){
    $("#btn1").click(function(){
      $("#testin").text("Hello world!");
    });
    $("#btn2").click(function(){
      $("#testing").html("<b>Hello world!</b>");
    });
    $("#btn3").click(function(){
      $("#testings").val("Dolly Duck");
    });
  });

  //Set Content - stop()
  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown(5000);
    });
    $("#stop").click(function(){
      $("#panel").stop();
    });
  });

  //set attributes
  $(document).ready(function(){
    $("#att").click(function(){
      $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
    });
  });


  //append() attribute
  $(document).ready(function(){
    $("#btn12").click(function(){
      $("#pappend").append(" <b>Appended text</b>.");
    });
  
    $("#btn22").click(function(){
      $("#olappend").append("<li>Appended item</li>");
    });
  });

  //The jQuery prepend() method inserts content AT THE BEGINNING of the selected HTML elements.
  $(document).ready(function(){
    $("#btn122").click(function(){
      $("#prependP").prepend("<b>Prepended text</b>. ");
    });
    $("#btn222").click(function(){
      $("#prependOl").prepend("<li>Prepended item</li>");
    });
  });

  //jQuery after() and before() Methods
  $(document).ready(function(){
    $("#btn13").click(function(){
      $(".doll").before("<b>Before</b>");
    });
  
    $("#btn23").click(function(){
      $(".doll").after("<i>After</i>");
    });
  });

  //The jQuery remove() method
  $(document).ready(function(){
    $("#btnremove").click(function(){
      $("#div1").remove();
    });
  });



//The jQuery empty() method
  $(document).ready(function(){
    $("#btnempty").click(function(){
      $("#div33").empty();
    });
  });

  //jQuery addClass() Method
  $(document).ready(function(){
    $("#btnaddele").click(function(){
      $(".addh1, .addh2, .addp").addClass("blue");
      $("#divadd").addClass("important");
    });
  });

  //To return the value of a specified CSS property,
  $(document).ready(function(){
    $("#btnremov").click(function(){
      alert("Background color = " + $("p").css("background-color"));
    });
  });

  

 