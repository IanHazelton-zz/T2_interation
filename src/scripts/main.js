//add spinner
$('#spinner').click(function(e){
    e.preventDefault();
    $('.filter, .wrap__popup, .spinner').addClass('--active');
  });
  
//add success spinner
$('#spinnerSuccess').click(function(e){
  e.preventDefault();
  $('.filter, .wrap__popup, .resultSpinner__wrap').addClass('--active');
  $('#js-progress-bar').addClass('--complete');
  setTimeout(function(){$('#js-success-tick, #js-success-ring').addClass('--complete');},2000);
});

  
//add printer
$('#printer').click(function(e){
    e.preventDefault();
    $('.filter, .wrap__popup, .printer').addClass('--active');
  });
  
//add barcode scanner
$('#barcode').click(function(e){
  e.preventDefault();
  $('.filter, .wrap__popup, .wrap__scanner').addClass('--active');
}); 

////////////////////////////////////////////////////////////////////////  
//Remove all
$('#filter').click(function(e){
    e.preventDefault();
    $('.filter, .wrap__popup, .spinner, .printer, .wrap__scanner, .resultSpinner__wrap').removeClass('--active');
    $('.notify__progress-bar, .success-tick, .success-ring').removeClass('--complete');
  });

