import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let { articles } = this.props.data;
        return (
            <div className='container my-4'>
                <h2>This is NewsItem Components</h2>
                <div className='row'>
                {articles && articles.map((article) => {
                    return (
                        <div className='col-md-4' key = {article.url}>
                            <div className="card m-3" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={article.urlToImage} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text"> {article.description}</p>
                                    <a href={article.url} target = "_blank" className="btn btn-sm btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        )
    }
}
