import "whatwg-fetch"

export function fetchPersonAPI(): Promise<Response>{
	const randomUserURL = "https://randomuser.me/api/?nat=gb,us"
	return fetch(randomUserURL)
		.then((response) => response.json())
		.then((response) => response.results[0])
}
