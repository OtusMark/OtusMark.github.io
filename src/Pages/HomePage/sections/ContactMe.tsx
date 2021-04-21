import {SectionWrapper} from "../../../components/layout/SectionWrapper";
import {SectionIntro} from "../../../components/layout/SectionIntro";
import styled from "styled-components/macro";
import {contacts} from '../../../bll/contacts'
import {IconCircle} from "../../../components/common/IconCircle";
import {MontB1Bold} from "../../../components/typography/decorative/MontB1Bold";
import {ContactForm} from "../../../components/ContactForm";

import whatsapp from "../../../assets/svg/common/Whatsapp.svg";
import email from "../../../assets/svg/common/Email.svg";
import linkedIn from "../../../assets/svg/common/LinkedIn.svg";

export const ContactMe = () => {

    return (
        <section id='ContactMe'>
            <SectionWrapper>
                <SectionIntro title='Contact me'
                              subtitle='If you have a job to discuss, please contact me. You are also Welcome to add me as linkedIn contact if you want mentorship'/>
                <BlocksWrapper>
                    <ContactsBlock>

                        <ContactItem>
                            <IconCircle>
                                <img src={whatsapp} alt=""/>
                            </IconCircle>
                            <ContactInfo>
                                <a href="tel:+79117558022">
                                    +7 (911) 755-80-22
                                </a>
                            </ContactInfo>
                        </ContactItem>

                        <ContactItem>
                            <IconCircle>
                                <img src={linkedIn} alt=""/>
                            </IconCircle>
                            <ContactInfo>
                                <a href='https://www.linkedin.com/in/kadiner-mark/' target='_blank'>
                                    linkedin.com/in/kadiner-mark
                                </a>
                            </ContactInfo>
                        </ContactItem>

                        <ContactItem>
                            <IconCircle>
                                <img src={email} alt=""/>
                            </IconCircle>
                            <ContactInfo>
                                <a href='mailto:dasistmail765@gmail.com'>
                                    dasistmail765@gmail.com
                                </a>
                            </ContactInfo>
                        </ContactItem>

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