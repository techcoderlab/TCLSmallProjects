// const serializeForm = (form) =>
//   Array.from(new FormData(form), (field) =>
//     field.map(encodeURIComponent).join("=")
//   ).join("&");

// console.log(serializeForm(document.querySelector("#form")));
// Output: text-field1=Hello&text-field2=World

const formToObject = (form) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {}
  );
console.log(formToObject(document.querySelector("#form")));
// { text-field1: 'Hello', textfield2: 'World' }

document.querySelector("#button").addEventListener("click", (event) => {});
