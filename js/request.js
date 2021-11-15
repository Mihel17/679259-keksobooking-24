const Urls = {
  GET: 'https://24.javascript.pages.academy/keksobooking/data',
  POST: 'https://24.javascript.pages.academy/keksobooking',
};


const makeRequest = (onSuccess, onFail, method, body) => {
  fetch(
    Urls[method],
    {
      method: method,
      body: body,
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};


export { makeRequest };

