const query = async (url, data) => {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const body = JSON.stringify(data)

    const options = {
        headers,
        body,
        method: 'POST',
        redirect: 'follow'
    }

    let res = await fetch(url, options)
    res = await res.json();

    return res;
}

export default query