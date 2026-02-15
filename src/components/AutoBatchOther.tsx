import { useState } from "react";
//import { flushSync } from "react-dom";

type Users = {
    "id": number;
    "name": string;
    "username": string;
    "email": string;
    "address": {
        "street": string;
        "suite": string;
        "city": string;
        "zipcode": string;
        "geo": {
        "lat": string;
        "lng": string;
        }
    },
    "phone": string;
    "website": string;
    "company": {
        "name": string;
        "catchPhrase": string;
        "bs": string;
    }
}

export const AutoBatchOther = () => {
    console.log("AutoBatchOther");
    const [users, setUsers] = useState<Users[] | null>(null);
    const [isFinishApi, setIsFinishApi] = useState<boolean>(false);
    const [status3, setStatus3] = useState<string>("");


    const onClickEeciteApi = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            // flushSync(() => { // flushSyncの数だけ、レンダリングが発生する
            //     setUsers(data);
            //     setIsFinishApi(true);
            // });
            setUsers(data);
            setIsFinishApi(true);
            setStatus3("updated")
        })
    }

    return (
        <div>
            <p>Automatic Batching(Other)</p>
            <button onClick={onClickEeciteApi}>API</button>
            <p>isFinisheApi: {isFinishApi ? "true" : "false"}</p>
            {users?.map((user) => <p key={user.id}>{user.name}</p>)}
        </div>
    );
}