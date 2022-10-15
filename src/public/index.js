const submit = document.getElementById('submit');
const area = document.getElementById('genarate');
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
  }
const sendInfo = async () => {
    const getName = document.getElementById('user').value;
    const getPassword = document.getElementById('pw').value;
    const data = await axios.post('/api',{
          user: getName,
          password: getPassword,},
          {headers:headers});
      console.log(data.data);
      area.innerHTML = data.data;
}