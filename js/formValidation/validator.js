$(document).ready(function () {
    $(document).on("submit", ".validate", function (e) {
        e.preventDefault()
        let form = $(this)
        let form_data = new FormData(form[0]);

        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: form_data,
            contentType: false,
            processData: false,
            cache: false,
            success: function (data) {
                location.reload();
            },
            error: function (data) {

                $(".validation-message").hide();
                let errors = data.responseJSON.errors;
                for (const inputName in errors) {
                    let input = document.querySelector(`[name=${inputName}]`);

                    if (input) {
                        let errorMessages = '';
                        errors[inputName].forEach(error => {
                            errorMessages +=
                                `<p class='text-danger validation-message' style="font-size:12px"><span style="font-size:15px">😡</span>${error}</p>`
                        });
                        input.insertAdjacentHTML("afterend", errorMessages)
                    }
                }
            },
        });
    })
})



// fetch(this.action, {
//     method: this.method,
//     body : form_data,            
// })
// .then(res => location.reload)
// .catch(error => )