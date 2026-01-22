import type {ApiResponseErrorInterface} from "./ApiResponseErrorInterface";
import type {ApiSuccessInterface} from "./ApiSuccessInterface";


export interface ApiResponseInterface {
    config: {},
    data: ApiResponseErrorInterface | ApiSuccessInterface,
    headers: {},
    request: {},
    status: "string",
    statusText: string
}