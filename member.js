function skillsMember() {
  var skills = document.getElementById('skills');
  var member = document.getElementById('member');
  var memberSkills = document.getElementById('memberSkills');
  var memberSkills2 = document.getElementById('memberSkills2');

  member.addEventListener('click', function() {
    memberSkills.classList.toggle('hidden');
    memberSkills2.classList.toggle('hidden');
  });
}