// import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class Newsitem extends Component {


  render() {
    let { title, description, imageurl, newsurl, author, date, source } = this.props;
    return (
      <div className='my-3'>

        <div className="card" style={{ width: "18rem" }}>
          <div style={
            {
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
            }
          }>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={imageurl ? imageurl : "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/48fbb5e09973afbe730474c5cb0aadd4.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="-blank" className="btn btn-sm btn-success">Read more..</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem