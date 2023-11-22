export const getPais = (id) => {
    return fetch('https://restcountries.com/v3.1/all?fields=name,flags')
      .then((data) => data.json())
      .then((data) => data);
  };