import {Container} from "../../components/layout/Container";
import {Welcome} from "./sections/Welcome";
import {MyStack} from "./sections/MyStack";
import {CodeExamples} from "./sections/CodeExamples";
import {ContactMe} from "./sections/ContactMe";

export const HomePage = () => {
    return (
        <Container>
            <Welcome/>
            <MyStack/>
            <CodeExamples/>
            <ContactMe/>
        </Container>
    )
}