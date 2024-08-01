import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '@/styles/mainMap/mainMap.module.css';

const KakaoMap = dynamic(() => import('../components/mainMap/kakaoMap'), {
	ssr: false,
});

const MainMap: React.FC = () => {
	return (
		<div className={styles.container}>
			<div id="map-container" className={styles.mapContainer}>
				<KakaoMap />
			</div>
			<div id="overlay-container" className={styles.overlayContainer}>
				<h1>Main Map</h1>
				{/* 여기에 다른 요소들 추가 */}
			</div>
		</div>
	);
};

export default MainMap;
