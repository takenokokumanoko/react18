import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

const sleep = (ms: number): Promise<any> => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

type Album = {
    userId: number;
    id: number;
    title: string;
}

const fetchAlbums = async () => {
    const result = await axios.get<Album[]>("https://jsonplaceholder.typicode.com/albums").then(await sleep(3000));
    return result.data;
}

export const AlbumList = () => {
    const { data } = useSuspenseQuery<Album[]>({
            queryKey: ["albums"],
            queryFn: fetchAlbums},
        );


    return (
        <div style={{ height: "300px", border: "2px solid gray", background: "cornsilk", overflowY: "scroll" }}>
            <p>Album</p>
            {data?.map((album) => <p key={album.id}>{album.title}</p>)}
        </div>
    );
}