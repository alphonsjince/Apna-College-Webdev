let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let factBroweser = await getFacts();
  let p = document.querySelector('p');
  p.innerText = factBroweser;
})

async function getFacts() {
  try {
    let res = await axios.get(url);

    return res.data.fact;
  } catch(err) {
    console.log(err);
    return "no fact found";
  }
}

getFacts();

