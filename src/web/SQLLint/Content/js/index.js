document.getElementById("validate").addEventListener("click", function (e) {

    e.preventDefault();

    var sqlInputField = document.getElementById("sql_input");
    var sqlInput = sqlInputField.value;

    process(sqlInput);

});

function process(sql) {
    var spinner = document.getElementById("loadSpinner");
    var results = document.getElementById("results");

    document.getElementById("results_header").style.display = 'block';
    spinner.style.display = 'block';

    var http = new XMLHttpRequest();
    var url = "/api";
    var params = "data=" + sql;
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.setRequestHeader("Content-length", params.length);
    http.setRequestHeader("Connection", "close");

    http.onreadystatechange = function () {//Call a function when the state changes.
        if (http.readyState === 4 && http.status === 200) {
            //$('#results').removeClass('error').addClass('success');
            //$('#results').text(http.responseText);
            results.innerText = http.responseText;
            hljs.highlightBlock(results);
            spinner.style.display = "none";
            //$('#loadSpinner').hide();
        }
        if (http.readyState === 4 && http.status !== 200) {
            //$('#results').removeClass('success').addClass('error');
            //$('#results').text("Error processing SQL");
            spinner.style.display = "none";
        }
    }

    http.send(params);
}
