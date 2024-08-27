import axios from "axios";

const params = {
    headers: {
        Authorization: 
        "Bearer " + "58d44870734b97e29586303539b903ab135e15217731900b31f1351c1b18f49e3ed260b160ba675f9af0938c742c0caae64a0f739fd4ac4b2c7199f636bf032cea584b2a00328423ffc1e8d3e3eb1116567ef131846e235b7bfe44f1be4e25db25e38158ebbd4fc3c42f2f0ba6631dbd0bc0b554996d36035c0869fafaecd3eb"
    }
};

export const FetchDataFromApi = async(url) => {
    try{
        const {data} = await axios.get("http://localhost:1337" + url, params)
        return data;
    }catch(err){
        console.log(err);
        return err;
    }
}
