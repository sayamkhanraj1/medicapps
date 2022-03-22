import React, { useEffect, useState } from 'react';
import './New.css';

const News = () => {
         const [news, setNews] = useState([]);
         console.log(news);
         useEffect(() => {
                  fetch('https://vast-anchorage-14417.herokuapp.com/news')
                  .then(res => res.json())
                  .then(data => setNews(data))
         }, []);
         return (
                  <div className="container">
                       {
                                news.map(product=> <div
                                    key={product._id}
                                     >
                                              <div className="row">
                                
                                    <div className="news-container d-flex justify-content-center align-items-center col-lg-6 col-12">
                                     <div>
                                     <div>
                                             <img src={product?.img} alt="" />
                                     </div>
                                     <div>
                                              <h2>{product?.title}</h2>
                                              <p>{product?.description}</p>
                                     </div>
                                     </div>
                                     <div>

                                     </div>
                                    </div>
                      
                       </div> 
                                     </div>)
                       }   
                  </div>
         );
};

export default News;