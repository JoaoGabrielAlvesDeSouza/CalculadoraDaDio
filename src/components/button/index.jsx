import { ButtonContainer } from "./Styles";

export default function Button ({label, onClick}) {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}