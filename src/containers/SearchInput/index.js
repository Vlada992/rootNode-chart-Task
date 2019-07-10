import React from 'react';
import './style.css';
import { Col, FormGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

/*
* Using reactstrap module and font-awesome
* functional/presentational component rendering search input with reactstrap and fontawesome module
*/

function SearchInput(props) {
    let { searchCars, updateInputSearch } = props;
    return (
        <>
            <Col sm="12" className="input-search-col-1">
                <FormGroup className="form-group-own">
                    <div className="input-group">
                        <input type="search" className="form-control" onChange={updateInputSearch} />
                        <span onClick={e => searchCars(e)} id="input-own" className="input-group-text">
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div>
                </FormGroup>
            </Col>
        </>
    )
}

export default SearchInput;

