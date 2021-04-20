import {SectionWrapper} from "../../../components/layout/SectionWrapper";
import {SectionIntro} from "../../../components/layout/SectionIntro";
import styled from "styled-components/macro";
import {contacts} from '../../../bll/contacts'
import {IconCircle} from "../../../components/common/IconCircle";
import {MontB1Bold} from "../../../components/typography/decorative/MontB1Bold";
import {ContactForm} from "../../../components/ContactForm";

export const ContactMe = () => {
    return (
        <section id='ContactMe'>
            <SectionWrapper>
                <SectionIntro title='Contact me'
                              subtitle='If you have a job to discuss, please contact me. You are also Welcome to add me as linkedIn contact if you want mentorship'/>
                <BlocksWrapper>
                    <ContactsBlock>
                        {contacts.map(item => (
                            <ContactItem key={item.id}>
                                <IconCircle>
                                    <img src={item.imgURL} alt=""/>
                                </IconCircle>
                                <ContactInfo>{item.info}</ContactInfo>
                            </ContactItem>
                        ))}
                    </ContactsBlock>
                    <FormBlock>
                        <ContactForm/>
                    </FormBlock>
                </BlocksWrapper>
            </SectionWrapper>
        </section>
    )
}

const ContactItem = styled.div`
  display: flex;
  align-items: center;
`


const ContactsBlock = styled.div`
  width: 40%;

  ${ContactItem}:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media (max-width: 1400px) {
    width: 100%;
    
    ${ContactItem} {
      margin-bottom: 2rem;
    }
  }
`

const FormBlock = styled.div`
  width: 60%;
  margin-left: 1rem;

  @media (max-width: 1400px) {
    width: 100%;
    margin: 0;
  }
`

const BlocksWrapper = styled.div`
  display: flex;
  
  @media (max-width: 1400px) {
    flex-direction: column;
  }
`

const ContactInfo = styled(MontB1Bold)`
  margin-left: 2rem;
`