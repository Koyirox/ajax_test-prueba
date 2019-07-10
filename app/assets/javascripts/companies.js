$(document).on('turbolinks:load', function () {

    // $("[name='commit']").click(function (event) {
    //     event.preventDefault();
    //     var zombie = $('#company_name').val();
    //     $.ajax({
    //         type: "POST",
    //         url: "/companies",
    //         beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
    //         data: { zombie: { name: zombie } },
    //         dataType: "script"
    //     }).always(function () {
    //         $('#company_name').val('');
    //     });
    // });


    $('body').on('click', '.edit_company', function (event) {
        event.preventDefault();
        $.ajax({
            type: "GET",
            url: this.href,
            beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
            dataType: "script"
        }).always(function () {
            $('#company_name').val('');
        });
    });

    $('body').on('click', '#edit_btn', function (event) {
        event.preventDefault();
        var form = $('#edit_form');
        $.ajax({
            type: "PATCH",
            url: form.attr('action'),
            beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
            data: form.serialize(),
            dataType: "script"
        }).always(function () {
            $('#company_name').val('');
        });

    });

    // $('body').on('click', '.delete_zombie', function (event) {
    //     event.preventDefault();
    //     $.ajax({
    //         type: "DELETE",
    //         url: this.href,
    //         beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
    //         dataType: "script"
    //     }).always(function () {
    //         console.log('complete')
    //     });
    // });

    // $('body').on('click', '.show_zombie', function(event){
    //     event.preventDefault();
    //     $.ajax({
    //         type: "GET",
    //         url: this.href,
    //         beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    //         dataType: "script"
    //     }).always(function(){
    //         $('#zombie_name').val('');
    //     });
    // });

})