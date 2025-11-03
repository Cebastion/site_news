import { Link } from "react-router"
import type { INew } from "../interface/New.interface"
import type { FC } from "react"

const New: FC<{ article: INew }> = ({ article }) => {
    return (
        <Link
            to={`/${article.source.id}`}
            state={{ article }}
            className="block"
        >
            <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {article.urlToImage && (
                    <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="h-48 w-full object-cover"
                    />
                )}
                <div className="p-4 flex flex-col flex-1">
                    <h6 className="text-lg font-semibold mb-2 line-clamp-2">
                        {article.title}
                    </h6>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                        {article.description}
                    </p>
                    <div className="mt-auto text-xs text-gray-500">
                        <p>Author: {article.author || "Unknown"}</p>
                        <p>Published at: {new Date(article.publishedAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default New

