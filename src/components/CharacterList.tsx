import type { Character } from "../types.tsx/character";
import CharacterCard from "./CharacterCard.tsx"

const CharacterList = ( params :{ character: Character[]}) => {
    const character = params.character
    return (
        <div className="characterlist">
            {character.map((char) => (
                <CharacterCard key = {char.name} character = {char} />
            ))}
        </div>
    );
};

export default CharacterList;