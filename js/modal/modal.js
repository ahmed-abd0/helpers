
`
    <div class="modal fade" id="global_modal">
    <div class="modal-dialog modal-lg" role="document">
        <div id="global_modal_content" class="modal-content modal-content-demo">


        </div>
    </div>
    </div>
`

$(".modal_btn").on("click", function() {
    let url = this.dataset.url;
    let title = this.dataset.title;
    let modal_header = `
        <div class="modal-header">
                    <h6 class="modal-title">${title}</h6><button aria-label="Close" class="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
        </div>
    `;

    $.get(url, function(res) {

        let html = modal_header + res;

        $("#global_modal_content").html(html);

        $("#global_modal").modal()
    })
})

`
<div class="modal-body">

    <form class="validate" action="{{ route('consultant.store') }}" method="post" enctype="multipart/form-data">

        @csrf
       
            <div class="modal-footer">
                <button type="button" data-bs-dismiss='modal'
                    class="btn btn-primary main-btn">{{ __('message.dismiss') }}</button>
                <button type="submit" id="BarcodeSubmit" class="btn btn-primary main-btn">{{ __("labels.save_changes") }}</button>
            </div>

        </div>


    </form>


</div>

`
