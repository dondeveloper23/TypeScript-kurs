import axios from "axios";
import type {ApiParamsInterface} from "../interfaces/ApiParamsInterFace";
import type {ApiResponseInterface} from "../interfaces/ApiResponseInterface";


const API_KEY = "ddc7a1c1"
const API_URL = "https://www.omdbapi.com/"

function buildUrl(params: ApiParamsInterface[]): string {
    let searchParams = "";
    params.forEach((param) => {
        searchParams += `${param.key}=${param.value}&`;
    })

    return `${API_URL}?${searchParams}apikey=${API_KEY}`;

}


export async function callOMDBApi(params: ApiParamsInterface[]): Promise<ApiResponseInterface> {
    const url = buildUrl(params);
    return await axios.get(url);

}
