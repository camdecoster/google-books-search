// Generate query string that concatenates all API parameters in proper format
// This function expects an object. It will join all the key/value pairs into
// a string, which is returned.
function formatQueryParameters(queryParameters) {
    console.log("`formatQueryParameters` ran");

    const parameterString = Object.keys(queryParameters).map(
        key =>
            `${encodeURIComponent(key)}=${encodeURIComponent(
                queryParameters[key]
            )}`
    );
    return parameterString.join("&");
}
