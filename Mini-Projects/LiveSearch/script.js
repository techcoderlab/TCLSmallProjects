const result = document.getElementById("result");
const filter = document.getElementById("filter");
const loading = document.querySelector("#result li");
const listItems = [];
const filteredItems = [];

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  try {
    loading.classList.remove("hide");

    const res = await fetch("https://randomuser.me/api?results=50");
    const { results } = await res.json();

    loading.classList.add("hide");

    const fragment = document.createDocumentFragment();

    results.forEach((user) => {
      const li = document.createElement("li");
      listItems.push(li);

      li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>Phone: ${user.phone}</p>
            </div>
        `;

      fragment.appendChild(li);
    });

    result.appendChild(fragment);
  } catch (error) {
    console.log("Error occurred:", error);
  }
}

function filterData(searchTerm) {
  filteredItems.length = 0;

  listItems.forEach((item) => {
    const name = item.querySelector("h4").textContent.toLowerCase();
    const phoneNo = item.querySelector("p").textContent.toLowerCase();
    if (
      name.includes(searchTerm.toLowerCase()) ||
      phoneNo.includes(searchTerm.toLowerCase())
    ) {
      filteredItems.push(item);
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
