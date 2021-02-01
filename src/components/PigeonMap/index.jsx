import React, { Component, Fragment, useState } from 'react';
import { Map, Marker, Overlay } from 'pigeon-maps';
import MapStyled from './map.styled';
import { MAPTILER_ACCESS_TOKEN, MAP_ID } from './api';

const PigeonMap = () => {
	const mapTilerProvider = (x, y, z, dpr) => {
		return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
			dpr >= 2 ? '@2x' : ''
		}.png?key=${MAPTILER_ACCESS_TOKEN}`;
	};

	return (
		<div>
			Map
			<Map
				provider={mapTilerProvider}
				defaultCenter={[51.6214, -3.9436]}
				defaultZoom={5}
				width={600}
				height={400}
			>
				<Marker
					anchor={[51.6214, -3.9436]}
					payload={1}
					onClick={({ event, anchor, payload }) => {}}
				/>

				<Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
					<img src="pigeon.jpg" width={240} height={158} alt="" />
				</Overlay>
			</Map>
		</div>
	);
};

export default PigeonMap;
