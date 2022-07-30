import React, { Component } from 'react'
import './NewsItem.css';

export default class NewsItem extends Component {
    render() {
        let { title, desc, imgUrl, newsUrl, date, source } = this.props;
        return (
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-secondary my-badge">
                    {source}
                </span>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgUrl} className="img-fluid rounded-start" alt="..." style={{ height: '100%' }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{desc}...</p>
                            <p className="card-text"><small className="text-muted">Last updated on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="blank" className="card-text"><button className="btn btn-outline-dark btn-sm">Read more</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

