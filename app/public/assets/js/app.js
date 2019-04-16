let isValid = true;

$(".chosen-select").chosen({
    disable_search: true, allow_single_deselect: true, disable_search_threshold: 10, width: "95%"
})
// var config = {
//   '.chosen-select': {},
//   '.chosen-select'           : {disable_search:true},
//   '.chosen-select-deselect': { allow_single_deselect: true },
//   '.chosen-select-no-single': { disable_search_threshold: 10 },
//   '.chosen-select-no-results': { no_results_text: 'Oops, nothing found!' },
// }
// for (var selector in config) {
//   $(selector).chosen(config[selector]);
// }
//FORM VALIDATION==========================================================
$("#submitBtn").on("click", function (event) {
    event.preventDefault();

    if ($(".form-control").val() ==="") {
        isValid = false;
        console.log("bah")
    }
    else if ($(".chosen-select").val() === "0") {
        isValid = false;
        console.log("vah")
    }
    //Get value of name and photo 
    //Push answers into array in object, push photo and name into object
    if (isValid === true) {
        let user = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        }
        console.log(user);
        
        $.post("/api/users", user, function(data) {
            $("#matchName").text(data.name);
            $("#matchImg").attr("src", data.photo);
            $("#matchModal").modal("toggle")
        });
    }


// POST TO JSON WITH $POST========================================


});
// CLEAR USER INPUT ON SUBMIT

// COMPARE USER RESULTS TO JSON RESULTS

// MODAL POP OF MATCH


// WRITE IN VANILLA JS