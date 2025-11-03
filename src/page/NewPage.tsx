import { useLocation, useNavigate } from "react-router";
import type { INew } from "../interface/New.interface";

const NewPage = () => {
    const locate = useLocation();
    const navigate = useNavigate();
    const { article } = locate.state as { article: INew };

    console.log(article);

    return (
        <div className="w-full h-full bg-gray-100 p-6 flex flex-col items-center">
            {/* Кнопка назад */}
            <button
                onClick={() => navigate(-1)}
                className="self-start mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
            >
                ← Back
            </button>

            {/* Контент новости */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full  w-full">
                {article?.urlToImage && (
                    <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-1/2 object-cover mx-auto"
                    />
                )}
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-2 text-black">{article?.title}</h1>
                    <p className="text-sm text-gray-500 mb-4">
                        By {article?.author || "Unknown"} | Published at {article?.publishedAt}
                    </p>
                    <p className="text-black">{article?.content}</p>
                </div>
            </div>
        </div>
    );
};

export default NewPage;

