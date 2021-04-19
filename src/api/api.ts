import {FormValueType} from "../components/ContactForm";
import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_CMS_DOMAIN
})

export const homepageAPI = {

    sendContact(body: FormValueType) {
        return instance.post('/clients', body)
    }
}