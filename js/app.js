//logos object that holds all logos and their critertia
//null values indicates any category is accepted.
function getLogos(){
  var AllLogos = {
    logos : [
      {
        gray : 'imgs/aci.png',
        color : 'imgs/aci-color.png',
        program : 'loan',
        school : null
      },
      {
        gray : 'imgs/aci.png',
        color : 'imgs/aci-color.png',
        program : 'scholarship',
        school : null
      },
      {
        gray : 'imgs/aci.png',
        color : 'imgs/aci-color.png',
        program : 'loan',
        school : 'high-school'
      },
      {
        gray : 'imgs/aci.png',
        color : 'imgs/aci-color.png',
        program : null,
        school : 'k-12'
      },
      {
        gray : 'imgs/acm.png',
        color : 'imgs/acm-color.png',
        program : null,
        school : 'high-school'
      },
      {
        gray : 'imgs/acm.png',
        color : 'imgs/acm-color.png',
        program : 'scholarship',
        school : 'high-school'
      },
      {
        gray : 'imgs/acm.png',
        color : 'imgs/acm-color.png',
        program : 'scholarship',
        school : 'high-school'
      },
      {
        gray : 'imgs/acm.png',
        color : 'imgs/acm-color.png',
        program : 'scholarship',
        school : 'k-12'
      },
      {
        gray : 'imgs/AFE.png',
        color : 'imgs/AFE-color.png',
        program : 'loan',
        school : 'k-12'
      },
      {
        gray : 'imgs/AFE.png',
        color : 'imgs/AFE-color.png',
        program : null,
        school : 'high-school'
      },
      {
        gray : 'imgs/AFE.png',
        color : 'imgs/AFE-color.png',
        program : 'loan',
        school : 'k-12'
      },
      {
        gray : 'imgs/AFE.png',
        color : 'imgs/AFE-color.png',
        program : 'scholarship',
        school : null
      }
    ]
  };
  return AllLogos;
}

function appendImg(logo, color){
  var html = "";
  var src = logo.gray;
  
  //if color is true set the image src to the colored one
  if(color){
    src = logo.color;
  }

  html+= "<li class='logo'><img";
  html+= " src='" + src + "' alt='logo image'></li>";
  return html;
}

function searchMatch(logo, program, school){
  var color = false;
  if(program === 'all' && school === 'all'){
    color = true;
  }
  if(program === 'all' && logo.school === school){
    color = true;
  }
  if(school === 'all' && logo.program === program){
    color = true;
  }
  if(logo.program === program && logo.school === school){
    color = true;
  }
  return color;
}

//Displays logos accoding to the search criteria provided
function showLogos(logos, program, school){
  var color, img;
  $('.logo-list').html("");

  $.each(logos, function(index, logo){
    //check to see criteria match and set image to be colored or not
    color = searchMatch(logo, program, school);

    //get the HTML to append the specific image
    img = appendImg(logo, color);
    $('.logo-list').append(img);
  });
}

$(function(){
  var program = "", school = "";
  var logos = getLogos().logos;

  $('.filters').submit(function(e){
    e.preventDefault();
    program = $('.program').val();
    school = $('.school').val();
    showLogos(logos, program, school);
  })

  showLogos(logos, program, school)
});