import React from 'react';
import './Code.css';

const Code = () => (
	<div className="sublime-text">
		<div className="screen">
			<div className="left-bar" />
			<div className="top-bar">
				<div className="buttons" />
			</div>
			<div className="code">
				<div className="line line1">
					<p className="code-item green" /> <p className="code-item purple" />
				</div>
				<div className="line line2">
					<p className="code-item blue" /> <p className="code-item yellow" />{' '}
					<p className="code-item green" />
				</div>
				<div className="line line3">
					<p className="code-item transparent" /> <p className="code-item orange" />{' '}
					<p className="code-item green" />
					<p className="code-item purple" />
				</div>
				<div className="line line4">
					<p className="code-item transparent" /> <p className="code-item transparent" />
					<p className="code-item yellow" /> <p className="code-item blue" />{' '}
					<p className="code-item green"> </p>
				</div>
				<div className="line line5">
					<p className="code-item transparent" /> <p className="code-item transparent" />
					<p className="code-item purple" /> <p className="code-item orange" />{' '}
					<p className="code-item yellow" />
				</div>
				<div className="line line6">
					<p className="code-item transparent" /> <p className="code-item green" />{' '}
					<p className="code-item blue" />
					<p className="code-item purple"> </p>
				</div>
				<div className="line line7">
					<p className="code-item transparent" /> <p className="code-item yellow" />
					<p className="code-item purple" /> <p className="code-item green" />
				</div>
				<div className="line line8">
					<p className="code-item transparent" /> <p className="code-item transparent" />
					<p className="code-item orange" /> <p className="code-item green" />{' '}
					<p className="code-item purple"> </p>
				</div>
				<div className="line line9">
					<p className="code-item transparent" /> <p className="code-item blue" />{' '}
					<p className="code-item yellow" />
					<p className="code-item cursor" />
				</div>
			</div>
		</div>
	</div>
);

export default Code;
