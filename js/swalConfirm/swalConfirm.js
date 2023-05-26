
let buttons = document.querySelectorAll('.need_confirmation');

buttons.forEach(button => {
    button.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let buttonName = e.target.dataset?.button_name ?? "Confirm";
        Swal.fire({
            title: "are you sure ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: buttonName
        }).then((result) => {
            if (result.isConfirmed) {
                e.target.closest("form").submit()
            }
        })
    }
});
