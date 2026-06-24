import {useState, useEffect} from "react";

export default function Post(){
    const [post, setPost] = useState([]);
    const [load, setLoad] = useState(false);
    const [err, setErr] = useState(false);
    const [page, setPage] = useState(1);

    const getData = ()=> {
        return fetch(url).then((res) => res.json())
    };

    const fetchAndGetPost = async () => {
        try{
            setLoad(true);
            const data = await getData(
                `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
            );
            setPost(data);
            setLoad(false);
        } catch (error) {
            setErr(true);
            setLoad(false);
        }
    };
}
