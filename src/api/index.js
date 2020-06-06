import axios from 'axios';

let config = {'Authorization-Key': '7DXYXwx/pMVDwwx2qUmCtYnOPfJ1t0u4CB2wgvTH970='}
const url = 'https://data.usajobs.gov/api/search?Keyword=';

export const fetchAPI = async (searchValue) => {

    let newUrl = url;
    if (searchValue) {
        newUrl = `${url}${searchValue}`;
    } else {
        newUrl = `${url}A`;
    }

    try {
        let { data: { SearchResult: { SearchResultCount, SearchResultCountAll, SearchResultItems } } } = await axios.get(newUrl, {headers: config});
        return { SearchResultCount, SearchResultCountAll, SearchResultItems };
    } catch (error) {
        console.log(error);
        
    }
}