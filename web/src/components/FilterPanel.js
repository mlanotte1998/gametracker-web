import React from 'react';

import "../styling/FilterPanel.css"

export default class FilterPanel extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            searchTerm: undefined,
            minDate : undefined,
            maxDate : undefined,
            ps4: undefined,
            xbox: undefined,
            switch: undefined,
            pc : undefined
        }
    }

    render() {
        return (
            <div className="FilterPanel">
                <h1 className="filterHeader">Filters</h1>
                <div>
                    Filter 1: Search Bar
                </div>
                <div>
                    Filter 2:  Date four inputs, if just year then show whole years,
                    if also months then do a more closed filtering
                </div>
                <div>
                    Filter 3: Buttons for each console, when all unclicked then all show
                </div>
            </div>
        )
    }

}