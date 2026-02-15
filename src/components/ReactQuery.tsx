import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

type Album = {
    userId: number;
    id: number;
    title: string;
}

const fetchAlbums = async () => {
    const result = await axios.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
    return result.data;
}

export const ReactQuery = () => {
    const { data } = useSuspenseQuery<Album[]>({
        queryKey: ["albums"],
        queryFn: fetchAlbums},
    )

    return (
        <div>
            <p>ReactQuery</p>
            {data?.map((album) => <p key={album.id}>{album.title}</p>)}
        </div>
    );
}