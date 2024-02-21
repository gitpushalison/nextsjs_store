import { useState ,useEffect} from 'react';
 export const usefetch = (options:any) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        if(options.url){
            console.log('usefetch useeffect')
            fetch(options.url)
            .then(res => res.json())
            .then(json => setData(json))
        }
    },[options.url])
    return {
        data,
        setData
    }
}
