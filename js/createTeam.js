fetch('./js/team.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {

		const teamMemebersContainer = document.querySelector('.team-members-container');
		
		const teamMemberDiv = document.createElement('div');
		teamMemberDiv.classList.add('team-member');

		const imageDiv = document.createElement('div');
		imageDiv.classList.add('team-member__image');
		imageDiv.style.backgroundImage = `url(${element.image})`;
		teamMemberDiv.appendChild(imageDiv);

		const nameDiv = document.createElement('div');
		nameDiv.classList.add('team-member__name');
		nameDiv.textContent = element.name;
		teamMemberDiv.appendChild(nameDiv);

		const positionDiv = document.createElement('div');
		positionDiv.classList.add('team-memeber__position');
		positionDiv.textContent = element.role;
		teamMemberDiv.appendChild(positionDiv);

		const socialDiv = document.createElement('div');
		socialDiv.classList.add('team-member__socials');

		const telLink = document.createElement('a');
		telLink.href = `tel: ${element.phone}`;
		telLink.innerHTML = `<i class="fa-solid fa-phone"></i> ${element.phone}`;
		socialDiv.appendChild(telLink);

		const emailLink = document.createElement('a');
		emailLink.href = `mailto: ${element.email}`;
		emailLink.innerHTML = `<i class="fa-solid fa-envelope"></i> ${element.email}`;
		socialDiv.appendChild(emailLink);

		teamMemberDiv.appendChild(socialDiv);

		teamMemebersContainer.appendChild(teamMemberDiv);
	 });
  });