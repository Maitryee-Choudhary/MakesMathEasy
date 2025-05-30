var toggle=false
function opencal() {
    $('#cal').slideToggle(function(){
        toggle=!toggle
    });
    if(!toggle){
    $('#cal')[0].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
}
function cleardiv(arrayofclearids) {
    for (parameterarray of arrayofclearids) {
        document.getElementById(parameterarray).innerHTML = "";
    }
}
function clearall() {
    setTimeout(function () {
        cleardiv(["resultintegration", "integralplot","resultdiff", "diffplot","resulttable","generatedmatrixsingle", "singlematrixresult", "singlematrixexplanation", "generatedmatrix1", "signofmatrix", "generatedmatrix2", "matrixresult", "explanationmatrixresult","rootsquadraticresult","inputroundoffoutput","plotequationresult","resultlaplace", "laplaceplot", "resultinverselaplace", "inverselaplaceplot","resultpardiff","resultmulsol","soltri","resultofdivsteps", "resultdivi", "divisibilitycheckresult", "divisibilitycheckresultexplanation","dividefactor", "dividefactorresult", "factorresult", "resultfac", "resultlcm", "resultlcms", "hcfprimefactor", "resulthcf","displayequation","resultsimplifyequation","resultexpandequation","equationsmany","resultsolverequation","compresult"]);
    }, 1000);
}
function closenav() {
    $('#slide-out').addClass('sidenav-close');
    setTimeout(function () {
        $('#slide-out').removeClass('sidenav-close');
    }, 100);
}

$(document).ready(function () {
    $("#divideoption").click(function () {
        openit("#divide");
        closenav();
        clearall();
    });
     $("#fractions_op").click(function(){
         openit("#fractions");
         closenav();
         clearall();
     });
    $("#logValues").click(function(){
        openit("#log_values");
        closenav();
        clearall();
    });
    $("#mathrbtn").click(function(){
        openit("#math");
        closenav();
        clearall();
    });
    $("#aboutbutton").click(function () {
        openit("#about");
        closenav();
    });
    $("#homeoption").click(function () {
        openit("#home");
        closenav();
    });
    $("#factorsoption").click(function () {
        openit("#factors");
        closenav();
        clearall();
    });

    $("#tableoption").click(function () {
        openit("#table");
        closenav();
        clearall();

    });
//            matrix
    $("#matrixcollapsebtn").click(function () {
        openit("#matrixcollapse");
        closenav();
        clearall();
    });
    $("#rankcalbtn").click(function () {
        openit("#rankcal");
        closenav();
        clearall();
    });

    $("#ex3btn").click(function () {
        openit("#ex3");
        closenav();
        clearall();
    });


    $("#vecalgbtn").click(function () {
        openit("#vecalg");
        closenav();
        clearall();
    });


    $("#thdifbtn").click(function () {
        openit("#thdif");
        closenav();
        clearall();
    });



    $("#aodbtn").click(function () {
        openit("#aod");
        closenav();
        clearall();
    });


    $("#corgeobtn").click(function () {
        openit("#corgeo");
        closenav();
        clearall();
    });


    $("#matrixpropsbtn").click(function () {
        openit("#matrixprops");
        closenav();
        clearall();
    });

    $("#straightlinebtn").click(function () {
        openit("#straightline");
        closenav();
        clearall();
    });

    $("#algebraic-idencollapsebtn").click(function () {
        openit("#algebraic-idencollapse");
        closenav();
        clearall();
    });

    $("#differentiate").click(function () {
        openit("#differentiatecollapse");
        closenav();
        clearall();
    })

    $("#3dgeobtn").click(function () {
        openit("#3dgeo");
        closenav();
        clearall();
    })

    $("#integrate").click(function () {
        openit("#integralcollapse");
        closenav();
        clearall();
    })

    $("#integration-idencollapsebtn").click(function () {
        openit("#integration-idencollapse");
        closenav();
        clearall();
    })

    $("#defintegration-idencollapsebtn").click(function () {
        openit("#defintegration-idencollapse");
        closenav();
        clearall();
    })

    $("#3d-solid-btn").click(function () {
        openit("#3d-solid");
        closenav();
        clearall();
    })
    $("#pythtriplebtn").click(function () {
        openit("#pythtriple");
        closenav();
        clearall();
    })

    $("#partialdiff").click(function () {
        openit("#partialdiffcollapse");
        closenav();
        clearall();
    })

    $("#laplace").click(function () {
        openit("#laplacecollapse");
        closenav();
        clearall();
    })
    $("#limits").click(function () {
        openit("#limitscollapse");
        closenav();
        clearall();
    })
    $("#shapescalbtn").click(function () {
        openit("#shapescal");
        closenav();
        clearall();
    })
    $("#propcirclebtn").click(function () {
        openit("#propcircle");
        closenav();
        clearall();
    })
    $("#coorbtn").click(function () {
        openit("#coor");
        closenav();
        clearall();
    })
    $("#diffeqnbtn").click(function () {
        openit("#diffeqn");
        closenav();
        clearall();
    })
    $("#ipbtn").click(function () {
        openit("#ip");
        closenav();
        clearall();
    })
    $("#vectorbtn").click(function () {
        openit("#vector");
        closenav();
        clearall();
    })
    $("#curvebtn").click(function () {
        openit("#curve");
        closenav();
        clearall();
    })
    $("#parallelbtn").click(function () {
        openit("#parallel");
        closenav();
        clearall();
    })
    $("#betagammabtn").click(function () {
        openit("#betagamma");
        closenav();
        clearall();
    })

    $("#euclidbtn").click(function () {
        openit("#euclid");
        closenav();
        clearall();
    })
	$("#tdshapescalbtn").click(function () {
        openit("#tdshapescal");
        closenav();
        clearall();
    })
    $("#transbtn").click(function () {
        openit("#trans");
        closenav();
        clearall();
    })
    $("#consimbtn").click(function () {
        openit("#consim");
        closenav();
        clearall();
    })
    $("#boolbtn").click(function () {
        openit("#bool");
        closenav();
        clearall();
    })
    $("#setformulalistbtn").click(function () {
        openit("#setformula");
        closenav();
        clearall();
    })
    $("#convdivbtn").click(function () {
        openit("#convdiv");
        closenav();
        clearall();
    })
    $("#setopbtn").click(function () {
        openit("#setop");
        closenav();
        clearall();
    })
    $("#mulsolwithstepsbtn").click(function () {
        openit('#mulsolwithsteps');
        closenav();
        clearall();
    })
    $("#interestbtn").click(function () {
        openit('#interest');
        closenav();
        clearall();
    })
    $("#pricesbtn").click(function () {
        openit('#prices');
        closenav();
        clearall();
    })
    $("#simpletrignocollapsebutton").click(function () {
        openit("#simpletrignocollapse");
        closenav();
        clearall();
    })
    $("#trigonovaluestablebutton").click(function () {
        openit("#trigonovaluestable");
        closenav();
        clearall();
    })
    $("#srfbtn").click(function () {
        openit("#srf");
        closenav();
        clearall();
    })
    $("#maxminbtn").click(function () {
        openit("#maxmin");
        closenav();
        clearall();
    })
    $("#locrootsbtn").click(function () {
        openit("#locroots");
        closenav();
        clearall();
    })
    $("#datebtn").click(function () {
        openit("#datecal");
        closenav();
        clearall();
    });
    $("#trigonoidenbutton").click(function () {
        openit("#trigonoiden");
        closenav();
        clearall();
    })
    $("#expansionbutton").click(function () {
        openit("#expansion");
        closenav();
        clearall();
    })
    $("#solutiontributton").click(function () {
        openit("#solutiontri");
        closenav();
        clearall();
    })
    $("#profitlossbutton").click(function () {
        openit("#profitloss");
        closenav();
        clearall();
    })
    $("#inversetrigonoidenbutton").click(function () {
        openit("#inversetrigonoiden");
        closenav();
        clearall();
    })
    $("#trigsolcollapsebtn").click(function () {
        openit("#trigsolcollapse");
        closenav();
        clearall();
    })
    $("#diffsolvebutton").click(function () {
        diffsolve();
    })
    $("#solvepardiff").click(function () {
        partialdiffsolve();
    })
    $("#rootsquadraticbtn").click(function () {
        openit("#rootsquadratic");
        closenav();
        clearall();
    });
    $("#equationssolverbtn").click(function () {
        openit("#equationssolver");
        closenav();
        clearall();
    });
    $("#plotgraphoption").click(function () {
        openit("#plotgraph");
        closenav();
        clearall();
    });
    $("#roundoffbtn").click(function () {
        openit("#roundoff");
        closenav();
        clearall();
    });
    $("#unitconbtn").click(function () {
        openit("#unitconcal");
        closenav();
        clearall();
    });

    $("#spiconbtn").click(function () {
        openit("#spiconcal");
        closenav();
        clearall();
    });
     // I have added
     $("#factorialbtn").click(function () {
        openit("#factorial");
        closenav();
        clearall();
    });

    // Permutation and combination
    $("#pandcbtn").click(function () {
        openit("#pandc");
        closenav();
        clearall();
    });

    // Prime
    $("#primebtn").click(function () {
        openit("#prime");
        closenav();
        clearall();
    });


    $("#curconbtn").click(function () {
        openit("#curconcal");
        closenav();
        clearall();
    });
     // Sumof nterms of an Arithmetic Progression
    $("#APbtn").click(function () {
        openit("#sum_n_AP");
        closenav();
        clearall();
    });
    $("#GPbtn").click(function () {
        openit("#sum_n_GP");
        closenav();
        clearall();
    });
    // algebraic equations formula lists
    $("#algebraic_formulacollapsebtn").click(function () {
    openit("#algebraic_formulascollapse");
    closenav();
    clearall();
     });
     //Function of Addition of Any Number System
    $("#add-all-btn").click(function(){
        openit("#adding-all");
        closenav();
        clearall();
    });
     //Function of Multiplication of Any Number System
     $("#mult-all-btn").click(function(){
        openit("#multiplying-all");
        closenav();
        clearall();
    });
    //Function of collapsing binary/decimal section on click
    $("#decimal-to-binary-btn").click(function(){
        openit("#decimal-binary");
        closenav();
        clearall();
    });

    //Function of collapsing bitwise calculator section on click
    $("#bitwise-calc-btn").click(function(){
        openit("#bitwise-calc");
        closenav();
        clearall();
    });

	$("#onetwocom-calc-btn").click(function(){
        openit("#onetwocom-calc");
        closenav();
        clearall();
    });


    $("#ninetencom-calc-btn").click(function(){
        openit("#ninetencom-calc");
        closenav();
        clearall();
    });


//Function of collapsing binary/octal section on click
    $("#octal-to-binary-btn").click(function(){
        openit("#octal-binary");
        closenav();
        clearall();
    });

    $("#octal-to-hexadecimal-btn").click(function(){
            openit("#octal-hexadecimal");
            closenav();
            clearall();
        });


    $("#complexidentitiesbtn").click(function(){
        openit("#complexidentities");
        closenav();
        clearall();
    });
    $("#complexpropertiesbtn").click(function(){
        openit("#complexproperties");
        closenav();
        clearall();
    });
    $("#complex1collapsebtn").click(function(){
        openit("#complex1collapse");
        closenav();
        clearall();
    });
    $("#complex2collapsebtn").click(function(){
        openit("#complex2collapse");
        closenav();
        clearall();
    });
    $("#greybtn").click(function(){
        openit("#grey-bin");
        closenav();
        clearall();
    });

    $("#stats-btn").click(function(){
        openit("#stats");
        closenav();
        clearall();
    });

    $("#log-collapsebtn").click(function(){
      openit("#log-collapse");
      closenav();
      clearall();
  });

    $("#bt-collapsebtn").click(function(){
        openit("#bt-collapse");
        closenav();
        clearall();
    });

    $("#bt-collapsebtn1").click(function(){
        openit("#bt-collapse1");
        closenav();
        clearall();
    });

    $("#bcdbtn").click(function(){
        openit("#bcd");
        closenav();
        clearall();
    });

	//Function of collapsing binary/hexadecimal section on click
	$("#binary-to-hexadecimal-btn").click(function(){
        openit("#binary-hexadecimal");
        closenav();
        clearall();
    });

	 $("#circlecollapsebtn").click(function(){
        openit("#circlecollapse");
        closenav();
        clearall();
    });

    $("#parabolacollapsebtn").click(function(){
        openit("#parabolacollapse");
        closenav();
        clearall();
    });
    $("#ellipsecollapsebtn").click(function(){
        openit("#ellipsecollapse");
        closenav();
        clearall();
    });
    $("#hyperbolacollapsebtn").click(function(){
        openit("#hyperbolacollapse");
        closenav();
        clearall();
    });
    $("#differentiate-rulecollapsebtn").click(function(){
        openit("#differentiate-rulecollapse");
        closenav();
        clearall();
    });



  $("#plotangleoption").click(function(){
        openit("#plotangle");
        closenav();
        clearall();
    });


    $("#emibtn").click(function(){
        openit("#emical");
        closenav();
        clearall();
    });
    $("#meanbtn").click(function(){
        openit("#mean");
        closenav();
        clearall();
    });
    $("#tangentbtn").click(function(){
        openit("#tangent");
        closenav();
        clearall();
    });
    $("#probabilitycollapsebtn").click(function(){
        openit("#probabilitycollapse");
        closenav();
        clearall();
    });




    $("#lapprobtn").click(function(){
        openit("#lappro");
        closenav();
        clearall();
    });


    $("#jointprobabilitycollapsebtn").click(function(){
        openit("#joint-probabilitycollapse");
        closenav();
        clearall();
    });


    $("#bayesprobabilitycollapsebtn").click(function(){
        openit("#bayes-probabilitycollapse");
        closenav();
        clearall();
    });
})

    function loader(action) {
    var body = document.getElementsByTagName("body");
    var head = document.getElementsByTagName("head");
    switch (action) {
        case 'show':
            var style = document.createElement('style');
            var div = document.createElement("div");
            var css = ".sk-chase {\n" +
                "            width: 40px;\n" +
                "            height: 40px;\n" +
                "            position: relative;\n" +
                "            animation: sk-chase 2.5s infinite linear both;\n" +
                "        }\n" +
                "\n" +
                "        .sk-chase-dot {\n" +
                "            width: 100%;\n" +
                "            height: 100%;\n" +
                "            position: absolute;\n" +
                "            left: 0;\n" +
                "            top: 0;\n" +
                "            animation: sk-chase-dot 2.0s infinite ease-in-out both;\n" +
                "        }\n" +
                "\n" +
                "        .sk-chase-dot:before {\n" +
                "            content: '';\n" +
                "            display: block;\n" +
                "            width: 25%;\n" +
                "            height: 25%;\n" +
                "            background-color: #fff;\n" +
                "            border-radius: 100%;\n" +
                "            animation: sk-chase-dot-before 2.0s infinite ease-in-out both;\n" +
                "        }\n" +
                "\n" +
                "        .sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }\n" +
                "        .sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }\n" +
                "        .sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }\n" +
                "        .sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }\n" +
                "        .sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }\n" +
                "        .sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }\n" +
                "        .sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }\n" +
                "        .sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }\n" +
                "        .sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }\n" +
                "        .sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }\n" +
                "        .sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }\n" +
                "        .sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }\n" +
                "\n" +
                "        @keyframes sk-chase {\n" +
                "            100% { transform: rotate(360deg); }\n" +
                "        }\n" +
                "\n" +
                "        @keyframes sk-chase-dot {\n" +
                "            80%, 100% { transform: rotate(360deg); }\n" +
                "        }\n" +
                "\n" +
                "        @keyframes sk-chase-dot-before {\n" +
                "            50% {\n" +
                "                transform: scale(0.4);\n" +
                "            } 100%, 0% {\n" +
                "                  transform: scale(1.0);\n" +
                "              }\n" +
                "        }"
            style.type = 'text/css';
            if (style.styleSheet) {
                // This is required for IE8 and below.
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            div.id = "loader";
            div.style.cssText = "position: fixed;\n" +
                "            z-index:5000;\n" +
                "            width: 100%;\n" +
                "            height: 100%;\n" +
                "            background: rgba(4,4,4,0.8);";
            div.innerHTML = '<div style="margin:auto;\n' +
                '            position: absolute;\n' +
                '            top:46%;\n' +
                '            left:46%;">\n' +
                '<div class="sk-chase">\n' +
                '  <div class="sk-chase-dot"></div>\n' +
                '  <div class="sk-chase-dot"></div>\n' +
                '  <div class="sk-chase-dot"></div>\n' +
                '  <div class="sk-chase-dot"></div>\n' +
                '  <div class="sk-chase-dot"></div>\n' +
                '  <div class="sk-chase-dot"></div>\n' +
                '</div>' +
                '    </div>'
            head[0].appendChild(style);
            body[0].prepend(div);
            break;
        case 'hide':
            body[0].removeChild(document.getElementById('loader'));
            head[0].removeChild(head[0].lastChild);
            break;
    }
}
