export const OAuthOptions = {
	provider: 'app',
	authUrl: 'https://login.dnevnik.ru/oauth2',
	grantUrl: 'https://api.dnevnik.ru/v1/authorizations',
	scope: 'Roles',	
	clientId: 'e84edc6eedc64082a42ddd94c2a996bd',
	redirectUrl: 'https://ad.dnevnik.ru/promo/oauth2',
}

export const APIoptions = {	
	base: 'https://api.dnevnik.ru/v1/',
}

export const PromoOptions = {	
	url: 'https://ad.dnenvik.ru/promo/kagocel-app',
	server: 'https://dnevnik.ru',
}

export const CommentsOptions = {	
	pageSize: 15,
	adminId: [
		'1000005031742'
	],
	anonAvatar: 'https://static.dnevnik.ru/images/avatars/user/a.m.jpg',
}
