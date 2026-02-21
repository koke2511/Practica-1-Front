import type { Character } from "../types.tsx/character";

const CharacterCard = (params: { character: Character }) => {
    const character = params.character;

    return (
        <div className="charactercard">
            <h3><strong>{character.name}</strong></h3>
            <p><strong>Height: {character.height}</strong></p>
            <p><strong>Mass: {character.mass}</strong></p>
            <p><strong>Hair: {character.hair_color}</strong></p>
            <p><strong>Skin: {character.skin_color}</strong></p>
            <p><strong>Eyes: {character.eye_color}</strong></p>
            <p><strong>Birth Year: {character.birth_year}</strong></p>
            <p><strong>Gender: {character.gender}</strong></p>
        </div>
    )
};

export default CharacterCard;