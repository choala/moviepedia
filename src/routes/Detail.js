import React from 'react';
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            return (
                <div className="movie__detail">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                    <div className="detail__data">
                        <h3 className="detail__title" >{location.state.title} ({location.state.year})</h3>
                        <p className="genres">{location.state.genres}</p>
                        <p className="detail__summary">{location.state.summary}</p>
                    </div>
                </div>
                );
        } else {
            return null;
        }
    }
}

export default Detail;