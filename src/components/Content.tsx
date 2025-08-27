import { useState } from "react";
import { randomUserApi } from "../api/randomUserApi.ts";

const Content = () => {
    const [count, setCount] = useState(0);
    const randomUserData = randomUserApi.useGetRandomUserQuery(count);

    if (randomUserData.isLoading) return <div className="content">Loading...</div>;
    if (randomUserData.error) return <div className="content">Error loading user</div>;

    const user = randomUserData.data?.results[0];

    return (
        <div className="content">
            {user && (
                <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px", maxWidth: "300px" }}>
                    <img src={user.picture.large} alt="User" style={{ borderRadius: "50%" }} />
                    <h2>{user.name.first} {user.name.last}</h2>
                    <p><b>Email:</b> {user.email}</p>
                    <p><b>Phone:</b> {user.phone}</p>
                    <p><b>Location:</b> {user.location.city}, {user.location.country}</p>

                    <button
                        style={{ marginTop: "1rem", padding: "0.5rem 1rem", borderRadius: "4px", cursor: "pointer" }}
                        onClick={() => setCount(prev => prev + 1)}
                    >
                        Show random user #{count}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Content;