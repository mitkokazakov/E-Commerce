import axios from "axios";

let strapiDefaultUrl = "http://localhost:1337/api";

let strapiApiToken = "06e151c09acf0adc7091a32ad48c740ab3559be3002c5b9d181a97420706515b25ae5727e1eec819c6bc7edb18bed401c4911331e468e080eca989c7efc5eb68a9b2b1e5b5479d7806b488654e60aeb887f07be612a7b8ed955888b437da9fdf97fcdc4730369c924ab873e3089f51576fe2e81262bb3e24d6e12f83e2a53213";

export const requestAPI = axios.create({
    baseURL: strapiDefaultUrl,
    headers:{
        Authorization: "bearer " + strapiApiToken
    }
});