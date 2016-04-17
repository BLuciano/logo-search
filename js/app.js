$(function(){
  var logos = getLogos().logos;
});

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