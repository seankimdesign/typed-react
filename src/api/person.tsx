import "whatwg-fetch"
import { PersonParams} from "../actions/person"

export const fetchPersonAPI = (params: PersonParams): Promise<Response> => {
	const randomUserURL = "https://randomuser.me/api/"
	let additionalParameters = ""
	for (const keys in params){
		if (params.hasOwnProperty(keys)){
			additionalParameters += keys
			if (params[keys].length > 0){
				additionalParameters += `=${params[keys]}&`
			}
		}
	}
	if (additionalParameters.length > 0){
		additionalParameters = "?" + additionalParameters
	}
	return fetch(randomUserURL + additionalParameters)
	.then((response) => response.json())
	.then((response) => response.results[0])
}
