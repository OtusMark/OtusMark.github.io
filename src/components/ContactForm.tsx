import styled, {StyledComponentProps} from "styled-components/macro";
import {useFormik} from "formik";
import React from "react";
import {InputText} from "./common/InputText";
import {homepageAPI} from "../api/api";
import {Button} from "./common/Button";
import {MontB2Bold} from "./typography/decorative/MontB2Bold";
import Tilt from "react-parallax-tilt";

export const ContactForm: React.FC<PropsType> = (props) => {

    const {
        onClickEvent
    } = props

    const onClickAction = () => {
        if (onClickEvent) {
            onClickEvent()
        }
    }

    const formik = useFormik({

        validate: (values: FormValueType) => {
            const errors: FormValueType = {} as FormValueType;
            if (!values.name) {
                errors.name = 'Please enter your name'
            }
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (values.phone.includes('_')) {
                errors.phone = 'Invalid phone number'
            }
            return errors;
        },
        initialValues: {
            name: '',
            email: '',
            phone: '',
            description: ''
        },
        onSubmit: (values, actions) => {
            homepageAPI.sendContact(values)
                .then(() => onClickAction())
                .then(() => actions.resetForm({values: {name: '', email: '', phone: '', description: ''}}))
        }
    });

    return (
        <Tilt glareEnable={true}
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              glareMaxOpacity={0.8}
              glareColor="#ffffff"
              glarePosition="bottom"
              glareBorderRadius="30px">
            <FormWrapper>
                <TopBG>
                    <Title>Contact me</Title>
                </TopBG>
                <FormIntro>
                    Fill the form and I will reply you as soon as possible.
                </FormIntro>
                <form onSubmit={formik.handleSubmit}>
                    <StyledInputText placeholder={'Full name'} {...formik.getFieldProps('name')} error={formik.errors.name}/>
                    <StyledInputText placeholder={'Email'} {...formik.getFieldProps('email')} error={formik.errors.email}/>
                    <StyledInputText placeholder={'Phone'} {...formik.getFieldProps('phone')} error={formik.errors.phone} mask={"+7 (999) 999 9999"}/>
                    <StyledTextarea placeholder={'Description'} {...formik.getFieldProps('description')} rows="5"/>
                    <StyledButton type={'submit'}>Contact me</StyledButton>
                </form>
            </FormWrapper>
        </Tilt>
    )
}

// Styles
const FormWrapper = styled.div`
  position: relative;
  z-index: 1;
  
  border-radius: ${({theme}) => theme.variable.borderRadius};
  background-color: ${({theme}) => theme.color.white};
  padding: 6rem 3rem 3rem 3rem;
  
  box-shadow: ${({theme}) => theme.shadow['1']};
`

const TopBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 6rem;
  width: 100%;

  background-color: ${({theme}) => theme.color.grey['700']};

  border-radius: ${({theme}) => theme.variable.borderRadius} ${({theme}) => theme.variable.borderRadius} 0 0;
`

const FormIntro = styled.p`
  padding: 2rem 0;
`

const Title = styled(MontB2Bold)`
  position: absolute;
  top: 2rem;
  left: 3rem;

  color: ${({theme}) => theme.color.white};
`

const StyledInputText = styled(InputText)<StyledComponentProps<any, any, any, any>>`
  padding: 1rem;
  margin-bottom: 2.5rem;
`

const StyledTextarea = styled.textarea<StyledComponentProps<any, any, any, any>>`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;

  border: none;
  border-radius: ${({theme}) => theme.variable.borderRadius};
  box-shadow: ${({theme}) => theme.shadow['1']};
`

const StyledButton = styled(Button)`
  padding: 1.2rem 0;
  width: 100%;
  
  & p {
    width: 100%;
  }
`

// Types
export type PropsType = {
    onClickEvent?: () => void
}

export type FormValueType = {
    name: string
    email: string
    phone: string
    description: string
}