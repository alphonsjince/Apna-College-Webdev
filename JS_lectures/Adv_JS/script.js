let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let countryName = document.querySelector("input").value;
  console.log(countryName);

  let clgArr = await getColleges(countryName);
  show(clgArr);
});

function show(clgnames) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of clgnames) {
    console.log(col.name);

    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}
async function getColleges(country) {

  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    return [];
  }
}
