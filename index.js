console.log("start");
const URL = "https://rickandmortyapi.com/api/character/1,2,";
// Elements
const BUTTON = document.querySelector("button");
const WRAPPER = document.querySelector("div.wrapper");
const IMAGE = document.createElement("img");
IMAGE.classList.add("image");
const TITLE = document.createElement("h1");
const SUBTITLE = document.createElement("h2");
SUBTITLE.classList.add("subtitle");
const TEXT = document.createTextNode("Идёт загрузка...");
TITLE.append(TEXT);

BUTTON.addEventListener("click", async () => {
  await data(URL);
});

const data = async (url) => {
  const response = await fetch(url);
  const characters = await response.json();
  return getCharacters(characters);
};

const construct = (data) => {
  const block = data.map((item) => {
    console.log(item.image);
    const character = WRAPPER.cloneNode(true)
    character.append(IMAGE);
    character.append(SUBTITLE);
    character.querySelector(".subtitle").innerText = item.name;
    character.querySelector(".image").src = item.image;
    WRAPPER.appendChild(character)
  });
  return block
};

function getCharacters(dataCharacters) {
  const data = dataCharacters;

  setTimeout(() => {
    Promise.resolve().then(() => {
      BUTTON.classList.add("button_loading");
      BUTTON.classList.remove("button_hover");
      WRAPPER.appendChild(TITLE);
      TITLE.style =
        "text-align: center; font-size: 28px; margin: 0; color: #1d6c5d";
    });
  }, 0);

  setTimeout(() => {
    try {
      Promise.resolve().then(() => {
        "Rick Sanches" in data;
      });
      Promise.resolve().then(() => {
        "Morty Smith" in data;
      });
    } catch {
      throw new Error();
    }
  }, 0);

  setTimeout(() => {
    Promise.resolve().then(() => {
      WRAPPER.removeChild(BUTTON);
      WRAPPER.removeChild(TITLE);
      construct(data);
    }

    );
    }, 2000);
}


setTimeout(() => {
  const arr = [1 , 2 , 3];

  const mapFunc = (item, index, array) => {
  console.log(item, index);
}

  const map = (array, 
  mapFunc) => {
  const mappedArray = [];
  for (i = 0; i < array.length; i++) {
    const result = mapFunc(array[i], i, array);
    mappedArray.push(result);
  }
  return mappedArray;
}
  const operation = map(arr, item => item*2)
  console.log(operation);
  const BODY = document.querySelector("body");
  const DIV = document.createElement("div");
  BODY.appendChild(DIV);
}, 0)
