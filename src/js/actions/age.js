export const AGE_SET = 'AGE_SET';

export function set(age) {
	return {
		type: AGE_SET,
		payload: age
	}
};
