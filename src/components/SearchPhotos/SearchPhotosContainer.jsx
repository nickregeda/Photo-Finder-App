import React from 'react';
import SearchPhotos from "./SearchPhotos";
import {getPhotos, setCurrentPage} from "../../redux/searchPhotoReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        photos: state.searchPhotoReducer.photos,
        totalPhotosCount: state.searchPhotoReducer.totalPhotosCount,
        totalPagesCount: state.searchPhotoReducer.totalPagesCount,
        pageSize: state.searchPhotoReducer.pageSize,
        currentPage: state.searchPhotoReducer.currentPage,
    }
}

export default connect(mapStateToProps, {getPhotos, setCurrentPage})(SearchPhotos)