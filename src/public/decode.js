const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
}
const decode = async () => {
    const getName = document.getElementById('code').value;
    const data = await axios.post('/decode', {
        code: getName
    },
        { headers: headers });
    console.log(data.data);
    document.getElementById('decode').value = JSON.stringify(data.data);
}