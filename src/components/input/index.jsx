import  {InputContainer} from "./Styles";

export default function Input ({value}) {
    return (
        <InputContainer>
            <input value = {value} disabled/>
        </InputContainer>
    );
}