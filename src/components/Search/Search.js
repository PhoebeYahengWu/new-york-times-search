import React from 'react'

function Search() {
    return (

    <div className="card">
        <div className="card-header">
          <i className="far fa-list-alt"></i> Search Parameters
        </div>

        <div className="card-body">
        <div className="form-group">
     
          <input type="text" autocomplete = "off" className="form-control" id="searchTerm" placeholder="Enter Keyword Here" />
        </div>

        <table style={{width:"100%"}}>
          <tbody>
           <tr>
            <button type="submit" id="run-search" className="btn btn-outline-dark" style={{width:"50%"}}><i className="fas fa-search"></i> Search</button>
            <button type="submit" id="clear-all" className="btn btn-light" style={{width:"50%"}}><i className="far fa-trash-alt"></i> Clear</button>
          </tr>
         </tbody>
        </table>
      </div>
      </div>

    )
}


export default Search;