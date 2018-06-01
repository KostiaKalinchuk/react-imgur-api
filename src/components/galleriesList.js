import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import "../css/galleriesList.css";
import {asyncGetGalleries} from "../actions/galleries";
import {changeFilter} from "../actions/filter";
import {GalleryFilter} from "./galleryFilter.js";
import Post from "./post.js";

class GalleriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            currentPage: 0,
            listEnd: false,
            list: [],
            perPage: 40,
            userSelected: false,
            topSelected: false,
            load: false
        };
        this.infinityScroll = this.infinityScroll.bind(this);
    }

    componentDidMount() {
        this.props.getGalleries(this.props.filter);
        window.addEventListener("scroll", this.infinityScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.infinityScroll);
    }

    infinityScroll() {
        const {pageYOffset} = window;
        const {documentElement: {clientHeight, scrollHeight}} = document;
        const {load, listEnd, page, currentPage, perPage} = this.state;
        const scrollTop = pageYOffset || document.documentElement.scrollTop;
        if (clientHeight + scrollTop >= scrollHeight && !load && listEnd) {
            this.props.changeFilter({page: ++this.state.page});
            this.setState({
                page: ++this.state.page,
                load: true,
                listEnd: false,
                currentPage: currentPage + perPage
            });
        } else if (clientHeight + scrollTop >= scrollHeight && !load && !listEnd) {
            this.loadNextGalleries(this.props, true);
        }
    }

    onFilterChange(event) {
        const select = event.target;
        const option = select.options[select.selectedIndex];
        this.setState({
            currentPage: 0,
            load: true,
            useFilter: true,
            page: 0
        });
        this.props.changeFilter({
            [select.name]: option.value,
            page: 0
        });
        if (select.name === "section") {
            option.value === "user"
                ? this.setState({userSelected: true})
                : this.setState({userSelected: false});
            option.value === "top"
                ? this.setState({topSelected: true})
                : this.setState({topSelected: false});
        }
    }

    loadNextGalleries(props, nextPage = false) {
        let currentNextPage;
        if (this.state.currentPage + this.state.perPage >= props.list.length) {
            this.setState({listEnd: true});
            currentNextPage = this.state.currentPage;
        } else {
            currentNextPage = this.state.currentPage + this.state.perPage;
            this.setState({listEnd: false});
        }
        if (this.state.useFilter) {
            window.scrollTo(0, 0);
            this.setState({
                list: [
                    ...props.list.slice(
                        this.state.currentPage,
                        this.state.currentPage + this.state.perPage
                    )
                ],
                currentPage: currentNextPage,
                useFilter: false
            });
        } else {
            this.setState({
                list: [
                    ...this.state.list,
                    ...props.list.slice(
                        this.state.currentPage,
                        this.state.currentPage + this.state.perPage
                    )
                ],
                currentPage: currentNextPage
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (
            JSON.stringify(nextProps.filter) !== JSON.stringify(this.props.filter)
        ) {
            this.props.getGalleries(nextProps.filter);
        } else {
            this.setState({load: false});
            this.loadNextGalleries(nextProps);
        }
    }

    render() {
        return (
            <div className="row gallery-list">
                <GalleryFilter
                    filterOptions={this.props.filter}
                    onFilterChange={this.onFilterChange.bind(this)}
                    userSelected={this.state.userSelected}
                    topSelected={this.state.topSelected}
                />
                {this.props.list.length ? (
                    this.state.list.map(post => {
                        return <Post key={post.id} post={post}/>;
                    })
                ) : (
                    <p>Please wait, while galleries are loading</p>
                )}
                {this.state.load && (
                    <div className="loader">
                        <h3 className="loader__title">Loading...</h3>
                        <img
                            src="http://img35.laughinggif.com/pic/HTTP2kuZ2lmdHJ1bmsuY29tLzhwbTc2di5naWYlog.gif"
                            alt="loading..."
                            className="loader__image"
                        />
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    list: state.galleriesList,
    filter: state.galleriesFilter
});

const mapDispatchToProps = dispatch => ({
    getGalleries: params => {
        dispatch(asyncGetGalleries(params));
    },
    changeFilter: (name, newValue) => {
        dispatch(changeFilter(name, newValue));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(GalleriesList)
);
