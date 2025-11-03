import { useState } from 'react';
import New from './component/New';
import Search from './component/Search';
import Filter from './component/Filter';
import { useGetNewsQuery } from './store/features/slice/NewsSlice';

function App() {
    const [category, setCategory] = useState<string>("");
    const [search, setSearch] = useState<string>("");
    const [triggerParams, setTriggerParams] = useState<{ category?: string; search?: string }>({});

    const { data, isLoading, isError } = useGetNewsQuery(triggerParams);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <header className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                    <Search search={search} setSearch={setSearch} />
                </div>
                <div className="flex flex-1 justify-center md:justify-start gap-4">
                    <Filter category={category} setCategory={setCategory} />
                </div>
                <button
                    onClick={() => setTriggerParams({ category, search })}
                    className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
                >
                    Search
                </button>
            </header>

            <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {isLoading && <h2 className="col-span-full text-center text-gray-500">Loading...</h2>}
                {isError && <h2 className="col-span-full text-center text-red-500">Error loading news</h2>}

                {data?.articles.map((article, index) => (
                    <New article={article} key={index} />
                ))}
            </main>
        </div>
    );
}

export default App;

