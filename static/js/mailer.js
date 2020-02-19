$(function(){

  // NOTE: Send quote mail
  $('form#getQuote').on('submit', function(event){
    data = {};
    data['name'] = $(this).find('input[type="text"]').val();
    data['email'] = $(this).find('#email').val();
    data['phone'] = $(this).find('#phone').val();
    data['sector'] = $(this).find('.dropdown-label').text();
    if(data['sector'] === 'Sectors') {
      data['sector'] = 'Others';
    }
    var requirements = [];
    $(this).find('.selected-btn').each(function() {
      requirements.push($(this).attr('data-requirement'));
    });
    data['requirements'] = requirements.join(', ');
    data['description'] = $(this).find('textarea').val();
    data['source'] = $(this).find('input[type="hidden"]').val();
    // console.log("data is: " + JSON.stringify(data));

    $.ajax({
      url: '/sendmail',
      method: 'POST',
      data: data,
      dataType: 'html',
      success: function(response) {
        // console.log("response is: " + JSON.stringify(response));
       // $("#quote-modal .alert").text('Thank you for your query. Our solution experts will get in touch with you shortly.').fadeIn(1000);
        //$("#quote-modal form").fadeOut(1000);
        window.location.href = 'https://www.skylarkdrones.com/thank-you';
      },
      error: function(jqXHR, testStatus, errorThrown) {
        console.log('error is:' + jqXHR + testStatus + errorThrown);
      }
    }); 
  });

  // NOTE: Apply for job
  $('form#applyJob').on('submit', function(event){
    if($(this).find('input[type="file"]').get(0).files.length == 0){
      let params = {};
      params['name'] = $(this).find('input[type="text"]').val();
      params['email'] = $(this).find('#email').val();
      params['phone'] = $(this).find('#phone').val();
      params['opening'] = $(this).find('#job').text() + ' : ' + params['name'];
      params['description'] = $(this).find('textarea').val();

      $.ajax({
        url: '/apply',
        method: 'POST',
        data: params,
        dataType: 'html',
        success: function(response) {
         // console.log(`Response is: ${JSON.stringify(response)}`);

          $("#job-modal .alert").text('Congratulations on your application. Our HR team will get in touch with you shortly.').fadeIn(1000);
          $("#job-modal form").fadeOut(1000);
        },
        error: function(jqXHR, testStatus, errorThrown) {
          console.log(`Error is: ${jqXHR} \n ${errorThrown}`);
        }
      });
    } else {
      var xhr,
          formData = new FormData();

      if (window.XMLHttpRequest) {
          // code for modern browsers
          xhr = new XMLHttpRequest();
       } else {
          // code for old IE browsers
          xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

      formData.append('name', $(this).find('input[type="text"]').val());
      formData.append('email', $(this).find('#email').val());
      formData.append('phone', $(this).find('#phone').val());
      formData.append('opening', $(this).find('#job').text() + ' : ' + $(this).find('input[type="text"]').val());
      formData.append('description', $(this).find('textarea').val());
      file = $(this).find('input[type="file"]').get(0).files[0];
      formData.append('avatar', file, file.name);

      xhr.open( 'POST', '/file/upload', true );

      xhr.onreadystatechange = function(response) {
        if (this.readyState == 4 && this.status == 200){
          // console.log('Response is: ' + JSON.stringify(response));

          $("#job-modal .alert").text('Congratulations on your application. Our HR team will get in touch with you shortly.').fadeIn(1000);
          $("#job-modal form").fadeOut(1000);
        } else {
          console.log('Error is: ' + JSON.stringify(response));
        }
      };
      xhr.send( formData );
    }
  });

  // NOTE: Download case study
  $('#downloadCaseStudy').on('submit', function(event){
    let params = {}
    // debugger
    params['name'] = $(this).find('input[type="text"]').val();
    params['phone'] = $(this).find('#phone').val();
    params['email'] = $(this).find('#email').val();
    params['description'] = $(this).find('textarea').val();
    params['industry'] = $(this).find('#industry').val();
    // console.log("Download form content is: " + JSON.stringify(params));

    $.ajax({
      url: '/download',
      method: 'POST',
      data: params,
      dataType: 'html',
      success: function(response) {
        // console.log(`Response is: ${JSON.stringify(response)}`);
        $("#download-modal .alert").text('Thank you for your interest in Skylark Drones. The requested case study has been to your email address').fadeIn(1000);
        $("#download-modal form").fadeOut(1000);
      },
      error: function(jqXHR, testStatus, errorThrown) {
        console.log(`Error is: ${jqXHR} \n ${errorThrown}`);
      }
    });
  });
$('form#getcompli').on('submit', function(event){
    data = {};
    data['name'] = $(this).find('input[type="text"]').val();
    data['email'] = $(this).find('#email').val();
    data['phone'] = $(this).find('#phone').val();
    data['sector'] = $(this).find('.dropdown-label').text();
    if(data['sector'] === 'Sectors') {
      data['sector'] = 'Others';
    }
    var requirements = [];
    $(this).find('.selected-btn').each(function() {
      requirements.push($(this).attr('data-requirement'));
    });
    data['requirements'] = requirements.join(', ');
    data['description'] = $(this).find('textarea').val();
    data['source'] = $(this).find('input[type="hidden"]').val();
    // console.log("data is: " + JSON.stringify(data));
 
    $.ajax({
      url: '/sendmail',
      method: 'POST',
      data: data,
      dataType: 'html',
      success: function(response) {
        // console.log("response is: " + JSON.stringify(response));
       // $("#quote-modal .alert").text('Thank you for your query. Our solution experts will get in touch with you shortly.').fadeIn(1000);
        //$("#quote-modal form").fadeOut(1000);
        window.location.href = 'https://www.skylarkdrones.com/thank-you';
      },
      error: function(jqXHR, testStatus, errorThrown) {
        console.log('error is:' + jqXHR + testStatus + errorThrown);
      }
    }); 
  });

});