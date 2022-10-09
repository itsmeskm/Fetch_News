import React, { Component } from 'react'

export default class NewsItems extends Component {
   
    render() {
        let { url, urlToImage, title, description } = this.props;
        return (
            <div className='container my-4'>
                <div className="card m-3" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={urlToImage} alt="Not found" />
                    <div className="card-body">
                        <h5 className="card-title">{title ? title : "News Not Found"}</h5>
                        <p className="card-text"> {description ? description : "Description Not Found"}</p>
                        <a href={url} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
