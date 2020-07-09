import React from 'react'

function Result(props) {
    return (     
        <div className="card mt-3 mb-3">
        <div className="card-header">
          <i className="far fa-newspaper"></i> Top Articles
        </div>

        <div id="article-section" className="card-body">

        {props.result? props.result.map(item => 
                        <li class='list-group-item'>
                        <strong>{item.headline.main}</strong>
                        <p>{item.byline.original} {item.pub_date.substring(0, 10)}</p>
                        <a target='_blank' rel="noopener noreferrer" href={item.web_url}>{item.web_url}</a>
                        </li>
                        ): <p>No news available!</p>}   
        </div>
        </div>     
    )
}


export default Result;