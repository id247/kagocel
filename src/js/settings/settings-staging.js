// export const OAuthOptions = {
// 	authUrl: 'https://login.feature01.dnevnik.ru/oauth2',
// 	grantUrl: 'https://api.feature01.dnevnik.ru/v1/authorizations',
// 	scope: 'Avatar,FullName,Birthday,Age,Roles,Schools,Organizations,EduGroups,Lessons,Marks,EduWorks,Relatives,Files,Contacts,Friends,Groups,Networks,Events,Wall,Messages,EmailAddress,Sex,SocialEntityMembership',	
// 	clientId: '5123975fe9eb415390fb7aa316a15e4e',
// 	redirectUrl: 'https://ad.dnevnik.ru/promo/oauth2',
// }

// export const APIoptions = {	
// 	base: 'https://api.feature01.dnevnik.ru/v1/',
// }

// export const PromoOptions = {	
// 	url: 'http://feature01.dnevnik.ru/promo/wishlist3',
// 	server: 'https://feature01.dnevnik.ru',
// }

// export const ForumOptions = {	
// 	pageSize: 5,
// 	psyhoId: '1000001035607',
// 	postsLabel: 'posts-test-1',
// }


export const OAuthOptions = {
	provider: 'app',
	authUrl: 'https://login.staging.dnevnik.ru/oauth2',
	grantUrl: 'https://api.staging.dnevnik.ru/v1/authorizations',
	scope: 'Avatar,FullName,Birthday,Age,Roles,Schools,Organizations,EduGroups,Lessons,Marks,EduWorks,Relatives,Files,Contacts,Friends,Groups,Networks,Events,Wall,Messages,EmailAddress,Sex,SocialEntityMembership',	
	clientId: '5123975fe9eb415390fb7aa316a15e4e',
	redirectUrl: '//localhost:9000/oauth.html',
}

export const APIoptions = {	
	base: 'https://api.staging.dnevnik.ru/v1/',
}

export const PromoOptions = {	
	url: 'http://localhost:9000',
	server: 'https://staging.dnevnik.ru',
	cdn: 'https://ad.csdnevnik.ru/special/staging/kagocel-2016/',
	doctorName: 'Цельс',

}

export const CommentsOptions = {	
	pageSize: 5,
	adminId: [
		'1000005031742'
	],
	anonAvatar: 'https://static.dnevnik.ru/images/avatars/user/a.m.jpg',
}

