import {ExampleCard, ExampleCardWrapper} from "../../../components/ExampleCard";
import {examples} from '../../../bll/examples'
import styled from "styled-components/macro";
import {SectionIntro} from "../../../components/layout/SectionIntro";
import {SectionWrapper} from "../../../components/layout/SectionWrapper";

export const CodeExamples = () => {
    return (
        <section id='CodeExamples'>
            <SectionWrapper>
                <SectionIntro title='Code examples'
                              subtitle='Here you can see project examples that I have written to showcase part of my codding skills.'/>
                <ExamplesContainer>
                    {examples.map(item => <ExampleWrapper key={item.id}>
                        <ExampleCard title={item.title}
                                     technologies={item.technologies}
                                     description={item.description}
                                     demoLink={item.demoLink}
                                     codeLink={item.codeLink}/>
                    </ExampleWrapper>)}
                </ExamplesContainer>
            </SectionWrapper>
        </section>
    )
}

// Styles
const ExamplesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-left: -1.5rem;
`

const ExampleWrapper = styled.div`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`