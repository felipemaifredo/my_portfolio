//PT
    $(function() {
        $(".br").click(function() {
            //Menu
            $(".menu_itens").children().eq(0).children(0).text("Home");
            $(".menu_itens").children().eq(1).children(0).text("Sobre");
            $(".menu_itens").children().eq(2).children(0).text("Habilidades");
            $(".menu_itens").children().eq(4).children(0).text("Fale comigo");
            //Inside Menu
            $(".menu_dropdown").children().eq(0).text("Projetos");
                //Inside itens
                $(".insideP").children().eq(0).children(0).text("Aprendizado");
                $(".insideP").children().eq(1).children(1).text("Trabalhos");
                $(".insideP").children().eq(2).children(2).text("E Se...?");
                $(".insideP").children().eq(3).children(3).text("Blog");
            //SEC 1 RIGHT SIDE
                $(".content_sec1").children().eq(0).text("Olá");
                $(".content_sec1").children().eq(1).text("Eu sou Felipe,");
                $(".content_sec1").children().eq(2).text("Desenvolvedor Web");
            //SEC 1 LEFT SIDE
                $(".text_sec1").children().eq(0).text("Trabalhos e groselhas");
                $(".text_sec1").children().eq(2).children(0).text("de Felipe Gonçalves");
                $(".text_sec1").children().eq(4).text("um zé mané qualquer.");
        });
    });

//EN
    $(function() {
        $(".en").click(function() {       
            //MENU
            $(".menu_itens").children().eq(0).children(0).text("Home");
            $(".menu_itens").children().eq(1).children(0).text("About");
            $(".menu_itens").children().eq(2).children(0).text("Skills");
            $(".menu_itens").children().eq(4).children(0).text("Talk To me");
            //Inside Menu
            $(".menu_dropdown").children().eq(0).text("Projects");
                //Inside Menu
                $(".insideP").children().eq(0).children(0).text("Technologies");
                $(".insideP").children().eq(1).children(0).text("Works");
                $(".insideP").children().eq(2).children(0).text("What If...?");
                $(".insideP").children().eq(3).children(0).text("Blog");
            //SEC 1 RIGHT SIDE
                $(".content_sec1").children().eq(0).text("Hi");
                $(".content_sec1").children().eq(1).text("I'm Felipe,");
                $(".content_sec1").children().eq(2).text("Web Developer");
            //SEC 1 LEFT SIDE
                $(".text_sec1").children().eq(0).text("Works and currants");
                $(".text_sec1").children().eq(2).children(0).text("of Felipe Gonçalves");
                $(".text_sec1").children().eq(4).text("any zé moron.");
        });
    });