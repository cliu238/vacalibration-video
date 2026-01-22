import React from 'react';
import {Audio} from 'remotion';
import {staticFile, interpolate} from 'remotion';

interface SceneAudioProps {
	audioFile: string;
	startDelay?: number;
	fadeInDuration?: number;
	fadeOutDuration?: number;
	volume?: number;
	sceneDuration?: number;
}

export const SceneAudio: React.FC<SceneAudioProps> = ({
	audioFile,
	startDelay = 0,
	fadeInDuration = 15,
	fadeOutDuration = 15,
	volume = 0.8,
	sceneDuration,
}) => {
	// Volume callback function for proper Remotion timeline display
	const getVolume = (frame: number): number => {
		return interpolate(
			frame,
			[
				0,
				fadeInDuration,
				sceneDuration
					? sceneDuration - fadeOutDuration
					: Number.MAX_SAFE_INTEGER,
				sceneDuration ? sceneDuration : Number.MAX_SAFE_INTEGER,
			],
			[0, volume, volume, 0],
			{
				extrapolateLeft: 'clamp',
				extrapolateRight: 'clamp',
			}
		);
	};

	return <Audio src={staticFile(audioFile)} volume={getVolume} />;
};
