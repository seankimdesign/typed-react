import "whatwg-fetch"

export function fetchPersonAPI(gender: string): Promise<Response>{
	const randomUserURL = `https://randomuser.me/api/?nat=gb,us&gender=${gender}`
	return fetch(randomUserURL)
		.then((response) => response.json())
		.then((response) => response.results[0])
}
