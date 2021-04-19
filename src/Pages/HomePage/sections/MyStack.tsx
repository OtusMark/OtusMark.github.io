import {StackCard} from "../../../components/StackCard";
import {stack} from '../../../bll/stack'
import styled, {StyledComponentProps} from "styled-components/macro";
import {SectionIntro} from "../../../components/layout/SectionIntro";
import {SectionWrapper} from "../../../components/layout/SectionWrapper";

export const MyStack = () => {
    return (
        <section id='MyStack'>
            <SectionWrapper>
                <SectionIntro title='My stack' subtitle='Here you can see the stack of technologies I am worked with.'/>

                    <CardsContainer >
                        {stack.map(item => <CardWrapper>
                            <StackCard key={item.id} iconURL={item.imgURL} title={item.title}/>
                        </CardWrapper>)}
                    </CardsContainer>
            </SectionWrapper>


        </section>
    )
}

// Styles
const CardsContainer = styled.div<StyledComponentProps<any, any, any, any>>`
  display: flex;
  margin-left: -1.5rem;
  flex-wrap: wrap;
`

const CardWrapper = styled.div`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`