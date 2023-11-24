import React from "react";
import BookList from "../components/BookList";

const Home = () => {

    return (
        <div>
            <header>
                <h1 className="bg-gray-800 min-h-15 flex flex-col items-center justify-center text-white text-lg"> Book Catalog App </h1>
            </header>
            <main>
                <BookList />
            </main>
        </div>
    );
}

export default Home;