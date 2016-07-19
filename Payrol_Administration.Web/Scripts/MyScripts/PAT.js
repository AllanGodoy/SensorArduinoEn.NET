$(document).ready(function () {
    // $(".ChangeMachine").hide()


    //-------------------------------------------------Machine 14---------------------------------------
    document.getElementById("m14").addEventListener("click", function () {


        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;
        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;
        $.ajax({ url: URL, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) { $('#produccion').html(result); })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })


        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //--------------------------------------------------Machine 13---------------------------------------
    document.getElementById("m13").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })
        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })

    });

    //-------------------------------------------------Machine 12---------------------------------------
    document.getElementById("m12").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 75---------------------------------------
    document.getElementById("m75").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 10---------------------------------------
    document.getElementById("m10").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 09---------------------------------------
    document.getElementById("m9").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 08---------------------------------------
    document.getElementById("m8").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 07---------------------------------------
    document.getElementById("m7").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })

    });

    //-------------------------------------------------Machine 06---------------------------------------
    document.getElementById("m6").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 57---------------------------------------
    document.getElementById("m57").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 4---------------------------------------
    document.getElementById("m4").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })


        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 29---------------------------------------
    document.getElementById("m29").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 42---------------------------------------
    document.getElementById("m42").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 02---------------------------------------
    document.getElementById("m2").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 28---------------------------------------
    document.getElementById("m28").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })

    });

    //-------------------------------------------------Machine 27---------------------------------------
    document.getElementById("m27").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 26---------------------------------------
    document.getElementById("m26").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 74---------------------------------------
    document.getElementById("m74").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 24---------------------------------------
    document.getElementById("m24").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 23---------------------------------------
    document.getElementById("m23").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 22---------------------------------------
    document.getElementById("m22").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 21---------------------------------------
    document.getElementById("m21").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })


        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 20---------------------------------------
    document.getElementById("m20").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 58---------------------------------------
    document.getElementById("m58").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 18---------------------------------------
    document.getElementById("m18").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 56---------------------------------------
    document.getElementById("m56").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 73---------------------------------------
    document.getElementById("m73").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 05---------------------------------------
    document.getElementById("m5").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 40---------------------------------------
    document.getElementById("m40").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 39---------------------------------------
    document.getElementById("m39").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 38---------------------------------------
    document.getElementById("m38").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })
        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })


        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 37---------------------------------------
    document.getElementById("m37").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 36---------------------------------------
    document.getElementById("m36").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 35---------------------------------------
    document.getElementById("m35").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 34---------------------------------------
    document.getElementById("m34").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 33---------------------------------------
    document.getElementById("m33").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 32---------------------------------------
    document.getElementById("m32").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 31---------------------------------------
    document.getElementById("m31").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 30---------------------------------------
    document.getElementById("m30").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 19---------------------------------------
    document.getElementById("m19").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 55---------------------------------------
    document.getElementById("m55").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 54---------------------------------------
    document.getElementById("m54").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 53---------------------------------------
    document.getElementById("m53").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 52---------------------------------------
    document.getElementById("m52").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 51---------------------------------------
    document.getElementById("m51").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 50---------------------------------------
    document.getElementById("m50").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 49---------------------------------------
    document.getElementById("m49").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 48---------------------------------------
    document.getElementById("m48").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 101---------------------------------------
    document.getElementById("m101").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 47---------------------------------------
    document.getElementById("m47").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 46---------------------------------------
    document.getElementById("m46").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 45---------------------------------------
    document.getElementById("m45").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 44---------------------------------------
    document.getElementById("m44").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 43---------------------------------------
    document.getElementById("m43").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })

    });


    //-------------------------------------------------Machine 98---------------------------------------
    document.getElementById("m98").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 41---------------------------------------
    document.getElementById("m41").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 69---------------------------------------
    document.getElementById("m69").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 67---------------------------------------
    document.getElementById("m67").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 66---------------------------------------
    document.getElementById("m66").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 65---------------------------------------
    document.getElementById("m65").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 82---------------------------------------
    document.getElementById("m82").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 64---------------------------------------
    document.getElementById("m64").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 63---------------------------------------
    document.getElementById("m63").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 62---------------------------------------
    document.getElementById("m62").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 16---------------------------------------
    document.getElementById("m16").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })


        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 61---------------------------------------
    document.getElementById("m61").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 83---------------------------------------
    document.getElementById("m83").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 15---------------------------------------
    document.getElementById("m15").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 25---------------------------------------
    document.getElementById("m25").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 11---------------------------------------
    document.getElementById("m11").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 01---------------------------------------
    document.getElementById("m1").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 81---------------------------------------
    document.getElementById("m81").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 79---------------------------------------
    document.getElementById("m79").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 78---------------------------------------
    document.getElementById("m78").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 77---------------------------------------
    document.getElementById("m77").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 76---------------------------------------
    document.getElementById("m76").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 60---------------------------------------
    document.getElementById("m60").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 99---------------------------------------
    document.getElementById("m99").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 68---------------------------------------
    document.getElementById("m68").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 146---------------------------------------
    document.getElementById("m146").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 03---------------------------------------
    document.getElementById("m3").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 17---------------------------------------
    document.getElementById("m17").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 80---------------------------------------
    document.getElementById("m80").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 97---------------------------------------
    document.getElementById("m97").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 96---------------------------------------
    document.getElementById("m96").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 95---------------------------------------
    document.getElementById("m95").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 94---------------------------------------
    document.getElementById("m94").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 93---------------------------------------
    document.getElementById("m93").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 92---------------------------------------
    document.getElementById("m92").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 91---------------------------------------
    document.getElementById("m91").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 90---------------------------------------
    document.getElementById("m90").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 89---------------------------------------
    document.getElementById("m89").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 88---------------------------------------
    document.getElementById("m88").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 87---------------------------------------
    document.getElementById("m87").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 86---------------------------------------
    document.getElementById("m86").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 85---------------------------------------
    document.getElementById("m85").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 84---------------------------------------
    document.getElementById("m84").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 111---------------------------------------
    document.getElementById("m111").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })
        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 110---------------------------------------
    document.getElementById("m110").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 145---------------------------------------
    document.getElementById("m145").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 109---------------------------------------
    document.getElementById("m109").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 108---------------------------------------
    document.getElementById("m108").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 107---------------------------------------
    document.getElementById("m107").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 106---------------------------------------
    document.getElementById("m106").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 104---------------------------------------
    document.getElementById("m104").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 105---------------------------------------
    document.getElementById("m105").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 114---------------------------------------
    document.getElementById("m114").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 113---------------------------------------
    document.getElementById("m113").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 102---------------------------------------
    document.getElementById("m102").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 59---------------------------------------
    document.getElementById("m59").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 100---------------------------------------
    document.getElementById("m100").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 71---------------------------------------
    document.getElementById("m71").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 72---------------------------------------
    document.getElementById("m72").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 126---------------------------------------
    document.getElementById("m126").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 125---------------------------------------
    document.getElementById("m125").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 124---------------------------------------
    document.getElementById("m124").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 70---------------------------------------
    document.getElementById("m70").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 123---------------------------------------
    document.getElementById("m123").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 122---------------------------------------
    document.getElementById("m122").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 121---------------------------------------
    document.getElementById("m121").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 120---------------------------------------
    document.getElementById("m120").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 119---------------------------------------
    document.getElementById("m119").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 118---------------------------------------
    document.getElementById("m118").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 117---------------------------------------
    document.getElementById("m117").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })


        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 116---------------------------------------
    document.getElementById("m116").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 115---------------------------------------
    document.getElementById("m115").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 104---------------------------------------
    document.getElementById("m104").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 103---------------------------------------
    document.getElementById("m103").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 112---------------------------------------
    document.getElementById("m112").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });

    //-------------------------------------------------Machine 142---------------------------------------
    document.getElementById("m142").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 141---------------------------------------
    document.getElementById("m141").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 140---------------------------------------
    document.getElementById("m140").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 139---------------------------------------
    document.getElementById("m139").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 138---------------------------------------
    document.getElementById("m138").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 143---------------------------------------
    document.getElementById("m143").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 137---------------------------------------
    document.getElementById("m137").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 136---------------------------------------
    document.getElementById("m136").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 135---------------------------------------
    document.getElementById("m135").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 134---------------------------------------
    document.getElementById("m134").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 133---------------------------------------
    document.getElementById("m133").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 132---------------------------------------
    document.getElementById("m132").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 131---------------------------------------
    document.getElementById("m131").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 130---------------------------------------
    document.getElementById("m130").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 129---------------------------------------
    document.getElementById("m129").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 128---------------------------------------
    document.getElementById("m128").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })
    });


    //-------------------------------------------------Machine 127---------------------------------------
    document.getElementById("m127").addEventListener("click", function () {

        $('#modal_large').addClass('animated  fadeInUpBig'); var PrductoId = $(this).val(); document.getElementById("machine").innerHTML = "Machine # " + PrductoId;

        var URL = '../PAT/Produccion?PrductoId=' + PrductoId; document.getElementById("ChangeMachine").value = PrductoId;

        $.ajax({
            url: URL,
            contentType: 'application/html; charset=utf-8',
            type: 'GET',
            datatype: 'html'
        })
        .success(function (result) {

            $('#produccion').html(result);

        })

        var URL4 = '../PAT/ExpectedTotal?PrductoId=' + PrductoId;
        $.ajax({ url: URL4, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#totalexpected').html(result);
        })

        var URL2 = '../PAT/Expected?PrductoId=' + PrductoId;
        $.ajax({ url: URL2, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#expected').html(result);
        })

        var URL3 = '../PAT/InfoMachine?PrductoId=' + PrductoId;
        $.ajax({ url: URL3, contentType: 'application/html; charset=utf-8', type: 'GET', datatype: 'html' }).success(function (result) {
            $('#MachineInfo').html(result);
        })

    });





});