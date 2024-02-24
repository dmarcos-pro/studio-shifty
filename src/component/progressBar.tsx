import React, { useState, useEffect } from "react";
import { type ProgressBarProps } from "@type/component"

import common from '@scss/common.module.scss'

const ProgressBar = (props: ProgressBarProps) => {
	const { start, end } = props;

	const [currentMinutes, setCurrentMinutes] = useState(start);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentMinutes((prevMinutes) => {
				const newCount = prevMinutes + 1;

				if (newCount >= end) {
					clearInterval(intervalId);
					return end;
				}

				return newCount;
			});
		}, 2000 / (end - start));

		return () => clearInterval(intervalId);
	}, [start, end]);

	return (
		<div className={`${common.progressBar}`}>
			<span
				style={{
					width: `${currentMinutes}%`,
					backgroundColor: props.color
				}}
			></span>
		</div>
	)
};

export default ProgressBar;