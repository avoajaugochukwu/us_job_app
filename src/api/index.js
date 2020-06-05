import axios from 'axios';

let config = {'Authorization-Key': '7DXYXwx/pMVDwwx2qUmCtYnOPfJ1t0u4CB2wgvTH970='}
const url = 'https://data.usajobs.gov/api/search?Keyword=Software';
export const fetchAPI = async () => {
    try {
        let { data: { SearchResult: { SearchResultCount, SearchResultCountAll, SearchResultItems } } } = await axios.get(url, {headers: config});
        // console.log( { SearchResultCount } );
        // console.log( SearchResultCount );
        // console.log( SearchResultCountAll );
        // console.log( SearchResultItems );
        
        return { SearchResultCount, SearchResultCountAll, SearchResultItems };
    } catch (error) {
        console.log(error);
        
    }
}