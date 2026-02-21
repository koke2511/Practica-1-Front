import type { Character } from "../types.tsx/character";

const CharacterCard = (params: { character: Character }) => {
    const character = params.character;

    return (
        <div>
            <h3>{character.name}</h3>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair: {character.hair_color}</p>
            <p>Skin: {character.skin_color}</p>
            <p>Eyes: {character.eye_color}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
        </div>
    )
};

export default CharacterCard;