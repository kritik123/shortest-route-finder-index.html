(function($) {
    "use strict";

    $(".modal").on("hidden.bs.modal", function () {
        var t = $(this);
        t.find('form').show();
        t.find('.alert').hide();
        t.find('form')[0].reset();
        $('.custom-input').trigger('input');
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    $('#quote-modal').on('show.bs.modal', function (e) {
        var quoteModalInvoker = $(e.relatedTarget)[0];
        if($(quoteModalInvoker).hasClass('get-in-touch-btn')) {
            $('#quote-modal .modal-heading').text('Get in Touch');
            $('#quote-modal .submit-btn').val('SUBMIT');
        } else if($(quoteModalInvoker).hasClass('faq-quote-btn')) {
            $('#quote-modal .modal-heading').text('Ask Us');
            $('#quote-modal .submit-btn').val('SUBMIT');
        } else {
            $('#quote-modal .modal-heading').text('Get a Quote');
            $('#quote-modal .submit-btn').val('GET QUOTE');
        }
    });

    $('#quote-modal').on('hide.bs.modal', function (e) {
        $('#quote-modal .modal-heading').text('Get a Quote');
        $('#quote-modal .submit-btn').val('GET QUOTE');
    });

    var $selectionButtons = $('#quote-modal').find('.selection-btn');
    $('#quote-modal .selection-btn').on('click', function(e) {
        $(e.target).toggleClass('selected-btn');
    });
    var $selectionButtons = $('#complaint-modal').find('.selection-btn');
    $('#complaint-modal .selection-btn').on('click', function(e) {
        $(e.target).toggleClass('selected-btn');
    }); 


    document.onkeyup = function(e) {
        $('.modal').each(function() {
            if($(this).hasClass('in')) {
                console
                e = e || window.event;
                var charCode = (typeof e.which == "number") ? e.which : e.keyCode;
                if (charCode === 27) {
                    $(this).modal('toggle');
                }
            }
        });
    };

    $('a[target="_blank"]').click(function() {
        $(this).blur();
    });

    /**
     * Download Case Study Modal
     * Disable submit button until all inputs have been filled and is valid according to the pattern defined
     */
    var formValidity = {
        name: false,
        phone: false,
        email: false,
        reason: false
    };

    var downloadSubmitBtn = $('#downloadCaseStudy').find('input[type="submit"]');
    $('#downloadCaseStudy').find('.custom-input').on('input', function(e) {
        formValidity[$(e.target).attr('data-field-name')] = e.target.checkValidity();
        var isFormValid = true;
        for (var key in formValidity) {
            if (formValidity.hasOwnProperty(key)) {
                isFormValid = isFormValid && formValidity[key];
            }
        }
        if(isFormValid) {
            if(downloadSubmitBtn.hasClass('disabled-btn')) {
                downloadSubmitBtn.removeClass('disabled-btn');
            }
        } else {
            if(!downloadSubmitBtn.hasClass('disabled-btn')) {
                downloadSubmitBtn.addClass('disabled-btn');
            }
        }
    });

    $("#job-modal").on("shown.bs.modal", function() {
        $("#applyJob #job").text($('.slick-current').find('.job-title').text());
        $('#upload-file-info').html($('#my-file-selector').val());
    });
    $('#my-file-selector').on("change", function() {
        var f = this.files[0];
        if (f && f.size > 10485760 || f.fileSize > 10485760) {
            $(this).closest('.modal').find('.alert').text("File size must be under 10MB!").show().fadeOut(5000);
            this.value = null;
        }
        $('#upload-file-info').text(f.name);
    });

    $('#download-modal').on('shown.bs.modal', function(e) {
        var industry = $(e.relatedTarget).attr('data-industry');
        $('#download-modal #industry').val(industry);
    });

})(jQuery);

function selectSector(sectorName) {
    $('.dropdown-label').text(sectorName);
}

function openMailer(type) {
    if(type === 'info') {
        var email = 'info@skylarkdrones.com'
        var emailBody = 'Hi,'
        document.location = "mailto:"+email+"&body="+emailBody;
    } else if(type === 'career') {
        var email = 'careers@skylarkdrones.com'
        var subject = 'Career opportunities at Skylark Drones'
        var emailBody = 'Hi,\n\n'
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    }
}

function loadPage (url) {
    window.location.href = url
}
