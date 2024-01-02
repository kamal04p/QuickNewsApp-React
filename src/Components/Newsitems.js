import React, { Component } from 'react'

export class Newsitems extends Component {
  
  render() {
    let {title, description, imgUrl, newsUrl, date, author, source} = this.props;
    return (
      <div>
        <div className="card container" style={{width: "25rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{display:'flex',justifyContent:'flex-start', left:"20%", position:'absolute', zIndex:"1"}}>
            {source}
        </span> 
          <img src={!imgUrl?"https://static.tnn.in/thumb/msid-105678555,thumbsize-103034,width-1280,height-720,resizemode-75/105678555.jpg":imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-info'>By {!author? "Unknown": author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitems
