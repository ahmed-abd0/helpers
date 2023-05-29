
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
            error: (data) => {

                document.querySelectorAll(".validation-message").forEach(message => message.remove())
               
                let errors = data.responseJSON.errors;
                for (const inputName in errors) {

                    let input = this.querySelector(`[name=${inputName}]`);
    
                    if (input && !input.classList.contains("dont-show-validation")) {
                           
                        input.insertAdjacentHTML("afterend", `
                            <p class='text-danger validation-message' style="font-size:12px">${errors[inputName][0]}</p>
                        `)
                    }
                }
            },
        });
    })
})
