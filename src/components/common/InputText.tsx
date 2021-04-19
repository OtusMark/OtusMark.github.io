import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";
import styled, {StyledComponentProps} from "styled-components/macro";
import InputMask from 'react-input-mask';


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;


type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
};

export const InputText: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange
        && onChange(e);

        onChangeText && onChangeText(e.currentTarget.value);
    }

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        e.key === "Enter"
        && onEnter
        && onEnter();
    }

    return (
        <InputTextWrapper>
            <StyledInput
                type={"text"}
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                {...restProps}
            />
            <StyledError>
                {error && <span>{error}</span>}
            </StyledError>
        </InputTextWrapper>
    );
}

const InputTextWrapper = styled.div`
  position: relative;

  width: 100%;
`

const StyledInput = styled(InputMask)<StyledComponentProps<any, any, any, any>>`

  
  padding: 1rem .5rem;
  margin-bottom: 20px;
  
  width: 100%;
  
  border: 1px solid rgb(109, 109, 109);
`

const StyledError = styled.div`
  position: absolute;
  top: 3.5rem;
  
  & > span {
    color: ${({theme}) => theme.color.error};
    font-weight: 400;
  }
`