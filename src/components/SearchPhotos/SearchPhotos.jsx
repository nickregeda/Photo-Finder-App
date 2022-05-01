import React, {useState} from 'react';
import s from './SearchPhotos.module.css';
import {Formik, Form, Field, ErrorMessage} from "formik";
import SearchFormSchema from "../../ValidationForm/SearchFormSchema/SearchFormSchema";
import {Pagination} from "@mui/material";

const SearchPhotosForm = (props) => {
    return (
        <Form className={s.form}>
            <label className={s.search_label} htmlFor='query'>Photo Finder</label>
            <Field
                type='text'
                name='query'
                className={s.search_input}
                placeholder='Try "sky" or "Kyiv"...'
                autoComplete='off'
            />
            <button disabled={!props.query} className={s.search_button}>Search</button>
            <ErrorMessage className={s.error_message} name='query' component='div'/>
        </Form>
    )
}

const SearchPhotos = (props) => {
    const [query, setQuery] = useState()

    let photosElements = props.photos.map(p => <div key={p.id} className={s.item}><img className={s.photo}
                                                                                       src={p.urls.full}/></div>)

    let onSubmit = (values) => {
        props.setCurrentPage(1);
        setQuery(values.query)
        props.getPhotos(values.query, 1, props.pageSize);
    }

    let onPaginationChange = (num) => {
        props.setCurrentPage(num);
        props.getPhotos(query, num, props.pageSize);
    }

    return (
        <div className={s.container}>
            <Formik
                initialValues={{query: ''}}
                validationSchema={SearchFormSchema}
                onSubmit={onSubmit}
            >
                {({values}) => {
                    return <SearchPhotosForm query={values.query}/>
                }}
            </Formik>
            <div className={s.results_n_pagination}>
                <div className={s.results_counter}>Results: {props.totalPhotosCount} photos</div>
                <Pagination className={s.paginator}
                            count={props.totalPagesCount}
                            page={props.currentPage}
                            onChange={(_, num) => {
                                onPaginationChange(num);
                            }}/>
            </div>
            <div className={s.photos_list}>
                {photosElements}
            </div>
        </div>
    );
}

export default SearchPhotos;