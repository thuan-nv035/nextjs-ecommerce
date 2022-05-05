import React from 'react';
import NavBar from "../../../components/NavBar";
import Slide from "../../../components/Slide";
import ProductItem from "../../../components/ProductItem";

function Index(props) {
    return (
        <div className="container mx-auto space-y-4">
            <NavBar/>
            <Slide/>

            <div className="flex flex-no-wrap">
                <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
                    {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                    <div
                        className="w-full h-full rounded border-dashed border-2 border-gray-300">
                        {/* Place your content here */}
                        <ProductItem/>
                    </div>
                </div>
                {/* Sidebar starts */}
                {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
                <div
                    className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
                    <div className="px-8">
                        <ul className="mt-12">
                            <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-grid" width={18} height={18}
                                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <rect x={4} y={4} width={6} height={6} rx={1}/>
                                        <rect x={14} y={4} width={6} height={6} rx={1}/>
                                        <rect x={4} y={14} width={6} height={6} rx={1}/>
                                        <rect x={14} y={14} width={6} height={6} rx={1}/>
                                    </svg>
                                    <span className="text-sm  ml-2">Dashboard</span>
                                </div>
                                <div
                                    className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">5
                                </div>
                            </li>
                            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-puzzle" width={18} height={18}
                                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <path
                                            d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"/>
                                    </svg>
                                    <span className="text-sm  ml-2">Products</span>
                                </div>
                                <div
                                    className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">8
                                </div>
                            </li>
                            <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-compass" width={18} height={18}
                                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <polyline points="8 16 10 10 16 8 14 14 8 16"/>
                                        <circle cx={12} cy={12} r={9}/>
                                    </svg>
                                    <span className="text-sm  ml-2">Performance</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Sidebar ends */}

            </div>
        </div>
    );
}

export default Index;