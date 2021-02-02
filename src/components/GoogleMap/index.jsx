import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import MapStyled from './map.styled';
import { ACCESS_TOKEN } from './api';
import data from './points';

const GoogleMap = (props) => {
	const [activeMarker, setActiveMarker] = useState();
	const [showingInfoWindow, setShowingInfoWindow] = useState();
	const [markerName, setMarkerName] = useState();

	const markerColors = {
		lost: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
		general: 'http://maps.google.com/mapfiles/ms/icons/yellow.png',
	};

	const center = {
		lat: 51.6214,
		lng: -3.9436,
	};

	const onMarkerClick = (props, marker) => {
		setActiveMarker(marker);
		setShowingInfoWindow(true);
		setMarkerName(marker.name);
	};

	const points = data.map((point, index) => {
		const iconColor =
			point.status === 'lost' ? markerColors.lost : markerColors.general;

		return (
			<Marker
				key={index}
				position={{ lat: point.lat, lng: point.lng }}
				onClick={onMarkerClick}
				icon={iconColor}
				{...point}
			/>
		);
	});

	return (
		<MapStyled>
			<Map google={props.google} initialCenter={center} zoom={10}>
				{points}
				<InfoWindow marker={activeMarker} visible={showingInfoWindow}>
					<div>
						<h1>{markerName}</h1>
					</div>
				</InfoWindow>
			</Map>
		</MapStyled>
	);
};

export default GoogleApiWrapper({
	apiKey: ACCESS_TOKEN,
})(GoogleMap);
