import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import "./Search.css"

const Search = ({ setSearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    // API call based on query input
    const { data, error } = useFetch(
        query.length > 0 
        ? `/api/products?populate=*&filter[title][$contains]=${query}` 
        : null
    );

    useEffect(() => {
        if (data) {
            console.log("Fetched data:", data);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            console.error("Fetch error:", error);
        }
    }, [error]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div 
            className="modal fade modal-xl"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row pb-4">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div className="search_input">
                                        <input 
                                            type="search"
                                            className="form-control"
                                            placeholder="SEARCH PRODUCTS..."
                                            value={query}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                            {data && data.data.length > 0 ? (
                                data.data.map((item) => (
                                    <div
                                        key={item.id}
                                        className="row py-2 search_row2"
                                        onClick={() => {
                                            navigate(`/product/${item.id}`);
                                            setSearch(true);
                                        }}
                                    >
                                        <div className="col-md-3"></div>
                                        <div className="col-md-6 search_row2_col1">
                                            <div className="row align-items-center">
                                                <div className="col-md-3">
                                                    <img 
                                                        src={item?.attributes?.img?.data?.attributes?.url 
                                                            ? `https://localhost:1337${item.attributes.img.data.attributes.url}` 
                                                            : 'https://via.placeholder.com/150'}
                                                        alt={item.attributes.title}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="col-md-8">
                                                    <h5>{item.attributes.title}</h5>
                                                    <h6 className="py-1">{item.attributes.description}</h6>
                                                </div>
                                                <div className="col-md-1"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-3"></div>
                                    </div>
                                ))
                            ) : (
                                <p>No results found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;

