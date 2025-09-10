import { useEffect, useState } from "react";
import LogForm from "./components/guidancePage/LogForm";

const Arrays = ({ title, description, resource, links }) => {
  return (
    <div className="border-2 border-green-300 space-y-3 p-5 rounded-2xl bg-white break-words shadow-xl shadow-gray-300">
      <h2 className="font-semibold text-2xl pt-3 pb-2">{title}</h2>
      <p>{description}</p>
      <p className="font-semibold text-xl underline">{resource}</p>
      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-blue-600 hover:underline text-sm"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Response() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isPopUp, setIsPopUp] = useState(false);
  const [loading, setLoading] = useState(true); // loading state

  const cardsPerPage = 8;

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        const formatted = json.products.map((p) => ({
          id: p.id,
          title: p.title,
          description: p.description,
          resource: "Resources:",
          links: ["https://example.com"],
        }));
        setData(formatted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(data.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = data.slice(startIndex, startIndex + cardsPerPage);

  return (
    <>
  
      <div className="flex justify-end w-[84%] mx-auto my-4">
        <button
          onClick={() => setIsPopUp(!isPopUp)}
          className="text-white bg-green-700 px-5 py-2 text-xl rounded-xl cursor-pointer"
        >
          Search
        </button>
      </div>

      {isPopUp && (
        <div className="bg-gradient-to-br transition-all duration-700 p-5 from-blue-500/25 to-green-500/25 z-50 h-screen w-screen backdrop-blur-lg fixed top-0">
          <LogForm isPopUp={setIsPopUp} />
        </div>
      )}

      {loading ? (
        <p className="text-center text-xl py-10">Loading...</p>
      ) : (
        <>
          <div className="gap-6 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-[90%] mx-auto">
            {currentCards.map((item) => (
              <Arrays
                key={item.id}
                title={item.title}
                description={item.description}
                resource={item.resource}
                links={item.links}
              />
            ))}
          </div>

          {data.length > cardsPerPage && (
            <div className="px-10 py-4 w-[90%] mx-auto flex items-center justify-between">
              {/* Previous */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
                }
                disabled={currentPage === 1}
                className={`border border-gray-500 p-3 rounded-full font-semibold text-white cursor-pointer ${
                  currentPage === 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-lime-900"
                }`}
              >
                Previous
              </button>

              <div className="flex space-x-1.5">
                {Array.from({ length: totalPages }, (_, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`cursor-pointer w-8 h-8 rounded-full flex items-center justify-center border ${
                      currentPage === i + 1
                        ? "bg-green-600 text-white border-green-700"
                        : "bg-green-300 border-lime-400"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`border border-gray-500 py-3 px-6 rounded-full font-semibold text-white cursor-pointer ${
                  currentPage === totalPages
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-lime-500"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Response;
