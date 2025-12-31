import sendHttpRequest from "../../../http_call/HttpRequest";
import HOST_URL from "../../../service_url/AppUrlConfig";

export default async function getProductFromServer() {
    const response = await sendHttpRequest(
        `${HOST_URL}?limits=5`
    );

    if (response.status == 200) {
        return response.json;
    } else {
        return [];
    }
}