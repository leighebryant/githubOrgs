var button = $('.getOrgs');
var newOrg = $('.newOrg');


function buttonClick() {
  $.ajax({
    method: "GET",
    url: "https://api.github.com/users/jisaacks/orgs",
    dataType: "jsonp",

  }).done(function(response) {
    for (var index = 0; index < response.data.length; index++) {
      spawn(response.data[index]);
    }
  });
}

function spawn(org) {
  this.info = {
    orgName: org.login,
    icon: org.avatar_url
  };
  this.getOrgs = function() {
    var item = $('<section>').attr('class', 'spawnedOrgs').appendTo(newOrg);
    var icon = $('<img>').attr('src', this.info.icon).appendTo(item);
    var orgName = $('<h2>').html(this.info.orgName).appendTo(item);
  };
  this.getOrgs();
}

$('main').on('click',button , function(event) {
  event.preventDefault();
  buttonClick();
});
