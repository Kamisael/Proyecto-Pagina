import React from "react";
import {
    GoogleMap,
    withScripjs,
    withGoogleMap
} from 'react-google-maps';

const map = (props) => {
    return (
        <GoogleMap defaultZoom={10}
            defaultCenter={{ lat: 3.32287445, lng: -76.6096372970022 }} />
    );

};
export default withScripjs(
    withGoogleMap(
        map
    )
)
