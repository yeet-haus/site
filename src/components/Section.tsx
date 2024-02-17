import { SectionProps } from "../types/SectionProps";

function Section({ title, subtitles, contents }: SectionProps) {
	return (
		<div className="yeeter-section">
			<h4 className="section-title">{title}</h4>
			{subtitles.map((subtitle, index) => (
				<p key={index} className="text-xl lg:text-2xl text-left leading-none">
					<strong className="font-black">{subtitle}</strong> {' '}
					{contents[index]}
				</p>
			))}
		</div>
	);
}

export default Section;
