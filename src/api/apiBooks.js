const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zKvpKUfMGzgb7UsFsEQF/';

const addBookone = async (data) => {
  const response = await fetch(`${url}books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  }).then((response) => response.text());
  return response;
};

const fetchBooksFromone = async () => {
  const fetchedData = await fetch(`${url}books/`)
    .then((response) => response.json());
  return fetchedData;
};

const removeBookone = async (id) => {
  const response = await fetch(`${url}books/${id}`, {
    method: 'DELETE',
  }).then((response) => response.text());
  return response;
};

export { addBookone, fetchBooksFromone, removeBookone };
