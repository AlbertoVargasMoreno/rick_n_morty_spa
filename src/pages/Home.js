import getData from "../utils/getData";

const Home = async () => {
    const characters = await getData();
    let characters_array = characters?.results.map(character => character);
    // console.log(characters, characters_array);
    let view = "";
    characters_array.forEach(character => {
        view += `
        <div class="Characters">
            <article class="Character-item">
                <a href="#/${character.id}">
                    <img src="${character.image}" alt="${character.name}">
                        <h2> ${character.name} </h2>
                    </img>
                </a>
            </article>
        </div>
    `;
    });
    return view;
}

export default Home;