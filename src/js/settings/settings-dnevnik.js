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
	url: 'https://ad.dnevnik.ru/promo/kagocel-2016',
	server: 'https://dnevnik.ru',
	cdn: 'https://ad.csdnevnik.ru/special/staging/kagocel-2016/',
	doctorName: 'Цельс',
	bgClick: 'https://gderu.hit.gemius.pl/lshitredir/id=NDVQe81U5z1SAAeq0TS2zn14HwEGQq8T1eq3nO99mVz.07/fastid=euaruvwbdztzrdkqeuitzelbuznw/stparam=xairorftsx/url=http://www.kagocel.ru/promo/?utm_source=dnevnik.ru&utm_medium=&utm_campaign=01.09.2016_31.10.2016_BackgroundBonus-&utm_term=BackgroundBonus&utm_content=1472478538',
}

export const CommentsOptions = {	
	pageSize: 15,
	adminId: [
		'1000005031742'
	],
	anonAvatar: 'https://static.dnevnik.ru/images/avatars/user/a.m.jpg',
}
