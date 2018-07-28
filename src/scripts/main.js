//add spinner
$('#spinner').click(function(e){
    e.preventDefault();
    $('.filter, .wrap__popup, .spinner').addClass('--active');
  });
  
//add printer
$('#printer').click(function(e){
    e.preventDefault();
    $('.filter, .wrap__popup, .printer').addClass('--active');
  });
  
////////////////////////////////////////////////////////////////////////  
//Remove all
$('#filter').click(function(e){
    e.preventDefault();
    $('.filter, .wrap__popup, .spinner, .printer').removeClass('--active');
  });
